import { classNames } from "shared/lib/classNames/classNames"
import cls from "./TariffPageHeader.module.scss"
import { memo } from "react"
import { Text } from "shared/ui/Text"
import { TabItem, Tabs } from "shared/ui/Tabs"

export interface TariffPageHeaderProps {
	className?: string
}

export const TariffPageHeader = memo((props: TariffPageHeaderProps) => {
	const { className } = props
	return (
		<div className={classNames(cls.TariffPageHeader, {}, [className])}>
			<Text title={"МТС тарифы"} />
			<div className={cls.tabsContainer}></div>
		</div>
	)
})
