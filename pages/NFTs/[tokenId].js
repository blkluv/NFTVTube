import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import axios from "axios";
import Web3Modal from "web3modal";

import { marketplaceAddress } from "../../config";

import NFTMarketplace from "../../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";

const NFTPage = () => {
  const [nfts, setNfts] = useState([]);
  const [selectedNft, setSelectedNft] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const router = useRouter();
  const tokenId = router.query.tokenId;

  useEffect(() => loadNFTs(), []);
  useEffect(() => updateSelectedNFT(), [nfts]);

  async function loadNFTs() {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        "https://rpc-mumbai.matic.today"
      );
      const contract = new ethers.Contract(
        marketplaceAddress,
        NFTMarketplace.abi,
        provider
      );
      const data = await contract.fetchMarketItems();

      const items = await Promise.all(
        data.map(async (i) => {
          const tokenUri = await contract.tokenURI(i.tokenId);
          const meta = await axios.get(tokenUri);
          let price = ethers.utils.formatUnits(i.price.toString(), "ether");
          let item = {
            price,
            tokenId: i.tokenId.toNumber(),
            seller: i.seller,
            owner: i.owner,
            image: meta.data.image,
            name: meta.data.name,
            description: meta.data.description,
          };
          return item;
        })
      );

      setNfts(items);
    } catch (err) {
      console.log("Load Nft error: ", err);
    }
  }

  const updateSelectedNFT = async () => {
    nfts.map((nft) => {
      if (Number(tokenId) === nft.tokenId) {
        setSelectedNft(nft);
        setIsLoaded(true);
      } else {
        console.log("NFT Not Found");
      }
    });
  };

  // async function buyNft(nft) {
  //     alert("calling")
  //     /* needs the user to sign the transaction, so will use Web3Provider and sign it */
  //     const web3Modal = new Web3Modal();
  //     const connection = await web3Modal.connect();
  //     const provider = new ethers.providers.Web3Provider(connection);
  //     const signer = provider.getSigner();
  //     const contract = new ethers.Contract(
  //       marketplaceAddress,
  //       NFTMarketplace.abi,
  //       signer
  //     );

  //     /* user will be prompted to pay the asking proces to complete the transaction */
  //     const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
  //     const transaction = await contract.createMarketSale(nft.tokenId, {
  //       value: price,
  //     });
  //     await transaction.wait();
  //   }

  return (
    <div>
      {isLoaded ? (
        <div className="flex items-start justify-center">
          <div className="flex flex-col bg-gray-900 items-center w-screen mx-20">
            
              <iframe
                className="rounded-xl object-cover w-3/6 h-96 mx-36 mt-12"
                src={selectedNft.image}
              ></iframe>

              <div className="flex items-center justify-start w-full my-10 px-32">
                <div className="my-6 w-3/4 m-5">
                  <h1 className="text-6xl font-semibold text-white uppercase">
                    {selectedNft.name}
                  </h1>
                  <p className="text-xl text-white my-10">
                    {selectedNft.description}
                  </p>
                </div>
                <div className="flex flex-col items-center w-1/4 bg-g m-5">
                  <h1 className="text-white text-3xl  my-3">{selectedNft.price} MATIC</h1>
                  <button className="my-3 text-white text-md bg-pink-600 rounded-md px-20 py-4 ">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
      ) : (
        <h1> Not Loaded </h1>
      )}
    </div>
  );
};

export default NFTPage;
