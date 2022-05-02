/* pages/_app.js */
import "../styles/globals.css";
import { useState,useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

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
      <Navbar fetchResponse={fetchResponse} isConnected={isConnected}/>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
