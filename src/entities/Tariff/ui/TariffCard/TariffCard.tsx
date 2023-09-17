import { classNames } from "shared/lib/classNames/classNames"
import cls from "./TariffCard.module.scss"
import { memo } from "react"

export interface TariffCardProps {
	className?: string
}

export const TariffCard = memo((props: TariffCardProps) => {
	const { className } = props
	return <div className={classNames(cls.TariffCard, {}, [className])}></div>
})
