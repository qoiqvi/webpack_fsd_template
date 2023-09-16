import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"
import { memo } from "react"
import { Link } from "react-router-dom"

export interface NavbarProps {
	className?: string
}

export const Navbar = memo((props: NavbarProps) => {
	const { className } = props
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Link to={"/"}>Главная</Link>
			<Link to={"/tariffs"}>Тарифы</Link>
		</div>
	)
})
