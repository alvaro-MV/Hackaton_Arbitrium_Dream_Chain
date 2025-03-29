
import { db } from "./form-data-db";

export const migrateformdata = () => {
	db.serialize(() => {
	  // Verificamos si la tabla 'articles' ya tiene registros
	  db.get("SELECT COUNT(*) AS count FROM form_data", (err: any, row: any) => {

		// Si ya hay datos (count > 0), no hacemos nada
		if (!err && row.count > 0) {
		  console.log("Table 'form_data' already contains data. Migration skipped.");
		  return;
		}
		// Si la tabla está vacía, creamos la tabla
		db.run(
		  `
		  CREATE TABLE IF NOT EXISTS form_data (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			name TEXT NOT NULL,
			description TEXT NOT NULL,
			imageUrl TEXT NOT NULL,
			articleUrl TEXT NOT NULL,
			slug TEXT UNIQUE NOT NULL
		  );
		  `,
		  (err: Error) => {
			if (err) {
			  console.error(err.message);
			} else {
			  console.log("articles table created successfully.");
			  db.run(
				`
				INSERT INTO form_data (name, description, imageUrl, articleUrl, slug)
				VALUES (?, ?, ?, ?, ?);
				`,
				['Sample Article', 'This is a sample description for the article.', 'http://example.com/image.jpg', 'http://example.com/article', ''],
				(err: Error) => {
				  if (err) {
					console.error('Error inserting data:', err.message);
				  } else {
					console.log('Sample data inserted successfully.');
				  }
				}
			  );


			}
		  }
		);
	  });
	});
  };
  
