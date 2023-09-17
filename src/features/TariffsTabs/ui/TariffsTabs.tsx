import { classNames } from "shared/lib/classNames/classNames"
import cls from "./TariffsTabs.module.scss"
import { memo } from "react"
import { Text } from "shared/ui/Text"
import { Button } from "shared/ui/Button"
import { useSearchParams } from "react-router-dom"

export interface TariffsTabsProps {
	className?: string
}

export const TariffsTabs = memo((props: TariffsTabsProps) => {
	const { className } = props

	const [searchParams, setSearchParams] = useSearchParams()

	return (
		<div className={classNames(cls.TariffsTabs, {}, [className])}>
			<Button onClick={() => setSearchParams({ type: "Mobile" })}>
				<Text
					text={"Мобильная связь"}
					color="white"
					size="size_l"
				/>
			</Button>
			<Button onClick={() => setSearchParams({ type: "HomeServicesTariff" })}>
				<Text
					text={"Домашний телефон"}
					color="white"
					size="size_l"
				/>
			</Button>
			<Button onClick={() => setSearchParams({ type: "Convergent" })}>
				<Text
					text={"Дом"}
					color="white"
					size="size_l"
				/>
			</Button>
		</div>
	)
})
