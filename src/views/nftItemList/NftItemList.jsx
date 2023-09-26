import PropTypes from "prop-types";
import "../../assets/styles/styles.css";

import CatogeryItems from "./CatogeryItems";

export default function NftItemList({ nft }) {
  //console.log("nfttttt", nft)

  return (
    <>
      <div className="heading">
        <h3>{nft?._id}</h3>
      </div>
      <ul className="goddess-product-list">
        {
          nft?._id && (
            <>
              {nft?.nfts.map((nfts, _id) => (
                <li key={_id}>
                  <CatogeryItems nft={nfts} />
                </li>
              ))}
            </>
          )
          // ) : (
          //   ""
          // )
        }
      </ul>
    </>
  );
}

NftItemList.propTypes = {
  nft: PropTypes.object,
};
