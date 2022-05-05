import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/LUVNFTV Logo.png";

const Navbar = ({ isConnected, fetchResponse }) => {
  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        if (accounts) {
          setCurrentAccount(accounts[0]);
          setIsConnected(true);
        }

        fetchResponse(accounts[0]);
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("Wallet not found");
    }
  };

  return (
    <nav className="px-5 py-10 bg-gray-900">
      <div className="flex justify-between min-w-md px-24">
        <Link href="/">
          <Image src={logo} width="150px" height="50px" className="-m-24" />
        </Link>
        <div className="flex">
          <div className="flex mt-4 font-bold ml-8 text-left">
            <Link href="/">
              <a className="mr-4 text-white font-Oswald">Home</a>
            </Link>
            <Link href="/stream">
              <a className="mr-6 text-white font-Oswald">Stream Video</a>
            </Link>
            <Link href="/create-nft">
              <a className="mr-6 text-white font-Oswald">Create Video</a>
            </Link>
            <Link href="/my-nfts">
              <a className="mr-6 text-white font-Oswald">My Videos</a>
            </Link>
            <Link href="/dashboard">
              <a className="mr-6 text-white">Dashboard</a>
            </Link>
          </div>

          {isConnected ? (
            <div className="text-white bg-pink-600 px-5 py-3 rounded-md mx-3">
              Connected
            </div>
          ) : (
            <button
              className="bg-gray-100 px-5 py-3 rounded-md mx-2"
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
