import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import Link from "next/link";

import { ClipLoader } from "react-spinners";


import { marketplaceAddress } from "../config";

import NFTMarketplace from "../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";

export default function Home() {
  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    loadNFTs();
  }, []);

  async function loadNFTs() {
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
    setLoadingState(false);
  }
  
  async function buyNft(nft) {
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      signer
    );

    /* user will be prompted to pay the asking proces to complete the transaction */
    const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
    const transaction = await contract.createMarketSale(nft.tokenId, {
      value: price,
    });
    await transaction.wait();
    loadNFTs();
  }

  if (loadingState === false && !nfts.length)
    return (
      <h1 className="px-20 py-10 text-3xl">
        Currently no asset in marketplace
      </h1>
    );
  
  else if (loadingState === true) {
    return (
      <div className=" h-screen w-screen flex justify-center items-center">
        <ClipLoader loading size={200} color="white" />
      </div>
    );
  }
  return ( 
    <div className="flex justify-center m-20">
      <div className="px-4" style={{ maxWidth: "1600px" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {nfts.map((nft, i) => (
            <div
              key={i}
              className="shadow rounded-xl overflow-hidden bg-white px-3"
            >
              <>
                <iframe
                  className="rounded-xl mt-4"
                  src={nft.image}
                  frameBorder="0"
                  width="100%"
                ></iframe>
              </>

              <div className="p-4 my-1 flex flex-col items-center">
                <Link href={`NFTs/${nft.tokenId}`}>
    
                  <a className="text-2xl font-bold my-2 ">{nft.name}</a>
                </Link>
                <div style={{ overflow: "hidden" }}>
                  <p className="text-gray-500 my-3">{nft.description}</p>
                </div>
              </div>

              <div className="p-4 flex flex-col items-center">
                <p className="text-2xl font-bold text-black">
                  {nft.price} MATIC
                </p>
                <button
                  className="mt-4 w-full bg-pink-500 text-white font-bold py-2 px-12 rounded"
                  onClick={() => buyNft(nft)}
                >
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
