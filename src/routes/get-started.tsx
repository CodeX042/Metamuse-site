import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/get-started")({
	component: () => (
		<section className="h-screen bg-primary text-background">
			<div className="m-auto">
				<h1 className="m-auto text-2xl">Get started</h1>
				<p>Get the most out of Intasida by completing these few steps</p>
			</div>
		</section>
	),
});
