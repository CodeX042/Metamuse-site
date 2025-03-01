import { nftContract } from "./contract-init";

export const assignShares = async (contributors, shares) => {
    try {
        await nftContract.methods
            .assignShares(contributors, shares)
            .send({ from: account });
        console.log('Shares assigned successfully!');
    } catch (error) {
        console.error('Error assigning shares:', error);
    }
};


export async function buyNFT (tokenId, paymentAmount){
    try {
        await nftContract.methods
            .buyNFT(tokenId)
            .send({ from: account, value: Web3.utils.toWei(paymentAmount, 'ether') });
        console.log('NFT purchased successfully!');
    } catch (error) {
        console.error('Error buying NFT:', error);
    }
};
export async function mintNFT(toAddress, tokenURI, userAddress) {
  try {
    // Check if the user address is provided
    if (!userAddress) return;

    // Prepare the transaction data for minting
    const tx = nftContract.methods.mintNFT(toAddress, tokenURI);

    // Send the transaction to the blockchain
    const receipt = await tx.send({ from: userAddress });

    console.log("Transaction confirmed", receipt);

    // Access the token ID from the receipt logs
    const tokenId = receipt.events.Transfer.returnValues.tokenId;
    alert("NFT Minted! Token ID: " + tokenId);
  } catch (error) {
    console.error("Error minting NFT:", error);
  }
}


export const getTokenURI = async (tokenId) => {
    try {
        const uri = await nftContract.methods.tokenURI(tokenId).call();
        console.log('Token URI:', uri);
        return uri;
    } catch (error) {
        console.error('Error fetching token URI:', error);
    }
};

export const setBridgeAddress = async (newBridgeAddress) => {
    try {
        await nftContract.methods
            .setBridgeAddress(newBridgeAddress)
            .send({ from: account });
        console.log('Bridge address set successfully!');
    } catch (error) {
        console.error('Error setting bridge address:', error);
    }
};

export const transferNFT = async (tokenId, newOwner) => {
    try {
        await nftContract.methods
            .transferNFT(tokenId, newOwner)
            .send({ from: account });
        console.log('NFT transferred successfully to:', newOwner);
    } catch (error) {
        console.error('Error transferring NFT:', error);
    }
};


export async function fetchMetadataFromIPFS(ipfsURI) {
  const url = ipfsURI.replace("ipfs://", "https://ipfs.io/ipfs/");
  try {
    const response = await fetch(url);
    const metadata = await response.json();
    console.log("NFT Metadata:", metadata);
  } catch (error) {
    console.error("Error fetching metadata:", error);
  }
}