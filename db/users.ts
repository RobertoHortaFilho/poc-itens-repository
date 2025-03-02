import { LoginResponseType, UserType } from "@/types/userstypes";
import { PrismaClient } from "@prisma/client";



class User {
	private email: string;
	private password: string;
	private prisma: PrismaClient;

	constructor({ email, password }: UserType) {
		this.email = email;
		this.password = password;
		this.prisma = new PrismaClient();
	}

	async login(): Promise<LoginResponseType> {
		try {
			const user = await this.prisma.user.findFirst({
				where: {
					email: { equals: this.email },
				},
			});
			if (!user) {
				return { response: "DENNIED", error: "User not found" };
			}
			if (user.password == this.password) {
				return { response: "APPROVED", name: user.name, token: "gerarToken" };
			}
			return { response: "DENNIED", error: "Incorrect password" };
		} catch (e) {
			console.log(e);
			return { response: "DENNIED", error: "User not found" };
		}
	}
}

export default User;
