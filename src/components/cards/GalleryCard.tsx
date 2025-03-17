import { useWallet } from "@suiet/wallet-kit";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { setNFTToBid } from "@/redux/slice/canvas-slice";

interface GalleryCardProps {
	image: string;
	title: string;
	creator: string;
	price: string;
	timeLeft: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ image, title, creator, price, timeLeft }) => {
	const dispatch = useDispatch();

	const wallet = useWallet();

	function checkConnection() {
		if (wallet.status !== "connected") {
			toast.error("Login first to access this page");
		}
	}

	return (
		<div className="relative mb-4 overflow-hidden rounded-xl bg-white/10 shadow-lg backdrop-blur-md">
			{/* Image */}
			<img src={image} alt={title} className="h-auto w-full rounded-xl object-cover transition-all duration-500 ease-in-out hover:scale-110" />

			{/* Overlay with Glassmorphism Effect */}
			<div className="absolute inset-x-0 bottom-0 flex h-[204px] flex-col justify-between rounded-b-xl bg-white/20 p-4 backdrop-blur-lg">
				{/* Card Content */}
				<div className="flex w-3/5 flex-col gap-4">
					<h3 className="text-[32px] font-bold text-white">{title}</h3>
					<p className="text-sm text-gray-300">
						Owned By
						{creator}
					</p>
					<p className="text-md font-bold text-gray-100">{price}</p>
				</div>

				{/* Time Left */}
				<div className="absolute bottom-[78px] right-2 flex flex-col items-start gap-0">
					<p className="font-semibold text-[#FF3F46]">Remaining Time</p>
					<p className="mb-2 text-lg font-bold text-white">{timeLeft}</p>
				</div>

				{/* Button */}
				<button onClick={checkConnection}>
					<Link
						href={wallet.status === "connected" ? "/auction-page" : "#"}
						className="absolute bottom-2 right-2 mt-3 flex h-[77px] items-center justify-center rounded-ee-[35px] rounded-ss-[35px] bg-[#9E090F] px-3 py-1.5 text-sm font-bold text-white md:text-[16px]"
						onClick={() => {
							dispatch(setNFTToBid({
								image,
								title,
								creator,
								price,
								timeLeft,
							}));
						}}
					>
						Start Bid
						{" "}
						<ArrowRight onClick={checkConnection} className="ml-1 size-4" />
					</Link>
				</button>
			</div>
		</div>
	);
};

export default GalleryCard;
