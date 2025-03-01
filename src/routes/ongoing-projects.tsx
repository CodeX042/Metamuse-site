import { createFileRoute, useRouter } from "@tanstack/react-router";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import ProjectGrid from "@/components/cards/ProjectGrid";
import AddProjectButton from "@/components/Form/AddProjectButton";
import CreateCanvasModal from "@/components/Form/CreateCanvasModal";
import JoinCanvasModal from "@/components/Form/JoinCanvasModal";
import Header from "@/components/Navs/Header";

export const Route = createFileRoute("/ongoing-projects")({
	component: () => {
		const [openCreateModal, setOpenCreateModal] = useState(false);
		const [openJoinModal, setOpenJoinModal] = useState(false);
		const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
		const router = useRouter();

		useEffect(() => {
			if (!currentUser?.accessToken) {
				router.navigate({ to: "/auth/sign-in" }); // Navigate to sign-in page
				toast.error("Login first to access this page"); // Show error message
			}
		}, [currentUser, router]);

		const handleCloseCreateModal = (e: any) => {
			if (e.target.id === "parent")
				setOpenCreateModal(false);
		};
		const handleCloseJoinModal = (e: any) => {
			if (e.target.id === "parent")
				setOpenJoinModal(false);
		};

		return (
			<ThirdwebProvider activeChain={ChainId.Arbitrum}>
				{" "}
				{/* Arbitrum chain ID */}
				<div className="relative min-h-screen bg-gray-900  text-white">
					<Header />
					<ProjectGrid />
					<AddProjectButton setOpenCreateModal={setOpenCreateModal} setOpenJoinModal={setOpenJoinModal} />
					{openCreateModal && <CreateCanvasModal handleCloseModal={handleCloseCreateModal} />}
					{openJoinModal && <JoinCanvasModal handleCloseModal={handleCloseJoinModal} />}
				</div>
			</ThirdwebProvider>
		);
	},

});
