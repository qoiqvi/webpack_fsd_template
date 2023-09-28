import { classNames } from "shared/lib/classNames/classNames"
import cls from "./TariffsTabs.module.scss"
import { memo } from "react"
import { Text } from "shared/ui/Text"
import { Button } from "shared/ui/Button"
import { useSearchParams } from "react-router-dom"
import { TariffType } from "shared/types"

export interface TariffsTabsProps {
	className?: string
}

export const TariffsTabs = memo((props: TariffsTabsProps) => {
	const { className } = props

	const [searchParams, setSearchParams] = useSearchParams()

	//@ts-ignore
	const currentType: TariffType = searchParams.get("type") || "All"

	return (
		<div className={classNames(cls.TariffsTabs, {}, [className])}>
			<Button
				className={cls.tab}
				style={{ border: currentType === "Mobile" ? "1px solid red" : undefined }}
				onClick={() => setSearchParams({ type: "Mobile" })}
			>
				<Text
					text={"Мобильная связь"}
					size="size_l"
				/>
			</Button>
			<Button
				className={cls.tab}
				style={{ border: currentType === "HomeServicesTariff" ? "1px solid red" : undefined }}
				onClick={() => setSearchParams({ type: "HomeServicesTariff" })}
			>
				<Text
					text={"Домашний телефон"}
					size="size_l"
				/>
			</Button>
			<Button
				className={cls.tab}
				style={{ border: currentType === "Convergent" ? "1px solid red" : undefined }}
				onClick={() => setSearchParams({ type: "Convergent" })}
			>
				<Text
					text={"Дом"}
					size="size_l"
				/>
			</Button>
			<Button
				className={cls.tab}
				style={{ border: currentType === "All" ? "1px solid red" : undefined }}
				onClick={() => setSearchParams({})}
			>
				<Text
					text={"Все"}
					size="size_l"
				/>
			</Button>
		</div>
	)
})
