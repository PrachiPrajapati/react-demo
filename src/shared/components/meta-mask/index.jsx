import React, { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Link, useNavigate } from "react-router-dom"
import { TOKEN_BALANCE } from "../../store/constants/nftsConstants"
import { logInUser } from "../../store/actions/loginUserActions"
// eslint-disable-next-line no-unused-vars
import { tokenBalances } from "../../store/actions/buyBidItemActions"

function MetaMask() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [isOpen, setIsOpen] = useState(false)

	const { loginUser } = useSelector((state) => state.loginUsers)
	const { tokenBalance } = useSelector((state) => state.tokenBalanceTotal)

	// console.log(loginUser)

	const toastOptions = {
		position: "bottom-right",
		autoClose: 8000,
		pauseOnHover: true,
		draggable: true,
		theme: "dark",
	}

	async function onConnect() {
		if (window.ethereum) {
			try {
				const res = await window.ethereum.request({
					method: "eth_requestAccounts",
				})
				handleLogin(res[0])
			} catch (err) {
				console.error(err)
			}
		} else {
			toast.error("MetaMask is not installed", toastOptions)
		}
	}

	function onDisconnect() {
		console.log("onDisconnect")
		localStorage.clear()
		dispatch({ type: TOKEN_BALANCE, payload: undefined })
		setIsOpen(false)
		navigate("/")
	}

	function handleLogin(address) {
    dispatch(logInUser(address))
	}

	// eslint-disable-next-line no-unused-vars
	function getLoggedUser(address) {
		dispatch(tokenBalances())
		// dispatch(clientUserProfile(address));
	}

	useEffect(() => {
		if (loginUser?.data) {
			localStorage.setItem("wallet", loginUser?.data?.sWalletAddress)
			localStorage.setItem("token", loginUser?.data?.token)
			getLoggedUser(loginUser?.data?.sWalletAddress)
		}
	}, [loginUser])

	useEffect(() => {
		const wallet = localStorage.getItem("wallet")
		if (wallet) getLoggedUser(wallet)
	}, [])

	useEffect(() => {
		if (window.ethereum) {
			window.ethereum.on("accountsChanged", (account) => {
				console.log({ account })
				if (account?.length > 0) handleLogin(account[0])
				else if (account?.length === 0) onDisconnect()
			})

			window.ethereum.on("networkChanged", (networkId) => {
				if (networkId !== "1") {
					toast.error("You can only use the ethereum network", toastOptions)
				}
			})
		}
	}, [])

	return (
		<div
			className={
				isOpen
					? "active-btn-box dropdown-btn-box show-dropdown"
					: "active-btn-box dropdown-btn-box "
			}
		>
			{
				<div
					className={
						isOpen ? "dropdown active-btn show p-0" : "dropdown active-btn p-0"
					}
				>
					{tokenBalance?.data ? (
						<button
							className={`m-0 d-block dropdown-toggle${
								tokenBalance === undefined ? "-before" : ""
							} `}
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							onClick={() => setIsOpen(!isOpen)}
						>
							{tokenBalance?.data?.nTokenBalance}
						</button>
					) : (
						<button
							className={`m-0 d-block dropdown-toggle${
								tokenBalance === undefined ? "-before" : ""
							} `}
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							onClick={onConnect}
						>
							Connect
						</button>
					)}

					{isOpen && (
						<div
							className={"dropdown-menu show"}
							aria-labelledby="dropdownMenuButton"
						>
							<Link className="dropdown-item" to="/nftpage">
								My NFTs
							</Link>
							<Link className="dropdown-item" to="/transaction">
								Transactions
							</Link>
							<Link className="dropdown-item" to="/" onClick={onDisconnect}>
								Disconnect
							</Link>
						</div>
					)}
				</div>
			}
		</div>
	)
}
export default React.memo(MetaMask)
