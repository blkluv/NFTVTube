/* pages/_app.js */
import "../styles/globals.css";
import Link from "next/link";
import { useState,useEffect } from "react";
import axios from "axios";


function MyApp({ Component, pageProps }) {
  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [accountBalance, setAccountBalance] = useState(null);

  useEffect(() => {
    window.ethereum.on("accountsChanged", handleAccountsChanged);
    handleReload();
  }, []);

  const handleAccountsChanged = (a) => {
    setCurrentAccount(a[0]);
    console.log("accounts changed")
  };

  const handleReload = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts[0] != undefined) {
        setCurrentAccount(accounts[0]);
        setIsConnected(true);
      }
    }
  };

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

  const fetchResponse = async (account) => {
    const response = await axios.post(
      "https://api-eu1.tatum.io/v3/nft/deploy/",
      {
        name: "MMC",
        chain: "CELO",
        feeCurrency: "CELO",
        symbol: "MMC",
        signatureId: "b7ad58f7-d826-4db5-8a52-4f492935a7b4",
      },
      {
        headers: {
          "x-api-key": "e4777a2e-a801-4bd9-a105-97ea95c1f13b_100",
        },
      }
    );

    const { signatureId } = response.data;

    const { data } = await axios.get(
      "https://api-eu1.tatum.io/v3/kms/" + signatureId,
      {
        headers: {
          "x-api-key": "e4777a2e-a801-4bd9-a105-97ea95c1f13b_100",
        },
      }
    );

    const txConfig = JSON.parse(data.serializedTransaction);
    txConfig.from = account;
    txConfig.gasPrice = txConfig.gasPrice
      ? parseInt(txConfig.gasPrice).toString(16)
      : undefined;
    console.log(txConfig);
    console.log(
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [txConfig],
      })
    );

  };

  return (
    <div>
      <nav className="px-5 py-10 bg-gray-900">
        <div className="flex justify-between min-w-md px-16">
          <Link href="/">
          <a className="text-3xl font-bold text-white" > NFTVTube </a>
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
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
