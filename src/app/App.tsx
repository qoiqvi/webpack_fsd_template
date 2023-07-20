import { classNames } from "shared/lib/classNames/classNames"
<<<<<<< HEAD
import cls from "./App.module.scss"

export const App = () => {
	return <div className={classNames(cls.App, {}, [])}>App component</div>
=======
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
>>>>>>> c452aa4041529bc068c8e08280034e27a9f96a69
}
