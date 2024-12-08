import { randomUUID } from "crypto";



export interface StorageService {
	saveFormDream(user: FormDream): void;
	findFormDreamById(id: string): FormDream | null;
	deleteFormDreamById(id: string): void;
	getFormsDreams(): FormDream[];
}

export class LocalStorageService implements StorageService {

	// Guardar un usuario
	saveFormDream(formdream: FormDream): FormDream {
		const forms_dreams = this.getFormsDreams(); // Obtén la lista actual de usuarios
		formdream.id = randomUUID().toString();
		forms_dreams.push(formdream); // Añadir el nuevo usuario
		localStorage.setItem('forms-dreams', JSON.stringify(forms_dreams)); // Guardar en LocalStorage
		console.log("Usuario guardado:", formdream);
		return formdream;
	}
  
	// Buscar un usuario por su email
	findFormDreamById(id: string): FormDream | null {
	  const users = this.getFormsDreams();
	  const user = users.find(u => u.id === id);
	  if (user) {
		console.log("Usuario encontrado:", user);
	  } else {
		console.log("Usuario no encontrado con el email:", id);
	  }
	  return user || null;
	}
  
	// Eliminar un usuario por su id
	deleteFormDreamById(id: string): void {
	  let users = this.getFormsDreams();
	  users = users.filter(u => u.id !== id); // Filtrar el usuario por id
	  localStorage.setItem('forms-dreams', JSON.stringify(users)); // Guardar los cambios en LocalStorage
	  console.log(`Usuario con id ${id} eliminado.`);
	}
  
	// Obtener todos los usuarios desde LocalStorage
	getFormsDreams(): FormDream[] {
	  const users = localStorage.getItem('users');
	  return users ? JSON.parse(users) : [];
	}
  }
