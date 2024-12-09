import { Numeric } from "ethers";

export interface Contract {
	dir_contract: string
}

export interface Transactions {
	address: string,

}
export interface Donor {
	name: string,
	address: string,
	amount: number,
}

export interface Mentor {
	name: string,
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
	goal_amount : number;
	donated_amount: number;
	donors?: Donor[];
	mentors?: Mentor[];
  }

