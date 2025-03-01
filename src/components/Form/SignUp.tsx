/* eslint-disable unicorn/filename-case */
import { useRouter } from "@tanstack/react-router";
// src/components/SignUpForm.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { authenticateUser } from "@/api/auth";
import { getAuthFormDetails } from "@/redux/slice/auth-slice";

import Header from "../Navs/Header";
import Button from "./Button";
import FormInput from "./FormInput";

const SignUpForm: React.FC = () => {
	const { connectWallet } = useSelector((state: any) => state.user);
	const { firstName, lastName, emailAddress, password, authenticating } = useSelector((state: any) => state.auth);
	const dispatch = useDispatch();
	const router = useRouter();

	const handleInputChange = (e: any) => {
		const { name, value } = e.target;
		dispatch(getAuthFormDetails({ name, value }));
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		authenticateUser({ firstName, lastName, email: emailAddress, password, walletAddress: connectWallet }, "signup", router);
	};

	return (
		<div className="auth-bg relative">
			<Header />
			<div className="flex min-h-screen items-center justify-center ">
				<div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
					<h2 className="mb-6 text-center text-2xl font-bold">Sign up</h2>
					<form className="space-y-4">
						<div className="grid grid-cols-2 gap-4">
							<FormInput label="First Name" required name="firstName" value={firstName} handleChange={handleInputChange} />
							<FormInput label="Last Name" required name="lastName" value={lastName} handleChange={handleInputChange} />
						</div>
						<FormInput
							label="Email address"
							type="email"
							required
							name="emailAddress"
							value={emailAddress}
							handleChange={handleInputChange}
						/>
						<FormInput
							label="Password"
							type="password"
							required
							name="password"
							value={password}
							handleChange={handleInputChange}
						/>
						<FormInput label="Wallet Address" type="text" required value={connectWallet} disabled={true} />
						<Button label="Sign Up" type="submit" className="mt-4 w-full bg-[#D42C2CB2]" loading={authenticating} onClick={handleSubmit} disabled={!firstName || !lastName || !emailAddress || !password || !connectWallet} />
					</form>
					{/* <div className="text-center mt-4">
                <button className="flex items-center justify-center gap-2 p-2 border border-gray-300 rounded hover:bg-gray-100 w-full">
                    <img src="/asset/google-sign.svg" alt="Google Logo" className="" />
                    <span>Sign up with Google</span>
                </button>
            </div> */}
				</div>
			</div>
		</div>
	);
};

export default SignUpForm;
