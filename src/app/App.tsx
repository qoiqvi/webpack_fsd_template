import { classNames } from "shared/lib/classNames/classNames"
import { Navbar } from "widgets/ui/Navbar"

export const App = () => {
	return (
		<div className={classNames("App", {}, [])}>
			<Navbar />
			App component
		</div>
	)
}
