import { classNames } from "shared/lib/classNames/classNames"
import { Counter } from "shared/ui/Counter/Counter"

export const App = () => {
	return (
		<div className={classNames("App", {}, [])}>
			App component
			<div>
				<Counter />
			</div>
		</div>
	)
}
