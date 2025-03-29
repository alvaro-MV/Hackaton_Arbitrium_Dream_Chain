// services/UserService.ts

import { SessionService } from "./service.session";

export class UserService {
  static async getUserDetails(): Promise<object | null> {
    const session = SessionService.getSession();
    if (session == null || !session.token) {
      throw new Error("User is not logged in");
    }

    const response = await fetch("/api/user", {
      headers: {
        Authorization: `Bearer ${session.token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user details");
    }

    const data = await response.json();
    return data;
  }
}
