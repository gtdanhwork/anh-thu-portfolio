import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import HomeTemplate from './templates/HomeTemplate';

function App() {
	return (
		<BrowserRouter basename="/anh-thu-portfolio">
			<Routes>
				<Route element={<HomeTemplate />}>
					<Route
						index
						element={<Homepage />}
					></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
