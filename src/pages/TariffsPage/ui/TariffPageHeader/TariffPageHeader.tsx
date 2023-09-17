import { classNames } from "shared/lib/classNames/classNames"
import cls from "./TariffPageHeader.module.scss"
import { memo } from "react"
import { Text } from "shared/ui/Text"
import { TariffsTabs } from "features/TariffsTabs"
import { SetURLSearchParams } from "react-router-dom"

export interface TariffPageHeaderProps {
	className?: string
	setSearchParams: SetURLSearchParams
}

export const TariffPageHeader = memo((props: TariffPageHeaderProps) => {
	const { className, setSearchParams } = props
	return (
		<div className={classNames(cls.TariffPageHeader, {}, [className])}>
			<Text title={"МТС тарифы"} />
		</div>
	)
})
