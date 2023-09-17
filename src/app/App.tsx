import { TariffsPage } from "pages/TariffsPage"
import { Routes, Route } from "react-router"
import { Sidebar } from "widgets/Sidebar"
import { Navbar } from "widgets/ui/Navbar"

export const App = () => {
	return (
		<div>
			<Navbar />
			<Sidebar />
			<div>
				<Routes>
					<Route
						path="/"
						element={<TariffsPage />}
					></Route>
				</Routes>
			</div>
		</div>
	)
}
