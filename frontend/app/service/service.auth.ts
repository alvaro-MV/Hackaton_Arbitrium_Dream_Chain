import { SessionService } from "./service.session";

export class AuthService {
	private static API_URL = "/api/auth";

	async login(email: string, password: string): Promise<string | null> {
		const response = await fetch(`${AuthService.API_URL}/login`, {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
		  },
		  body: JSON.stringify({ email, password }),
		});

		if (response.status == 404) {
			const data = await response.json();
			throw new Error(data.message || "Usuario no encontrado");
		}
		else if (response.status == 401) {
			const data = await response.json();
			return null;
		}
		else if (!response.ok) {
		  throw new Error("Login failed");
		}
		const data = await response.json();
		return data.token;
	  }
	async register(email: string, password: string, name: string): Promise<void> {
	const response = await fetch(`${AuthService.API_URL}/register`, {
		method: "POST",
		headers: {
		"Content-Type": "application/json",
		},
		body: JSON.stringify({ email, password, name }),
	});

	if (!response.ok) {
		throw new Error("Registration failed");
	}
	}
	
	async logout(): Promise<void> {
		await fetch(`${AuthService.API_URL}/logout`, {
		  method: "POST",
		});
	
		SessionService.clearSession();
	}
}