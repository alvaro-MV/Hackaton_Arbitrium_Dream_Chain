import { randomUUID } from "crypto";
import { Dream } from "../interface/interface.formdata";



export interface StorageService {
	saveDream(user: Dream): void;
	findDreamById(id: string): Dream | null;
	deleteDreamById(id: string): void;
	getDreams(): Dream[];
}

export class LocalStorageService implements StorageService {

	// Guardar un  dream
	saveDream(dream: Dream): Dream {
		const s_dreams = this.getDreams(); // Obtén la lista actual de usuarios
		dream.id = crypto.randomUUID().toString();
		s_dreams.push(dream); // Añadir el nuevo usuario
		localStorage.setItem('dreams', JSON.stringify(s_dreams)); // Guardar en LocalStorage
		console.log("Usuario guardado:", dream);
		return dream;
	}
  
	// Buscar un  dream por su id
	findDreamById(id: string): Dream | null {
	  const users = this.getDreams();
	  const fromDream = users.find(u => u.id === id);
	  if (fromDream) {
		console.log("Dreams encontrado:", fromDream);
	  } else {
		console.log("Dreams no encontrado con el id:", id);
	  }
	  return fromDream || null;
	}
  
	// Eliminar un  dream por su id
	async deleteDreamById(id: string): Promise<void> {
	  let users = this.getDreams();
	  users = users.filter(u => u.id !== id); // Filtrar el  dream por id
	  localStorage.setItem('dreams', JSON.stringify(users)); // Guardar los cambios en LocalStorage
	  console.log(` dream con id ${id} eliminado.`);
	}
  
	// Obtener todos los  dreams desde LocalStorage
	getDreams(): Dream[] {
	  const users = localStorage.getItem('dreams');
	  console.log(users);
	  return users ? JSON.parse(users) : [];
	}
  }
