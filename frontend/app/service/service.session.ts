
export class SessionService {

	static getSession(): { token: string, user: object } | null {
	  const token = sessionStorage.getItem("token");
	  if (!token)
		return null;
	  const user = JSON.parse(sessionStorage.getItem("user") || "null");
	  if (!user )
		return null;
	  return { token, user };
	}
  
	static setSession(token: string, user: object): void {
	  sessionStorage.setItem("token", token);
	  sessionStorage.setItem("user", JSON.stringify(user));
	}
  
	static clearSession(): void {
	  sessionStorage.removeItem("token");
	  sessionStorage.removeItem("user");
	}
  }
  