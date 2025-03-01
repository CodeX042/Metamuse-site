import { z } from "zod";

const passwordSchema = z
	.string()
	.min(8, { message: "Password must be at least 8 characters." })
	.refine(password => /[A-Z]/.test(password), {
		message: "Password must contain at least 1 Uppercase letter.",
	})
	.refine(password => /[a-z]/.test(password), {
		message: "Password must contain at least 1 lowercase letter.",
	})
	.refine(password => /\d/.test(password), { message: "Password must contain at least one number" })
	.refine(password => /[!@#$%^&*]/.test(password), {
		message: "Password must contain at least one special character eg. !@#$%^&*",
	});

export function AuthFormSchema(type: "sign-in" | "sign-up" | "reset") {
	if (type === "reset") {
		return z.object({
			password: passwordSchema,
			confirmPassword: z.string({
				required_error: "Confirm password is required",
			}).min(8),
		}).refine(data => data.password === data.confirmPassword, {
			message: "Passwords don't match",
			path: ["confirmPassword"],
		}); ;
	}

	const baseSchema = {
		email: z
			.string()
			.email({ message: "Must be a valid email eg. demo@demo.com" }),
		password: type === "sign-up"
			? passwordSchema
			: z.string({
				required_error: "Password is required",
			}).min(8, { message: "Password must be at least 8 characters." }),
	};

	if (type === "sign-up") {
		return z.object({
			...baseSchema,
			firstName: z.string({
				required_error: "Firstname is required",
			}).min(3, {
				message: "Firstname must be at least 3 characters.",
			}),
			lastName: z.string({
				required_error: "Lastname is required",
			}).min(3, {
				message: "Lastname must be at least 3 characters.",
			}),
			username: z.string({
				required_error: "Username is required",
			}).min(3, {
				message: "Username must be at least 3 characters.",
			}),
			tos: z.boolean().refine(value => value === true, {
				message: "You must accept the terms of service",
			}),
			userType: z.enum(
				["BUYER", "VENDOR"],
				{
					required_error: "Account type is required",
				},
			),
			confirmPassword: z.string({
				required_error: "Confirm password is required",
			}).min(8),
		}).refine(data => data.password === data.confirmPassword, {
			message: "Passwords don't match",
			path: ["confirmPassword"],
		});
	}

	return z.object({
		...baseSchema,
	});
}
