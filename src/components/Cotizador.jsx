import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Pdf from 'react-to-pdf';
const ref = React.createRef();
const options = {
	orientation: 'landscape',
	unit: 'in',
	format: [8, 12],
};

const Cotizador = () => {
	const {
		register,
		handleSubmit,
		// watch,
		// formState: { errors },
	} = useForm();
	const [herramientas, setHerramientas] = useState([
		{
			id: 1,
			nombre: 'NERM2001H-L',
			capacidad: '125',
			cadena: 'Grado 80, niquelada de 4.3 mm',
			ramales: '1',
			velocidadte: '16.8',
			rendimientote: '0.56 kW (0.75 HP)',
			velocidadto: '12.2',
			rendimientoto: '0.4 kW (0.54 HP)',
			anchopatin: 'De 58 a 127 mm',
			opcional: 'De 128 a 153 mm o 154 a 305 mm',
			peso: 58,
			field13: '0.42',
			field14: '800',
			precio: 9249,
			field16: '147',
		},
		{
			id: 2,
			nombre: 'NERM2001H-S',
			capacidad: '125',
			cadena: 'Grado 80, niquelada de 4.3 mm',
			ramales: '1',
			velocidadte: '16.8',
			rendimientote: '0.56 kW (0.75 HP)',
			velocidadto: '24.4',
			rendimientoto: '0.4 kW (0.54 HP)',
			anchopatin: 'De 58 a 127 mm',
			opcional: 'De 128 a 153 mm o 154 a 305 mm',
			peso: 58,
			field13: '0.42',
			field14: '800',
			precio: 9249,
			field16: '147',
		},
		{
			id: 3,
			nombre: 'NERM2003S-L',
			capacidad: '250',
			cadena: 'Grado 80, niquelada de 4.3 mm',
			ramales: '1',
			velocidadte: '11',
			rendimientote: '0.56 kW (0.75 HP)',
			velocidadto: '12.2',
			rendimientoto: '0.4 kW (0.54 HP)',
			anchopatin: 'De 58 a 127 mm',
			opcional: 'De 128 a 153 mm o 154 a 305 mm',
			peso: 58,
			field13: '0.42',
			field14: '800',
			precio: 8606,
			field16: '147',
		},
		{
			id: 4,
			nombre: 'NERM2003S-S',
			capacidad: '250',
			cadena: 'Grado 80, niquelada de 4.3 mm',
			ramales: '1',
			velocidadte: '11',
			rendimientote: '0.56 kW (0.75 HP)',
			velocidadto: '24.4',
			rendimientoto: '0.4 kW (0.54 HP)',
			anchopatin: 'De 58 a 127 mm',
			opcional: 'De 128 a 153 mm o 154 a 305 mm',
			peso: 58,
			field13: '0.42',
			field14: '800',
			precio: 8606,
			field16: '147',
		},
		{
			id: 5,
			nombre: 'NERM2003H-L',
			capacidad: '250',
			cadena: 'Grado 80, niquelada de 6.0 mm',
			ramales: '1',
			velocidadte: '16.2',
			rendimientote: '0.9 kW (1.2 HP)',
			velocidadto: '12.2',
			rendimientoto: '0.4 kW (0.54 HP)',
			anchopatin: 'De 58 a 127 mm',
			opcional: 'De 128 a 153 mm o 154 a 305 mm',
			peso: 67,
			field13: '0.81',
			field14: '800',
			precio: 9969,
			field16: '148',
		},
		{
			id: 6,
			nombre: 'NERM2003H-S',
			capacidad: '250',
			cadena: 'Grado 80, niquelada de 6.0 mm',
			ramales: '1',
			velocidadte: '16.2',
			rendimientote: '0.9 kW (1.2 HP)',
			velocidadto: '24.4',
			rendimientoto: '0.4 kW (0.54 HP)',
			anchopatin: 'De 58 a 127 mm',
			opcional: 'De 128 a 153 mm o 154 a 305 mm',
			peso: 67,
			field13: '0.81',
			field14: '800',
			precio: 9969,
			field16: '148',
		},
		{
			id: 7,
			nombre: 'NERM2005L-L',
			capacidad: '500',
			cadena: 'Grado 80, niquelada de 6.0 mm',
			ramales: '1',
			velocidadte: '4.6',
			rendimientote: '0.56 kW (0.75 HP)',
			velocidadto: '12.2',
			rendimientoto: '0.4 kW (0.54 HP)',
			anchopatin: 'De 58 a 127 mm',
			opcional: 'De 128 a 153 mm o 154 a 305 mm',
			peso: 63,
			field13: '0.81',
			field14: '800',
			precio: 8583,
			field16: '148',
		},
		{
			id: 8,
			nombre: 'NERM2005L-S',
			capacidad: '500',
			cadena: 'Grado 80, niquelada de 6.0 mm',
			ramales: '1',
			velocidadte: '4.6',
			rendimientote: '0.56 kW (0.75 HP)',
			velocidadto: '24.4',
			rendimientoto: '0.4 kW (0.54 HP)',
			anchopatin: 'De 58 a 127 mm',
			opcional: 'De 128 a 153 mm o 154 a 305 mm',
			peso: 63,
			field13: '0.81',
			field14: '800',
			precio: 8583,
			field16: '148',
		},
		{
			id: 9,
			nombre: 'NERM2005S-L',
			capacidad: '500',
			cadena: 'Grado 80, niquelada de 6.0 mm',
			ramales: '1',
			velocidadte: '8.8',
			rendimientote: '0.9 kW (1.2 HP)',
			velocidadto: '12.2',
			rendimientoto: '0.4 kW (0.54 HP)',
			anchopatin: 'De 58 a 127 mm',
			opcional: 'De 128 a 153 mm o 154 a 305 mm',
			peso: 67,
			field13: '0.81',
			field14: '800',
			precio: 9389,
			field16: '148',
		},
		{
			id: 10,
			nombre: 'NERM2005S-S',
			capacidad: '500',
			cadena: 'Grado 80, niquelada de 6.0 mm',
			ramales: '1',
			velocidadte: '8.8',
			rendimientote: '0.9 kW (1.2 HP)',
			velocidadto: '24.4',
			rendimientoto: '0.4 kW (0.54 HP)',
			anchopatin: 'De 58 a 127 mm',
			opcional: 'De 128 a 153 mm o 154 a 305 mm',
			peso: 67,
			field13: '0.81',
			field14: '800',
			precio: 9389,
			field16: '148',
		},
		{
			id: 11,
			nombre: 'NERM2010L-L',
			capacidad: '1000',
			cadena: 'Grado 80, niquelada de 7.7 mm',
			ramales: '1',
			velocidadte: '4.3',
			rendimientote: '0.9 kW (1.2 HP)',
			velocidadto: '12.2',
			rendimientoto: '0.4 kW (0.54 HP)',
			anchopatin: 'De 58 a 127 mm',
			opcional: 'De 128 a 153 mm o 154 a 305 mm',
			peso: 77,
			field13: '1.33',
			field14: '800',
			precio: 9093,
			field16: '163',
		},
		{
			id: 12,
			nombre: 'NERM2010L-S',
			capacidad: '1000',
			cadena: 'Grado 80, niquelada de 7.7 mm',
			ramales: '1',
			velocidadte: '4.3',
			rendimientote: '0.9 kW (1.2 HP)',
			velocidadto: '24.4',
			rendimientoto: '0.4 kW (0.54 HP)',
			anchopatin: 'De 58 a 127 mm',
			opcional: 'De 128 a 153 mm o 154 a 305 mm',
			peso: 77,
			field13: '1.33',
			field14: '800',
			precio: 9093,
			field16: '163',
		},
		{
			id: 13,
			nombre: 'NERM2010S-L',
			capacidad: '1000',
			cadena: 'Grado 80, niquelada de 7.7 mm',
			ramales: '1',
			velocidadte: '8.5',
			rendimientote: '1.8 kW (2.4 HP)',
			velocidadto: '12.2',
			rendimientoto: '0.4 kW (0.54 HP)',
			anchopatin: 'De 58 a 127 mm',
			opcional: 'De 128 a 153 mm o 154 a 305 mm',
			peso: 84,
			field13: '1.33',
			field14: '800',
			precio: 10691,
			field16: '163',
		},
		{
			id: 14,
			nombre: 'NERM2010S-S',
			capacidad: '1000',
			cadena: 'Grado 80, niquelada de 7.7 mm',
			ramales: '1',
			velocidadte: '8.5',
			rendimientote: '1.8 kW (2.4 HP)',
			velocidadto: '24.4',
			rendimientoto: '0.4 kW (0.54 HP)',
			anchopatin: 'De 58 a 127 mm',
			opcional: 'De 128 a 153 mm o 154 a 305 mm',
			peso: 84,
			field13: '1.33',
			field14: '800',
			precio: 10691,
			field16: '163',
		},
		{
			id: 15,
			nombre: 'NERM2015S-L',
			capacidad: '1500',
			cadena: 'Grado 80, niquelada de 10.2 mm',
			ramales: '1',
			velocidadte: '5.5',
			rendimientote: '1.8 kW (2.4 HP)',
			velocidadto: '12.2',
			rendimientoto: '0.4 kW (0.54 HP)',
			anchopatin: 'De 82 a 153 mm',
			opcional: 'De 154 a 178 mm o 179 a 305 mm',
			peso: 11,
			field13: '2.3',
			field14: '800',
			precio: 12355,
			field16: '205',
		},
		{
			id: 16,
			nombre: 'NERM2015S-S',
			capacidad: '1500',
			cadena: 'Grado 80, niquelada de 10.2 mm',
			ramales: '1',
			velocidadte: '5.5',
			rendimientote: '1.8 kW (2.4 HP)',
			velocidadto: '24.4',
			rendimientoto: '0.4 kW (0.54 HP)',
			anchopatin: 'De 82 a 153 mm',
			opcional: 'De 154 a 178 mm o 179 a 305 mm',
			peso: 11,
			field13: '2.3',
			field14: '800',
			precio: 12355,
			field16: '205',
		},
		{
			id: 17,
			nombre: 'NERM2020C-L',
			capacidad: '2000',
			cadena: 'Grado 80, niquelada de 7.7 mm',
			ramales: '2',
			velocidadte: '2.1',
			rendimientote: '0.9 kW (1.2 HP)',
			velocidadto: '12.2',
			rendimientoto: '0.4 kW (0.54 HP)',
			anchopatin: 'De 82 a 153 mm',
			opcional: 'De 154 a 178 mm o 179 a 305 mm',
			peso: 97,
			field13: '2.7',
			field14: '800',
			precio: 10547,
			field16: '261',
		},
		{
			id: 18,
			nombre: 'NERM2020C-S',
			capacidad: '2000',
			cadena: 'Grado 80, niquelada de 7.7 mm',
			ramales: '2',
			velocidadte: '2.1',
			rendimientote: '0.9 kW (1.2 HP)',
			velocidadto: '24.4',
			rendimientoto: '0.4 kW (0.54 HP)',
			anchopatin: 'De 82 a 153 mm',
			opcional: 'De 154 a 178 mm o 179 a 305 mm',
			peso: 97,
			field13: '2.7',
			field14: '800',
			precio: 10547,
			field16: '261',
		},
		{
			id: 19,
			nombre: 'NERM2020L-L',
			capacidad: '2000',
			cadena: 'Grado 80, niquelada de 10.2 mm',
			ramales: '1',
			velocidadte: '4.3',
			rendimientote: '1.8 kW (2.4 HP)',
			velocidadto: '12.2',
			rendimientoto: '0.4 kW (0.54 HP)',
			anchopatin: 'De 82 a 153 mm',
			opcional: 'De 154 a 178 mm o 179 a 305 mm',
			peso: 11,
			field13: '2.3',
			field14: '800',
			precio: 11424,
			field16: '205',
		},
		{
			id: 20,
			nombre: 'NERM2020L-S',
			capacidad: '2000',
			cadena: 'Grado 80, niquelada de 10.2 mm',
			ramales: '1',
			velocidadte: '4.3',
			rendimientote: '1.8 kW (2.4 HP)',
			velocidadto: '24.4',
			rendimientoto: '0.4 kW (0.54 HP)',
			anchopatin: 'De 82 a 153 mm',
			opcional: 'De 154 a 178 mm o 179 a 305 mm',
			peso: 11,
			field13: '2.3',
			field14: '800',
			precio: 11424,
			field16: '205',
		},
		{
			id: 21,
			nombre: 'NERM2020S-L',
			capacidad: '2000',
			cadena: 'Grado 80, niquelada de 10.2 mm',
			ramales: '1',
			velocidadte: '8.5',
			rendimientote: '3.5 kW (4.7 HP)',
			velocidadto: '12.2',
			rendimientoto: '0.4 kW (0.54 HP)',
			anchopatin: 'De 82 a 153 mm',
			opcional: 'De 154 a 178 mm o 179 a 305 mm',
			peso: 12,
			field13: '2.3',
			field14: '800',
			precio: 13827,
			field16: '205',
		},
		{
			id: 22,
			nombre: 'NERM2020S-S',
			capacidad: '2000',
			cadena: 'Grado 80, niquelada de 10.2 mm',
			ramales: '1',
			velocidadte: '8.5',
			rendimientote: '3.5 kW (4.7 HP)',
			velocidadto: '24.4',
			rendimientoto: '0.4 kW (0.54 HP)',
			anchopatin: 'De 82 a 153 mm',
			opcional: 'De 154 a 178 mm o 179 a 305 mm',
			peso: 12,
			field13: '2.3',
			field14: '800',
			precio: 13827,
			field16: '205',
		},
		{
			id: 23,
			nombre: 'NERM2025S-L',
			capacidad: '2500',
			cadena: 'Grado 80, niquelada de 11.2 mm',
			ramales: '1',
			velocidadte: '6.7',
			rendimientote: '3.5 kW (4.7 HP)',
			velocidadto: '12.2',
			rendimientoto: '0.4 kW (0.54 HP)',
			anchopatin: 'De 82 a 153 mm',
			opcional: 'De 154 a 178 mm o 179 a 305 mm',
			peso: 15,
			field13: '2.8',
			field14: '1000',
			precio: 14837,
			field16: '243',
		},
		{
			id: 24,
			nombre: 'NERM2025S-S',
			capacidad: '2500',
			cadena: 'Grado 80, niquelada de 11.2 mm',
			ramales: '1',
			velocidadte: '6.7',
			rendimientote: '3.5 kW (4.7 HP)',
			velocidadto: '24.4',
			rendimientoto: '0.4 kW (0.54 HP)',
			anchopatin: 'De 82 a 153 mm',
			opcional: 'De 154 a 178 mm o 179 a 305 mm',
			peso: 15,
			field13: '2.8',
			field14: '1000',
			precio: 14837,
			field16: '243',
		},
		{
			id: 25,
			nombre: 'NERM2030C-L',
			capacidad: '3000',
			cadena: 'Grado 80, niquelada de 10.2 mm',
			ramales: '2',
			velocidadte: '5.2',
			rendimientote: '3.5 kW (4.7 HP)',
			velocidadto: '12.2',
			rendimientoto: '0.4 kW (0.54 HP)',
			anchopatin: 'De 82 a 153 mm',
			opcional: 'De 154 a 178 mm o 179 a 305 mm',
			peso: 15,
			field13: '4.7',
			field14: '1000',
			precio: 14272,
			field16: '344',
		},
		{
			id: 26,
			nombre: 'NERM2030C-S',
			capacidad: '3000',
			cadena: 'Grado 80, niquelada de 10.2 mm',
			ramales: '2',
			velocidadte: '5.2',
			rendimientote: '3.5 kW (4.7 HP)',
			velocidadto: '24.4',
			rendimientoto: '0.4 kW (0.54 HP)',
			anchopatin: 'De 82 a 153 mm',
			opcional: 'De 154 a 178 mm o 179 a 305 mm',
			peso: 15,
			field13: '4.7',
			field14: '1000',
			precio: 14272,
			field16: '344',
		},
		{
			id: 27,
			nombre: 'NERM2050L-L',
			capacidad: '5000',
			cadena: 'Grado 80, niquelada de 11.2 mm',
			ramales: '2',
			velocidadte: '3.4',
			rendimientote: '3.5 kW (4.7 HP)',
			velocidadto: '12.2',
			rendimientoto: '0.75 kW (1.00HP)',
			anchopatin: 'De 100 a 178 mm',
			opcional: 'De 169 a 193 mm o 194 a 305 mm',
			peso: 20,
			field13: '5.6',
			field14: '1800',
			precio: 16927,
			field16: '373',
		},
		{
			id: 28,
			nombre: 'NERM2050L-S',
			capacidad: '5000',
			cadena: 'Grado 80, niquelada de 11.2 mm',
			ramales: '2',
			velocidadte: '3.4',
			rendimientote: '3.5 kW (4.7 HP)',
			velocidadto: '24.4',
			rendimientoto: '0.75 kW (1.00HP)',
			anchopatin: 'De 100 a 178 mm',
			opcional: 'De 169 a 193 mm o 194 a 305 mm',
			peso: 20,
			field13: '5.6',
			field14: '1800',
			precio: 16927,
			field16: '373',
		},
	]);
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

	useEffect(() => {
		pagoFinal();
	}, [tabla]);

	return (
		<div className="container mx-auto min-h">
			<h1 className="text-white text-6xl text-center font-semibold">
				Cotizador
			</h1>
			<div className="border-2 border-white mt-16">
				<div></div>
				<div className="p-10">
					<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
						<select {...register('herramienta')} onChange={probando}>
							<option value="0">Seleccionar</option>
							<option value="1">NERM2001H-L</option>
							<option value="2">NERM2001H-S</option>
							<option value="3">NERM2003S-L</option>
						</select>
						{seleccionado ? (
							<div>
								<label className="text-white" htmlFor="">
									Capacidad:
								</label>
								<input
									type="text"
									name="capacidad"
									value={seleccionado[0].capacidad}
								/>
								<label className="text-white" htmlFor="">
									Longuitud de izaje:
								</label>
								<input type="text" name="capacidad" value="6" />
								<label className="text-white" htmlFor="">
									Cadena de carga:
								</label>
								<input
									type="text"
									name="capacidad"
									value={seleccionado[0].cadena}
								/>
								<label className="text-white" htmlFor="">
									Precio:
								</label>
								<input
									type="text"
									name="capacidad"
									value={seleccionado[0].precio}
								/>
							</div>
						) : null}
						<button className="bg-white border-2 border-black" type="submit">
							Agregar
						</button>
					</form>
				</div>
			</div>
			<div ref={ref}>
				<table className="rounded-t-lg m-5 w-full mx-auto bg-gray-200 text-gray-800">
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
				</table>
				{tabla.length > 0 ? (
					<p className="text-white text-right text-2xl">
						Pago Final: {costoTotal}
					</p>
				) : (
					<p className="text-white text-right text-2xl">Pago Final: 0</p>
				)}
			</div>
			<Pdf
				targetRef={ref}
				options={options}
				// scale={2}
				filename="code-example.pdf"
			>
				{({ toPdf }) => (
					<button
						onClick={toPdf}
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
				)}
			</Pdf>
		</div>
	);
};

export default Cotizador;
