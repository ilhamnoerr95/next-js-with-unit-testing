import React from "react";
import InputCustom from "@/components/input";
import Button from "@/components/button";

const Index = () => {
	const [login, setLogin] = React.useState<{
		username: string;
		password: string;
	}>({
		username: "",
		password: "",
	});

	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [isError, setIsError] = React.useState<string>("");
	const changeLogin = (
		e: React.ChangeEvent<HTMLInputElement>,
		type: string,
	) => {
		if (type === "username") {
			setLogin((prev) => ({ ...prev, username: e.target.value }));
		} else {
			setLogin((prev) => ({ ...prev, password: e.target.value }));
		}
	};
	const handleLogin = async () => {
		setIsLoading(true);
		setIsError("");

		try {
			const res = await fetch("/api/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					username: login.username,
					password: login.password,
				}),
			});

			if (!res.ok) {
				throw new Error("Invalid credentials");
			}

			const data = await res.json();
			console.log("data token:", data);
			return data;
		} catch (err: any) {
			setIsError(err.message);
		} finally {
			setIsLoading(false);
		}
	};
	console.log({ isError });
	// console.log({ pass: login.password, username: login.username, isLoading });

	return (
		<div className="flex h-screen bg-amber-100">
			<div className="m-auto text-3xl font-bold bg-blue-500 p-10 rounded-md">
				<h3 className="mb-10">Login Page</h3>
				{isError && (
					<p className="mb-5 text-sm font-normal text-red-500">{isError}</p>
				)}
				<InputCustom
					placeholder="Enter your descriptions"
					type="text"
					label="Enter username"
					id="username"
					className="mb-5"
					value={login.username}
					onChange={(e) =>
						changeLogin(e as React.ChangeEvent<HTMLInputElement>, "username")
					}
				/>
				<InputCustom
					placeholder="Enter your descriptions"
					type="password"
					label="Your Password"
					value={login.password}
					id="pwd"
					onChange={(e) =>
						changeLogin(e as React.ChangeEvent<HTMLInputElement>, "pwd")
					}
				/>
				<div className="mt-10 text-sm font-normal text-white">
					{/* <button className="bg-amber-500 px-5 py-2 rounded-md hover:bg-amber-600">
						Login
					</button> */}
					<Button
						onClick={handleLogin}
						isLoading={isLoading}
						disabled={!login.username || !login.password}
						type="submit"
						label="Login"
						bgColor="#00B8DB"
						loadingName="LOADING..."
					/>
				</div>
			</div>
		</div>
	);
};

export default Index;
