/* eslint-disable unicorn/filename-case */
/* eslint-disable no-alert */
import { Link } from "@tanstack/react-router";
import { Menu, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Web3 from "web3";

import { setConnectedWallet } from "@/redux/slice/user-slice";

import Button from "../Form/Button";

const Header: React.FC = () => {
	const [dropdownVisible, setDropdownVisible] = useState(false);
	const dispatch = useDispatch();
	const [address, setAddress] = useState<string | null>(null);
	const [currentUser, setCurrentUser] = useState<{ accessToken?: any } | null>(null);
	const [web3, setWeb3] = useState<Web3 | null>(null);

	useEffect(() => {
		// Check if window.ethereum is available
		if (window.ethereum) {
			const web3Instance = new Web3(window.ethereum);
			setWeb3(web3Instance);
		}
		else {
			console.warn("MetaMask is not installed. Please consider installing it to use wallet features.");
		}

		// Retrieve user from localStorage safely
		try {
			const user = JSON.parse(localStorage.getItem("user") || "{}");
			setCurrentUser(user);
		}
		catch (error) {
			console.error("Error accessing localStorage:", error);
		}
	}, []);

	// Check wallet connection status on mount
	useEffect(() => {
		const checkWalletConnection = async () => {
			if (web3) {
				const accounts = await web3.eth.getAccounts();
				if (accounts.length > 0) {
					setAddress(accounts[0]);
					dispatch(setConnectedWallet(accounts[0]));
				}
			}
		};
		checkWalletConnection();
	}, [dispatch, web3]);

	const connectWallet = async () => {
		if (web3) {
			try {
				const accounts = await web3.eth.requestAccounts();
				if (accounts.length > 0) {
					setAddress(accounts[0]);
					dispatch(setConnectedWallet(accounts[0]));
				}
			}
			catch (error) {
				console.error("Wallet connection failed:", error);
			}
		}
		else {
			alert("MetaMask is not installed. Please install it to connect your wallet.");
		}
	};

	const disconnectWallet = () => {
		setAddress(null);
		dispatch(setConnectedWallet(null));
	};

	const formattedAddress = address ? `${address.slice(0, 6)}...${address.slice(-4)}` : null;

	const toggleDropdown = () => {
		setDropdownVisible(prev => !prev);
	};

	return (
		<header className="top-0 flex items-center justify-between bg-black p-4 text-white">
			<div className="flex items-center space-x-4">
				<Link href="/"><img src="/asset/logo.svg" alt="logo" className="h-[50px]" /></Link>
				<Link href="/ongoing-projects" className="flex h-[50px] items-center rounded-[50px] border-[3px] border-[#D42C2CB2] px-6 py-1 text-center outline-none">
					Studio
				</Link>
			</div>

			<div className="flex items-center space-x-2">
				<div className="flex items-center rounded-full border border-white bg-none px-4">
					<input
						type="text"
						placeholder="Search"
						className="rounded border-none  bg-transparent px-4 py-1 text-white outline-none"
					/>
					<Search className="text-white" />
				</div>

				{/* Display wallet address, connect button, or disconnect button */}
				{address
					? (
							<div className="ml-4 flex items-center space-x-2">
								<span>{formattedAddress}</span>
								<button
									onClick={disconnectWallet}
									className="rounded-full border border-white px-4 py-2 text-white"
								>
									Disconnect Wallet
								</button>
							</div>
						)
					: (
							<button
								onClick={connectWallet}
								className="ml-4 rounded-full border border-white px-4 py-2 text-white"
							>
								Connect Wallet
							</button>
						)}

				{/* Dropdown Menu */}
				{!currentUser?.accessToken
					? (
							<div onClick={toggleDropdown} className="relative">
								<Menu className="cursor-pointer text-white" />
								{dropdownVisible && (
									<div className="absolute right-0 z-50 mt-2 flex w-40 flex-col rounded-lg bg-white p-4 text-black shadow-lg">
										<Link href="/auth/sign-up" className="mb-2 w-full rounded-full border border-[#D42C2CB2] py-2 text-center text-[#D42C2CB2]">
											Sign-up
										</Link>
										<Link href="/auth/sign-in" className="w-full rounded-full border border-[#D42C2CB2] py-2 text-center text-[#D42C2CB2]">
											Log-in
										</Link>
									</div>
								)}
							</div>
						)
					: (
							<Button
								label="Logout"
								className="w-[100px] bg-[#D42C2CB2] text-white"
								onClick={() => {
									localStorage.clear();
									window.location.reload();
								}}
							/>
						)}
			</div>
		</header>
	);
};

export default Header;
