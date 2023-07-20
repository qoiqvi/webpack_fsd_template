import { classNames } from "shared/lib/classNames/classNames"
import cls from "./App.module.scss"

export const App = () => {
	return <div className={classNames(cls.App, {}, [])}>App component</div>
}
