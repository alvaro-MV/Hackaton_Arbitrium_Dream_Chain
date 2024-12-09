"use client";

import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Donor, Dream, Mentor } from "@/app/interface/interface.formdata";
import { LocalStorageService } from "@/app/storage/storage.dream";
import { DreamDeployed } from "@/app/service/service.contract.dream";

export default function DreamDetailsPage() {
	const sotorage = new LocalStorageService();
	const dreamService = new DreamDeployed();
	const params = useParams<{id:string}>();
	const id = params?.id;
	const [dreams, setFormDreams] = useState<Dream>({
		id: "1",
		name_dream: "Título del Sueño",
		dream_goals: " Meta 1\n Meta 2\n Meta 3\n",
		dream_description: "  Breve descripción del sueño. Este es un ejemplo de cómo se vería la descripción en la tarjeta.",
		dream_reward_offered: "",
		contract: "",
		goal_mount: 1000,
		donated_mount: 850,
		donors: [
			{
				name: "Donante 1",
				address: "",
				mount: 500,
			},
			{
				name: "Donante 2",
				address: "",
				mount: 350,
			}
		],
		mentors: [
			{
				name: "John Doe",
				address: "0x1",
				specialty: "Desarrollo Web"
			},
			{
				name: "Jane Smith",
				address: "0x2",
				specialty: "Marketing"
			}
		]
		});
	const [allowDonation, setAllowDonation] = useState<Boolean>(true);
	useEffect(() => {
		const dreams = sotorage.findDreamById(id!);
		if (dreams){
			setFormDreams(dreams); // Guardamos los datos en el estado
			setAllowDonation((dreams.donated_mount / dreams.goal_mount) < 1);
		}
	}, []); // El array vacío significa que solo se ejecutará una vez, al montar el componente


	const clickDonor = async (e: React.FormEvent) =>{
		e.preventDefault();
		console.log("Writing contract...");
		const result = await dreamService.write(10, dreams.contract);
		if (result)
		{
				console.log(`Result: ${result}`);
				//Debe llamar a un cuestionario para hacer la donacion.
				const names = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
				const addresses = ["0x123", "0x456", "0x789", "0xABC", "0xDEF"];
		
				// Seleccionar aleatoriamente un nombre y una dirección
				const randomName = names[Math.floor(Math.random() * names.length)];
				const randomAddress = addresses[Math.floor(Math.random() * addresses.length)];
		
				// Generar un monto aleatorio entre 0 y 1000
				const randomMount = Math.floor(Math.random() * 100);
		
				// Crear el donante
				const donor: Donor = {
					name: randomName,
					address: randomAddress,
					mount: randomMount,
				};
				setFormDreams((prevDreams) => {
					const updatedDreams = {
						...prevDreams,
						donated_mount: prevDreams.donated_mount + donor.mount,
						donors: [...(prevDreams.donors || []), donor], // Añade el nuevo donante al array existente
					}
					setAllowDonation((updatedDreams.donated_mount / updatedDreams.goal_mount) <= 1);
					sotorage.updateDreamById(updatedDreams);
					return updatedDreams;
				});
		}
	}

	const clickMentor = async (e: React.FormEvent) =>{
		e.preventDefault();
		console.log("Writing contract...");
		const result = await dreamService.write(0, dreams.contract);
		if (result)
		{
				console.log(`Result: ${result}`);
				//Debe llamar a un cuestionario para hacer la donacion.
				const names = ["Alvaro", "Bob", "Belen", "Diana", "Jorge"];
				const addresses = ["0x123", "0x456", "0x789", "0xABC", "0xDEF"];
				const specialtys = ["Marketin", "CEO", "Enginer", "Developer", "Comunity Manager"];
		
				// Seleccionar aleatoriamente un nombre y una dirección
				const randomName = names[Math.floor(Math.random() * names.length)];
				const randomAddress = addresses[Math.floor(Math.random() * addresses.length)];
		
				// Generar un monto aleatorio entre 0 y 1000
				const randomSpecialty = specialtys[Math.floor(Math.random() * specialtys.length)];
		
				// Crear el donante
				const mentor: Mentor = {
					name: randomName,
					address: randomAddress,
					specialty: randomSpecialty,
				};
				sotorage.updateDreamById(dreams);
				setFormDreams((prevDreams) => {
					const updatedDreams = {
						...prevDreams,
						mentors: [...(prevDreams.mentors || []), mentor],
					}
					sotorage.updateDreamById(updatedDreams);
					return updatedDreams;
				});
				console.log("Mentor asignado");
		}
	}
	return (
		<div className="container mx-auto px-4 py-8">
			{/* Botón para regresar */}
			<Link href="/">
				<Button variant="outline" className="mb-6">
					Volver
				</Button>
			</Link>

			<h1 className="text-3xl font-bold mb-6">Nombre del Sueño</h1>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div className="md:col-span-2">
					<Card className="mb-8">
						<CardHeader>
							<h2 className="text-xl font-bold">Descripción y Metas</h2>
						</CardHeader>
						<CardContent>
							<p className="mb-4">
								{dreams.dream_description}
							</p>
							<h3 className="font-semibold mb-2">Metas:</h3>
							<div>{dreams.dream_goals}</div>
						</CardContent>
					</Card>

					<Card className="mb-8">
						<CardHeader>
							<h2 className="text-xl font-bold">Progreso</h2>
						</CardHeader>
						<CardContent>
							<Progress 
                value={ (dreams.donated_mount/ dreams.goal_mount)*100}  className="w-full" />
							<p className="text-center mt-2">{(dreams.donated_mount/ dreams.goal_mount)*100}% Completado</p>
						</CardContent>
					</Card>

					<div className="flex space-x-4 mb-8">
						<Button size="lg" onClick={clickDonor} disabled={!allowDonation}>Donar</Button>
						<Button size="lg" onClick={clickMentor}  variant="outline">
							Convertirse en Mentor
						</Button>
					</div>

					<Card>
						<CardHeader>
							<h2 className="text-xl font-bold">Comentarios de los Mentores</h2>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div className="flex items-start space-x-4">
									<Avatar>
										<AvatarFallback>JD</AvatarFallback>
									</Avatar>
									<div className="flex-1">
										<p className="font-semibold">John Doe</p>
										<p className="text-sm text-gray-500">
											¡Gran progreso! Sigue así.
										</p>
									</div>
								</div>
								<div className="flex items-start space-x-4">
									<Avatar>
										<AvatarFallback>JS</AvatarFallback>
									</Avatar>
									<div className="flex-1">
										<p className="font-semibold">Jane Smith</p>
										<p className="text-sm text-gray-500">
											¿Has considerado probar este enfoque?
										</p>
									</div>
								</div>
							</div>
							<Textarea className="mt-4" placeholder="Añade tu comentario..." />
							<Button className="mt-2">Publicar Comentario</Button>
						</CardContent>
					</Card>
				</div>

				<div className="md:col-span-1">
					<Card className="mb-8">
						<CardHeader>
							<h2 className="text-xl font-bold">Mentores Actuales</h2>
						</CardHeader>
						<CardContent>
							<ul className="space-y-4">
								{dreams.mentors?.map((mentor, idx) => (
									<li className="flex items-center space-x-2">
										<Avatar>
												<AvatarFallback>M{idx + 1}</AvatarFallback>
											</Avatar>
											<div>
												<p className="font-semibold">{mentor.name}</p>
												<p className="text-sm text-gray-500">
													Especialidad: {mentor.specialty}
												</p>
											</div>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<h2 className="text-xl font-bold">Principales Donantes</h2>
						</CardHeader>
						<CardContent>
							<ul className="space-y-4">
							{dreams.donors?.map((donor, idx) => (
								<li className="flex items-center space-x-2">
										<Avatar>
											<AvatarFallback>D{idx + 1}</AvatarFallback>
										</Avatar>
										<div>
											<p className="font-semibold">{donor.name}</p>
											<p className="text-sm text-gray-500">Cantidad: ${donor.mount}</p>
										</div>
								 </li>
								))}
							</ul>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
