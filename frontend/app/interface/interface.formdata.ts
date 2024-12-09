import { Numeric } from "ethers";

export interface Contract {
	dir_contract: string
}

export interface Transactions {
	address: string,

}
export interface Donor {
	address: string,
	mount: number,
}

export interface Mentor {
	address: string,
	specialty: string,
}

export interface Dream {
	id?: string;
	name_dream: string;
	dream_description: string;
	dream_goals: string;
	dream_reward_offered: string;
	contract: string;
	goal_mount : number;
	donated_amount: number;
	donors?: Donor[];
	mentors?: Mentor[];
  }

