/* eslint-disable unicorn/filename-case */
import { useRouter } from "@tanstack/react-router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { authenticateUser } from "@/api/auth";
import { getAuthFormDetails } from "@/redux/slice/auth-slice";

import Header from "../Navs/Header";
import Button from "./Button";
import FormInput from "./FormInput";

const LoginForm: React.FC = () => {
	const { emailAddress, password, authenticating } = useSelector((state: any) => state.auth);
	const dispatch = useDispatch();
	const router = useRouter();

	const handleInputChange = (e: any) => {
		const { name, value } = e.target;
		dispatch(getAuthFormDetails({ name, value }));
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		authenticateUser({ email: emailAddress, password }, "login", router);
	};

	return (
		<div className="auth-bg relative">
			<Header />
			<div className="flex min-h-screen items-center justify-center ">
				<div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
					<h2 className="mb-6 text-center text-2xl font-bold">
						Log in to your Account
						<span className="text-red-500">!</span>
					</h2>
					<form className="space-y-4">
						<FormInput label="Email address" type="email" required handleChange={handleInputChange} name="emailAddress" value={emailAddress} />
						<FormInput label="Password" type="password" required handleChange={handleInputChange} name="password" value={password} />
						<div className="mb-4 flex justify-between text-sm">
							{/* <a href="#" className="text-blue-500 hover:underline">Forgot password?</a> */}
						</div>
						<Button label="Log in" type="submit" className="w-full bg-[#D42C2CB2]" loading={authenticating} onClick={handleSubmit} disabled={!emailAddress || !password} />
					</form>
					{/* <div className="text-center mt-4 text-sm">
                <span>A new user? </span>
                <a href="#" className="text-blue-500 hover:underline">Sign Up</a>
            </div> */}
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
