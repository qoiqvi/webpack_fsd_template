import { TariffsPage } from "pages/TariffsPage"
import { classNames } from "shared/lib/classNames/classNames"
import { Sidebar } from "widgets/Sidebar"
import { Navbar } from "widgets/ui/Navbar"

export const App = () => {
	return (
		<div className={classNames("App", {}, [])}>
			<Navbar />
			<Sidebar />
			<TariffsPage />
		</div>
	)
}
