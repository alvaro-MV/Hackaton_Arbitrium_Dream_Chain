import { randomUUID } from "crypto";
import { FormDream } from "../interface/interface.formdata";



export interface StorageService {
	saveFormDream(user: FormDream): void;
	findFormDreamById(id: string): FormDream | null;
	deleteFormDreamById(id: string): void;
	getFormsDreams(): FormDream[];
}

export class LocalStorageService implements StorageService {

	// Guardar un form dream
	saveFormDream(formdream: FormDream): FormDream {
		const forms_dreams = this.getFormsDreams(); // Obtén la lista actual de usuarios
		formdream.id = crypto.randomUUID().toString();
		forms_dreams.push(formdream); // Añadir el nuevo usuario
		localStorage.setItem('forms-dreams', JSON.stringify(forms_dreams)); // Guardar en LocalStorage
		console.log("Usuario guardado:", formdream);
		return formdream;
	}
  
	// Buscar un form dream por su id
	findFormDreamById(id: string): FormDream | null {
	  const users = this.getFormsDreams();
	  const fromDream = users.find(u => u.id === id);
	  if (fromDream) {
		console.log("FormDreams encontrado:", fromDream);
	  } else {
		console.log("FormDreams no encontrado con el id:", id);
	  }
	  return fromDream || null;
	}
  
	// Eliminar un form dream por su id
	async deleteFormDreamById(id: string): Promise<void> {
	  let users = this.getFormsDreams();
	  users = users.filter(u => u.id !== id); // Filtrar el form dream por id
	  localStorage.setItem('forms-dreams', JSON.stringify(users)); // Guardar los cambios en LocalStorage
	  console.log(`form dream con id ${id} eliminado.`);
	}
  
	// Obtener todos los form dreams desde LocalStorage
	getFormsDreams(): FormDream[] {
	  const users = localStorage.getItem('forms-dreams');
	  return users ? JSON.parse(users) : [];
	}
  }
