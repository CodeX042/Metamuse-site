/* eslint-disable no-unused-vars */
import { createFileRoute } from "@tanstack/react-router";
// import DrawingCanvas from '../components/DrawingCanvas';
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { io } from "socket.io-client";

import Header from "../components/Navs/Header";
import Room from "../components/Room";

const server = "https://blockathon.onrender.com";
const connectionOptions = {
	"force new connection": true,
	"reconnectionAttempts": "Infinity",
	"timeout": 10000,
	"transports": ["websocket"],
};
const socket = io(server, connectionOptions);

export const Route = createFileRoute("/drawing-canvas")({
	component: () => {
		return (
			<div className="relative">
				<ThirdwebProvider activeChain={ChainId.Arbitrum}>
					{" "}
					{/* Arbitrum chain ID */}
					<Header />
				</ThirdwebProvider>
				{/* <DrawingCanvas/> */}
				<Room socket={socket} />
			</div>
		);
	},
});
