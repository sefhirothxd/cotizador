import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
// import Pdf from 'react-to-pdf';
import { jsPDF } from 'jspdf';
import Data from '../data.json';
import { TablejsModule } from '@transunion-ui/tablejs';

const Cotizador = () => {
	const {
		register,
		handleSubmit,
		// watch,
		// formState: { errors },
	} = useForm();
	const [herramientas, setHerramientas] = useState([]);
	const [seleccionado, setSeleccionado] = useState();

	const [tabla, setTabla] = useState([]);
	const [costoTotal, setcostoTotal] = useState(0);
	const onSubmit = (data) => {
		if (data.herramienta == '0') {
			return;
		}
		const agregar = herramientas.filter((item) => {
			return item.id === parseInt(data.herramienta);
		});

		const tablaSearch = tabla.find((item) => item.id == agregar[0].id);

		console.log('resultado de la busqueda', tablaSearch);

		if (tablaSearch !== undefined) {
			tabla.forEach((item) => {
				return item.id == agregar[0].id && (item.cantidad = item.cantidad + 1);
			});
			tabla.forEach((item) => {
				return (
					item.id == agregar[0].id &&
					(item.costoTotal = item.precio * item.cantidad)
				);
			});
		} else {
			agregar[0].cantidad = 1;
			agregar[0].costoTotal = agregar[0].cantidad * agregar[0].precio;
			setTabla([...tabla, agregar[0]]);
			console.log('setTabla', tabla);
		}
		pagoFinal();
	};

	const pagoFinal = () => {
		if (tabla?.length > 0) {
			let bruto = 0;
			const final = tabla.map((item) => {
				return (bruto += item.costoTotal);
			});
			console.log('estoy adentro del if', bruto);
			setcostoTotal(bruto);
		}
	};

	const probando = (data) => {
		if (data.target.selectedOptions[0].value === '0') {
			setSeleccionado('');
			return;
		}

		console.log(data.target.selectedOptions[0].value);
		let valueItem = data.target.selectedOptions[0].value;
		const agregar = herramientas.filter((item) => {
			return item.id === parseInt(valueItem);
		});
		setSeleccionado(agregar);
		console.log(agregar);
	};

	const pdf = () => {
		const doc = new jsPDF();

		doc.text('Hello world!', 10, 10);
		// doc.autoPrint();
		doc.save();
	};

	useEffect(() => {
		pagoFinal();
	}, [tabla]);

	useEffect(() => {
		setHerramientas(Data);
		console.log(Data);
	}, []);

	return (
		<div className="container mx-auto min-h">
			<h1 className="text-white text-6xl text-center font-semibold">
				Cotizador
			</h1>
			<div className="border-2 border-white mt-16">
				<div className="p-10">
					<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
						<select
							className="my-4"
							{...register('herramienta')}
							onChange={probando}
						>
							<option value="0">Seleccionar</option>
							{Data.map((item) => {
								return <option value={item.id}>{item.nombre}</option>;
							})}
						</select>
						{seleccionado ? (
							<div className="mb-4 flex justify-start items-center flex-wrap  gap-3 w-full">
								<div className="flex items-center">
									<label className="text-white mr-2" htmlFor="">
										Capacidad:
									</label>
									<input
										className="px-1 mr-3"
										type="text"
										name="capacidad"
										value={seleccionado[0].capacidad}
									/>
								</div>
								<div className="flex items-center">
									<label className="text-white mr-3" htmlFor="">
										Longuitud de izaje:
									</label>
									<input
										className="px-1 mr-3"
										type="text"
										name="capacidad"
										value="6"
									/>
								</div>
								<div className="flex items-center">
									<label className="text-white mr-3" htmlFor="">
										Cadena de carga:
									</label>
									<input
										className="px-1 mr-3 w-9/12"
										type="text"
										name="capacidad"
										value={seleccionado[0].cadena}
									/>
								</div>
								<div className="flex items-center">
									<label className="text-white mr-3" htmlFor="">
										Precio:
									</label>
									<input
										className="px-1 mr-3"
										type="text"
										name="capacidad"
										value={seleccionado[0].precio}
									/>
								</div>
							</div>
						) : null}
						<button
							className="bg-white border-2 border-black py-2 w-36"
							type="submit"
						>
							Agregar
						</button>
					</form>
				</div>
			</div>
			<div>
				{/* <table className="rounded-t-lg m-5 w-full mx-auto bg-gray-200 text-gray-800">
					<tbody>
						<tr className="text-left border-b-2 border-gray-300">
							<th className="px-4 py-3">Nombre</th>
							<th className="px-4 py-3">Capacidad</th>
							<th className="px-4 py-3">Peso</th>
							<th className="px-4 py-3">Precio</th>
							<th className="px-4 py-3">Cantidad</th>
							<th className="px-4 py-3">Costo Total</th>
						</tr>

						{tabla.length > 0 ? (
							tabla.map((tabla) => {
								return (
									<tr
										key={tabla.id}
										className="bg-gray-100 border-b border-gray-200"
									>
										<td className="px-4 py-3">{tabla.nombre}</td>
										<td className="px-4 py-3">{tabla.capacidad}</td>
										<td className="px-4 py-3">{tabla.peso}</td>
										<td className="px-4 py-3">{tabla.precio}</td>
										<td className="px-4 py-3">{tabla.cantidad}</td>
										<td className="px-4 py-3">{tabla.costoTotal}</td>
									</tr>
								);
							})
						) : (
							<h1 className="text-red text-2xl pl-4 py-4">No hay datos</h1>
						)}
					</tbody>
				</table> */}
				<table className="border w-full sm:table block overflow-x-auto ">
					<thead>
						<tr className="bg-gray-50 border-b">
							<th className="border-r p-2">
								<input type="checkbox" />
							</th>
							<th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
								<div className="flex items-center justify-center">
									Nombre
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M8 9l4-4 4 4m0 6l-4 4-4-4"
										/>
									</svg>
								</div>
							</th>
							<th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
								<div className="flex items-center justify-center">
									Capacidad
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M8 9l4-4 4 4m0 6l-4 4-4-4"
										/>
									</svg>
								</div>
							</th>
							<th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
								<div className="flex items-center justify-center">
									Peso
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M8 9l4-4 4 4m0 6l-4 4-4-4"
										/>
									</svg>
								</div>
							</th>
							<th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
								<div className="flex items-center justify-center">
									Precio
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M8 9l4-4 4 4m0 6l-4 4-4-4"
										/>
									</svg>
								</div>
							</th>
							<th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
								<div className="flex items-center justify-center">
									Cantidad
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M8 9l4-4 4 4m0 6l-4 4-4-4"
										/>
									</svg>
								</div>
							</th>
							<th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
								<div className="flex items-center justify-center">
									Costo Total
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M8 9l4-4 4 4m0 6l-4 4-4-4"
										/>
									</svg>
								</div>
							</th>
							<th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
								<div className="flex items-center justify-center">
									Action
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M8 9l4-4 4 4m0 6l-4 4-4-4"
										/>
									</svg>
								</div>
							</th>
						</tr>
					</thead>
					<tbody>
						{tabla.length > 0 ? (
							tabla.map((tabla) => {
								return (
									<tr
										key={tabla.id}
										className="bg-gray-100 text-center border-b text-sm text-gray-600"
									>
										<td className="p-2 border-r">
											<input type="checkbox" />
										</td>
										<td className="p-2 border-r">{tabla.nombre}</td>
										<td className="p-2 border-r">{tabla.capacidad}</td>
										<td className="p-2 border-r">{tabla.peso}</td>
										<td className="p-2 border-r">{tabla.precio}</td>
										<td className="p-2 border-r">{tabla.cantidad}</td>
										<td className="p-2 border-r">{tabla.costoTotal}</td>
										<td>
											<a
												href="#"
												className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin"
											>
												Edit
											</a>
											<a
												href="#"
												className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin"
											>
												Remove
											</a>
										</td>
									</tr>
								);
							})
						) : (
							<h1 className="text-red text-2xl pl-4 py-4">No hay datos</h1>
						)}
					</tbody>
				</table>

				{tabla.length > 0 ? (
					<p className="text-white text-right text-2xl">
						Pago Final: {costoTotal}
					</p>
				) : (
					<p className="text-white text-right text-2xl">Pago Final: 0</p>
				)}
			</div>
			<button
				onClick={pdf}
				className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
			>
				<svg
					className="fill-current w-4 h-4 mr-2"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
				>
					<path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
				</svg>
				<span>Descargar pdf</span>
			</button>
		</div>
	);
};

export default Cotizador;
