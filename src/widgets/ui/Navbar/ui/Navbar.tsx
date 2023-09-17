import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"
import { memo } from "react"
import { Text } from "shared/ui/Text"
import { TariffsTabs } from "features/TariffsTabs"
import { Button } from "shared/ui/Button"
import { ParseTariffs } from "features/ParseTariffs/ParseTariffs"

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
			<Button
				theme="clear"
				onClick={ParseTariffs}
			>
				<Text
					title="Парсить"
					color="white"
				/>
			</Button>
			<TariffsTabs className={cls.tabs} />
		</div>
	)
})
