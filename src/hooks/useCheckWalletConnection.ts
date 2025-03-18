import { useWallet } from "@suiet/wallet-kit";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { toast } from "react-toastify";

function useCheckWalletConnection() {
	const { connected } = useWallet();
	const navigate = useNavigate();

	useEffect(() => {
		if (!connected) {
			toast.error("Wallet not connected! Redirecting to home...");
			navigate({ to: "/" });
		}
	}, [connected, navigate]);
}

export default useCheckWalletConnection;
