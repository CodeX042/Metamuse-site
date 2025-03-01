import { toast } from "react-toastify";

import { setAuthenticating } from "@/redux/slice/auth-slice";
import store from "@/redux/store";

import axios from "./axios";

export async function authenticateUser(data: any, type: "login" | "signup" | "logout", router: any) {
	store.dispatch(setAuthenticating(true));
	const url = `/auth/${type}`;

	await axios.post(url, data).then((res) => {
		const { data } = res;
		if (type === "login") {
			localStorage.setItem("user", JSON.stringify(data));
			toast.success("Logged In");
			router.navigate({ to: "/" }); // Redirect to home
		}
		if (type === "signup") {
			toast.success("Account created successfully");
			router.navigate({ to: "/auth/sign-in" }); // Redirect to sign-in page
    }
    
    if (type === "logout") {
      toast.success("Logged out successfully")
      router.navigate({to: "/"})
    }
		store.dispatch(setAuthenticating(false));
	}).catch((err) => {
		store.dispatch(setAuthenticating(false));
		toast.error(err?.message);
	});
}

export async function canvas(data: any, type: "createCanvas" | "joinCanvas") {
	store.dispatch(setAuthenticating(true));
	const url = `/${type}`;
	await axios.post(url, data).then(() => {
		// const { data } = res
		if (type === "createCanvas") {
			toast.success("canvas created");
		}
		if (type === "joinCanvas") {
			toast.success("You have joined a canvas");
		}
		store.dispatch(setAuthenticating(false));
	}).catch((err) => {
		store.dispatch(setAuthenticating(false));
		toast.error(err?.message);
	});
}
