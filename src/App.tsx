import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageWelcome } from './pages/PageWelcome';
import { PageTechBooks } from './pages/PageTechBooks';

function App() {
	return (
		<div className="App">
			<h1>Tech Book Site</h1>
			<nav>
				<NavLink to="/welcome">Welcome</NavLink>
				<NavLink to="/techbooks">Tech Books</NavLink>
			</nav>

			<Routes>
				<Route path="/welcome" element={<PageWelcome />} />
				<Route path="/techbooks" element={<PageTechBooks />} />
				<Route path="/" element={<Navigate to="/welcome" replace />} />
			</Routes>
		</div>
	);
}

export default App;
