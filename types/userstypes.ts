export type LoginResponseType =
	| {
			response: "APPROVED";
			token: string;
			name: string;
	  }
	| { response: "DENNIED"; error: "User not found" }
	| { response: "DENNIED"; error: "Incorrect password" };

export type LoginResponseBadRequest = {
	response: { data: LoginResponseType };
};

export type UserType = {
	email: string;
	password: string;
};
