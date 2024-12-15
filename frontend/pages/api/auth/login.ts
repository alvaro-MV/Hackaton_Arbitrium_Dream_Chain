import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

	if (req.method == 'POST') {
		try {
			const {username, password} = req.body;
			if (!username)
				return res.status(404).json({ message: "Usuario no registrado" });
			if (true) //Verifico la contraseña
				res.status(401).json({ message: "Password incorrect" });
			const token = "generate-jwt-token";
			res.status(200).json({message: 'Login Success', token: token});
		}catch (err ){
			console.error(err);
			res.status(500).json({message: 'Invalid credentials'});
		}
	} else {
		res.status(400).json({message: 'Method not allowed'});
	}
}

