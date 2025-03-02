"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { LoginResponseType } from "@/types/userstypes";

export default function LoginPage() {
	const router = useRouter();
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const res = await axios("./api/login", {
				method: "POST",
				data: {
					email,
					password,
				},
			});
			const data: LoginResponseType = res.data;
      if (data.response =="APPROVED") {
        localStorage.setItem("poc-user-name", data.name);
        router.push("/Home");
      }
		} catch (e) {
			console.log(e)
      // const error = e as LoginResponseBadRequest;
      // const data = error.response.data
			// if (data.response == "DENNIED") {
			// 	console.log(data.error);
			// 	return;
			// }
    }

		return;
	};

	return (
		<div className="flex items-center justify-center h-screen bg-gray-900">
			<div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-96 text-white">
				<h2 className="text-2xl font-semibold text-center text-blue-400 mb-4">
					Login
				</h2>
				<form onSubmit={handleLogin} className="flex flex-col gap-4">
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					<input
						type="password"
						placeholder="Senha"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-semibold transition"
					>
						Entrar
					</button>
				</form>
			</div>
		</div>
	);
}
