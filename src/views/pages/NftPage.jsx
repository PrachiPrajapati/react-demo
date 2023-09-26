import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import PropTypes from "prop-types"
import NftBuyItemList from "../../shared/components/soldItemList/SoldItemList"
import ice_cream from "../../assets/images/ice-cream.png"
import looksrare_seeklogo from "../../assets/images/looksrare-seeklogo.svg"
import subtract_blue from "../../assets/images/Subtract-blue.svg"
import "../../assets/styles/styles.css"
import { transactionList } from "../../shared/store/actions/nftItmesActions"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function MyNftPage() {
	const nftItems = useSelector((state) => state.transactionItems)
	const dispatch = useDispatch()

	const { transactionItems } = nftItems
	const toastOptions = {
		position: "top-right",
		autoClose: 2000,
		pauseOnHover: true,
		draggable: true,
		theme: "dark",
	}

	//Users Buy Nft Itmes
	const nftsItems = () => {
		try {
			if (localStorage.getItem("token")) {
				if (!transactionItems) {
					dispatch(transactionList())
				}
			}
		} catch (error) {
			toast.error(error, toastOptions)
		}
	}

	//Buy Items List
	useEffect(() => {
		try {
			nftsItems()
		} catch (error) {
			toast.error(error, toastOptions)
		}
	}, [transactionItems])

	return (
		<section className="my-nft-page common-container no-scrollbar">
			{transactionItems?.data?.nfts === undefined ? (
				<div className="outer-content-box empty-nft-page">
					<div className="inner-box">
						<div className="row flex-md-row flex-column-reverse">
							<div className="col-lg-7 col-space">
								<div className="your-goddess-box">
									<div className="title-box blue-bg">
										<h4>Your Goddesses</h4>
									</div>
									<div className="csb goddess-product-list-box remove-csb">
										<ul className="goddess-product-list">
											{transactionItems?.data?.nfts?.map((item, index) => (
												<NftBuyItemList key={index} item={item} />
											))}
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg-5 col-space no-scrollbar">
								<div className="stacking-yield">
									<div className="title-box blue-bg">
										<h4>Staking Yield</h4>
									</div>

									<div className="stacking-inner csb remove-csb">
										<ul className="stacking-yield-item">
											<li>
												<label htmlFor="">Tier 1</label>
												<div className="ice-box">
													<ul>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
													</ul>
													<h5 className="price-box">+150</h5>
												</div>
											</li>
											<li>
												<label htmlFor="">Tier 1</label>
												<div className="ice-box">
													<ul>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
													</ul>
													<h5 className="price-box">+150</h5>
												</div>
											</li>
											<label htmlFor="">Tier 1</label>
											<li>
												<div className="ice-box">
													<ul>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
													</ul>
													<h5 className="price-box">+150</h5>
												</div>
											</li>
										</ul>
										<div className="title-box  pink-bg d-flex align-items-center justify-content-between">
											<h4>Staked Goddesses</h4>
											<h4>+850</h4>
										</div>
										<ul className="stacking-yield-item">
											<li>
												<label htmlFor="">Tier 1</label>
												<div className="ice-box">
													<ul>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
													</ul>
													<h5 className="price-box">+150</h5>
												</div>
											</li>
										</ul>
										<div className="title-box  pink-bg d-flex align-items-center justify-content-between">
											<h4>Staked Goddesses</h4>
											<h4>+850</h4>
										</div>
										<ul className="stacking-yield-item">
											<li>
												<label htmlFor="">Tier 1</label>
												<div className="ice-box">
													<ul>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
													</ul>
													<h5 className="price-box">+150</h5>
												</div>
											</li>
										</ul>
										<div className="title-box  blue-bg d-flex align-items-center justify-content-between">
											<h4>Total</h4>
											<h4>+850</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="empty-nft">
						<h1>Buy a Goddess to start earning $BOBA</h1>
						<div className="imgbox">
							<Link to="/">
								<img src={looksrare_seeklogo} alt="looksrare-seeklogo" />
							</Link>
							<Link to="/">
								<img src={subtract_blue} alt="Subtract" />
							</Link>
						</div>
					</div>
				</div>
			) : (
				<div className="outer-content-box">
					<div className="inner-box">
						<div className="row flex-md-row flex-column-reverse">
							<div className="col-lg-7 col-space">
								<div className="your-goddess-box">
									<div className="title-box blue-bg">
										<h4>Your Goddesses</h4>
									</div>
									<div className="csb goddess-product-list-box remove-csb">
										<ul className="goddess-product-list">
											{transactionItems?.data?.nfts?.map((item, index) => (
												<NftBuyItemList key={index} item={item} />
											))}
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg-5 col-space no-scrollbar">
								<div className="stacking-yield">
									<div className="title-box blue-bg">
										<h4>Staking Yield</h4>
									</div>

									<div className="stacking-inner csb remove-csb">
										<ul className="stacking-yield-item">
											<li>
												<label htmlFor="">Tier 1</label>
												<div className="ice-box">
													<ul>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
													</ul>
													<h5 className="price-box">+150</h5>
												</div>
											</li>
											<li>
												<label htmlFor="">Tier 1</label>
												<div className="ice-box">
													<ul>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
													</ul>
													<h5 className="price-box">+150</h5>
												</div>
											</li>
											<li>
												<label htmlFor="">Tier 1</label>
												<div className="ice-box">
													<ul>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
													</ul>
													<h5 className="price-box">+150</h5>
												</div>
											</li>
										</ul>
										<div className="title-box  pink-bg d-flex align-items-center justify-content-between">
											<h4>Staked Goddesses</h4>
											<h4>+850</h4>
										</div>
										<ul className="stacking-yield-item">
											<li>
												<label htmlFor="">Tier 1</label>
												<div className="ice-box">
													<ul>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
													</ul>
													<h5 className="price-box">+150</h5>
												</div>
											</li>
										</ul>
										<div className="title-box  pink-bg d-flex align-items-center justify-content-between">
											<h4>Staked Goddesses</h4>
											<h4>+850</h4>
										</div>
										<ul className="stacking-yield-item">
											<li>
												<label htmlFor="">Tier 1</label>
												<div className="ice-box">
													<ul>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
														<li>
															<img src={ice_cream} alt="ice-cream" />
														</li>
													</ul>
													<h5 className="price-box">+150</h5>
												</div>
											</li>
										</ul>
										<div className="title-box  blue-bg d-flex align-items-center justify-content-between">
											<h4>Total</h4>
											<h4>+850</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</section>
	)
}

MyNftPage.propTypes = {
	user: PropTypes.object,
}
