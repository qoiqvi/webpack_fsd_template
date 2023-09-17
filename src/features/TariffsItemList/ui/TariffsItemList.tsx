import { classNames } from "shared/lib/classNames/classNames"
import cls from "./TariffsItemList.module.scss"
import { memo } from "react"
import { TariffSchema } from "shared/types"
import { TariffCard } from "entities/Tariff"

export interface TariffsItemListProps {
	className?: string
	tariffs: TariffSchema[]
}

export const TariffsItemList = memo((props: TariffsItemListProps) => {
	const { className, tariffs } = props
	return (
		<div className={classNames(cls.TariffsItemList, {}, [className])}>
			{tariffs?.map((tariff) => (
				<TariffCard
					tariff={tariff}
					key={tariff.id}
				/>
			))}
		</div>
	)
})
