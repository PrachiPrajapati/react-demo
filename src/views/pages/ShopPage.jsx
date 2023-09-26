import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import NftItemList from "../../shared/components/nftItemList/NftItemList"
import ice_cream_cup from "../../assets/images/ice-cream-cup.png"
import { catogeryItemsList } from "../../shared/store/actions/nftItmesActions"
import "../../assets/styles/styles.css"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function ShopPage() {
	const catogeryItems = useSelector((state) => state.catogeryItems)
	//const nftItems = useSelector((state) => state.nftItems)
	const dispatch = useDispatch()

	const { catogeryItemsDetails } = catogeryItems

	const toastOptions = {
		position: "top-right",
		autoClose: 2000,
		pauseOnHover: true,
		draggable: true,
		theme: "dark",
	}
	
	//All Nft Items
	const allNftItems = () => {
		try {
			if (!catogeryItemsDetails?.data?.nfts?._id) {
				dispatch(catogeryItemsList())
			}
		} catch (error) {
			toast.error(error, toastOptions)
		}
	}

	//Items Lists
	useEffect(() => {
		allNftItems()
	}, [])

	return (
		<>
			<section className="shop-page common-container no-scrollbar">
				<div className="outer-content-box">
					<div className="inner-box">
						<div className="row">
							<div className="col-lg-8 col-space">
								<div className="your-goddess-box">
									<div className="title-box pink-bg big-pink">
										<h4>Boba Shop</h4>
									</div>
									<div className="mCustomScrollbar">
										<div className="csb goddess-product-list-box">
											{catogeryItemsDetails?.data?.nfts?.map((nfts, _id) => (
												<NftItemList key={_id} nft={nfts} id={_id} />
											))}
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 ">
								<div className="ice-img-box">
									<img src={ice_cream_cup} alt="ice-cream-cup" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
