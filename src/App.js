import Cotizador from './components/Cotizador';

function App() {
	return (
		<div className="App bg-gray-700 min-h-screen">
			<header className=" border-solid border-2 border-white  py-4 px-2 rounded-md">
				<nav>
					<ul className="text-white text-xl font-semibold">
						<li>
							<a href="/">Inicio</a>
						</li>
					</ul>
				</nav>
			</header>
			<Cotizador />
			<footer className="h-16 border-solid border-2 border-white">
				Soy el footer
			</footer>
		</div>
	);
}

export default App;
