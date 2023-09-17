import { classNames } from "shared/lib/classNames/classNames"
import cls from "./TariffsTabs.module.scss"
import { memo } from "react"
import { Text } from "shared/ui/Text"
import { Button } from "shared/ui/Button"

export interface TariffsTabsProps {
	className?: string
}

export const TariffsTabs = memo((props: TariffsTabsProps) => {
	const { className } = props

	return (
		<div className={classNames(cls.TariffsTabs, {}, [className])}>
			<Button>
				<Text text={"Мобильная связь"} />
			</Button>
			<Button>
				<Text text={"Домашний телефон"} />
			</Button>
			<Button>
				<Text text={"Дом"} />
			</Button>
		</div>
	)
})
