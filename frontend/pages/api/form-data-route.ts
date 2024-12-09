import type { NextApiRequest, NextApiResponse } from 'next';
import { save, find } from "./form-data-db";
import { migrateformdata } from './form-data-migrate';
import { it } from 'node:test';


let isMigrated = false;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (!isMigrated) {
		migrateformdata();  // Ejecutar migración solo la primera vez
		isMigrated = true;
	  }
	  
	  if (req.method === "GET") {
		const query = `
	   SELECT * from form_data
		`;
		try {
			const data = await find(query);
			const status = 200;
			const respBody = {
				message: "Successfully retrieved articles",
				data: data // Aquí van los datos recuperados de la base de datos
			};
			res.status(status).json(respBody);
		  } catch (error) {
			console.error("Error durante el despliegue:", error);
			res.status(500).json({ error: error });
		  }
	  }
	  else if (req.method === "POST")
	  {
		try {
			const body = await req.body.json();
			const { name, description, imageUrl, articleUrl, slug } = body;
		
			const query = `
				INSERT INTO form_data(name, description, imageUrl, articleUrl, slug)
				VALUES(?, ?, ?, ?, ?)
				`;
			const values = [name, description, imageUrl, articleUrl, slug];
			const result = await save(query, values);
			const status = 200;
			const respBody = {
				message: "Successfully retrieved articles",
				data: result // Aquí van los datos recuperados de la base de datos
			};
			res.status(status).json(respBody);
		}catch (error){
			console.error("Error durante el despliegue:", error);
			res.status(500).json({ error: error });
		}
	  }
}
