import WalletBalance from "./WalletBalance";
import { useEffect, useState } from "react";

import { ethers } from "ethers";
import DevsN3ARMe from "../artifacts/contracts/DevsN3ARMe.sol/DevsN3ARMe.json";

const contractAddress = "0x9E423D0dAb80d739691e1C4Ad65d664806777bD4";

const provider = new ethers.providers.Web3Provider(window.ethereum);

// get the end user
const signer = provider.getSigner();

// get the smart contract
const contract = new ethers.Contract(contractAddress, DevsN3ARMe.abi, signer);

function Home() {
  const [totalMinted, setTotalMinted] = useState<number>(0);
  useEffect(() => {
    getCount();
  }, []);

  const getCount = async () => {
    const count = await contract.count();
    console.log(parseInt(count));
    setTotalMinted(parseInt(count));
  };

  return (
    <div>
      <WalletBalance />

      <h1>Fired Guys NFT Collection</h1>
      <div className="container">
        <div className="row">
          {Array(totalMinted + 1)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="col-sm">
                <NFTImage tokenId={i} getCount={getCount} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function NFTImage({
  tokenId,
  getCount,
}: {
  tokenId: number;
  getCount: Function;
}) {
  const contentId = "QmRwzzF7vX3KrLEmQY2NpfVt3CAxaugfe6EV46XM8rZqL6";
  const metadataURI = `${contentId}/${tokenId}.json`;
  const imageURI = `https://gateway.pinata.cloud/ipfs/${contentId}/Egg%20${
    tokenId + 1
  }.png`;
  //   const imageURI = `img/${tokenId}.png`;

  const [isMinted, setIsMinted] = useState<boolean>(false);
  useEffect(() => {
    getMintedStatus();
  }, [isMinted]);

  const getMintedStatus = async () => {
    const result = await contract.isContentOwned(metadataURI);
    console.log(result);
    setIsMinted(result);
  };

  const mintToken = async () => {
    // const connection = contract.connect(signer);
    const addr = await signer.getAddress();
    const result = await contract.payToMint(addr, metadataURI, {
      value: ethers.utils.parseEther("0.0001"),
    });

    await result.wait();
    getMintedStatus();
    getCount();
  };

  async function getURI() {
    const uri = await contract.tokenURI(tokenId);
    alert(uri);
  }
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={isMinted ? imageURI : "img/placeholder.png"}
        alt=""
      ></img>
      <div className="card-body">
        <h5 className="card-title">ID #{tokenId}</h5>
        {!isMinted ? (
          <button className="btn btn-primary" onClick={mintToken}>
            Mint
          </button>
        ) : (
          <button className="btn btn-secondary" onClick={getURI}>
            Taken! Show URI
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;
