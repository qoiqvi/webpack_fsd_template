import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"
import { memo } from "react"
import { Text } from "shared/ui/Text"
import { Button } from "shared/ui/Button"
import { Api } from "shared/api/api"

export interface NavbarProps {
	className?: string
}

export const Navbar = memo((props: NavbarProps) => {
	const { className } = props

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Text
				title={"Тарифы"}
				color="white"
				size="size_l"
				className={cls.text}
			/>
		</div>
	)
})
