import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

	if (req.method == 'POST') {
		try {
			const {username,email, password} = req.body;
			console.log("end session");
			res.status(200).json({message: 'Session closed'});
		}catch (err ){
			console.error(err);
			res.status(500).json({message: 'Invalid credentials'});
		}
	} else {
		res.status(400).json({message: 'Method not allowed'});
	}
}

