import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import TransactionList from "../../shared/components/transactionList/TransactionList"
import TransactionListMoblie from "../../shared/components/transactionList/TransactionListMoblie"
import { transactionList } from "../../shared/store/actions/nftItmesActions"
import prop_computer from "../../assets/images/prop_computer.png"
import "../../assets/styles/styles.css"
// import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Transaction() {
  const nftItems = useSelector((state) => state.transactionItems);
  const dispatch = useDispatch();

  const { transactionItems } = nftItems;

  //Users Transactions
  const userTransactions = () => {
    try {
      if (localStorage.getItem("token")) {
        if (!transactionItems) {
          dispatch(transactionList());
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  //Transactions List
  useEffect(() => {
    try {
      userTransactions();
    } catch (error) {
      alert(error);
    }
  }, [transactionItems]);

	//console.log(transactionItems?.data.nfts);
	return (
		<section className="transaction-page common-container">
			<div className="outer-content-box">
				<div className="inner-box">
					<div className="title-box blue-bg d-lg-none d-block">
						<h4>Transactions</h4>
					</div>
					<div className="row m-0">
						<div className="col-lg-3 col-space d-lg-block d-none">
							<div className="transaction-box">
								<div className="title-box blue-bg">
									<h4>Transactions</h4>
								</div>
								<div className="imgg-box">
									<img src={prop_computer} alt="prop_computer" />
								</div>
							</div>
						</div>
						<div className="col-lg-9 p-0">
							<div className="mCustomScrollbar" data-mcs-theme="dark">
								<div className="transaction-table csb d-lg-block d-none">
									<div className="table-responsivee">
										<table width="100%">
											<thead>
												<tr>
													<th className="date">Date</th>
													<th className="time">Time</th>
													<th className="type">Type</th>
													<th className="item">Item</th>
													<th className="price">Price</th>
												</tr>
											</thead>
											<tbody className="csb">
												{transactionItems?.data?.nfts?.map(
													(transaction, _id) => (
														<TransactionList
															key={_id}
															transaction={transaction}
														/>
													)
												)}
											</tbody>
										</table>
									</div>
								</div>
							</div>
							<div className="transaction-data-box d-lg-none d-block">
								<ul>
									{transactionItems?.data?.nfts?.map((transaction, _id) => (
										<TransactionListMoblie
											key={_id}
											transaction={transaction}
										/>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
