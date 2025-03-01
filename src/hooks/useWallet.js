import { useState, useEffect } from 'react';
import { useWallet as useThirdwebWallet } from '@thirdweb-dev/react';

const ARBITRUM_CHAIN_ID = '0xA4B1'; // Arbitrum One chain ID

export const useWallet = () => {
    const { connect, address, error } = useThirdwebWallet();
    const [walletAddress, setWalletAddress] = useState<string | null>(null);

    useEffect(() => {
        if (address) {
            setWalletAddress(`${address.slice(0, 6)}...${address.slice(-4)}`);
        }
    }, [address]);

    const connectWallet = async () => {
        try {
            await connect(); // Connect to the wallet
        } catch (err) {
            console.error('Wallet connection error:', err);
        }
    };

    return {
        walletAddress,
        connectWallet,
        error: error ? 'Could not connect to wallet. Please try again.' : null // Handle Thirdweb errors
    };
};
