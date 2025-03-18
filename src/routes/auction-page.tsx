import { createFileRoute } from "@tanstack/react-router";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import AuctionCard from "@/components/cards/AuctionCard";
import Header from "@/components/Navs/Header";
import useCheckWalletConnection from "@/hooks/useCheckWalletConnection";

export const Route = createFileRoute("/auction-page")({
	component: () => {
		useCheckWalletConnection();

		return (
			<div className="relative">
				<ThirdwebProvider activeChain={ChainId.Arbitrum}>
					<Header />
				</ThirdwebProvider>
				<div className="flex min-h-screen items-center justify-center bg-gray-900 p-8">

					<AuctionCard />
				</div>
			</div>
		);
	},
});
