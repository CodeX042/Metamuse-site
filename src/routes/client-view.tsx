import { createFileRoute } from "@tanstack/react-router";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { io } from "socket.io-client";

import ClientCanvas from "../components/ClientCanvas";
import Header from "../components/Navs/Header";

const server = "https://blockathon.onrender.com";
const connectionOptions = {
	"force new connection": true,
	"reconnectionAttempts": "Infinity",
	"timeout": 10000,
	"transports": ["websocket"],
};
const socket = io(server, connectionOptions);

export const Route = createFileRoute("/client-view")({
	component: () => {
		return (
			<div className="relative">
				<ThirdwebProvider activeChain={ChainId.Arbitrum}>
					{" "}
					{/* Arbitrum chain ID */}
					<Header />
				</ThirdwebProvider>
				{/* <DrawingCanvas/> */}
				<ClientCanvas socket={socket} />
			</div>
		);
	},
});
