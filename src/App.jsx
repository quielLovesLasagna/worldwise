import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";

function App() {
	return (
		<CitiesProvider>
			<BrowserRouter>
				<Routes>
					<Route index element={<Homepage />} />
					<Route path="product" element={<Product />} />
					<Route path="pricing" element={<Pricing />} />
					<Route path="login" element={<Login />} />
					<Route path="app" element={<AppLayout />}>
						{/* "Declarative" way of navigating to a route without using any link */}
						<Route index element={<Navigate replace to="cities" />} />
						<Route path="cities" element={<CityList />} />
						{/* If the URL takes the (PATH SHAPE), it will store the data from the <Link /> (reference: <CityItem />) in the :id and the :id will basically be passed to <City /> */}
						<Route path="cities/:id" element={<City />} />

						<Route path="countries" element={<CountryList />} />
						<Route path="form" element={<Form />} />
					</Route>
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</CitiesProvider>
	);
}

export default App;
