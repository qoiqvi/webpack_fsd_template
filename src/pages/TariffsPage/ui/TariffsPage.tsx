import { classNames } from "shared/lib/classNames/classNames"
import cls from "./TariffsPage.module.scss"
import { useEffect, useState } from "react"
import { Page } from "widgets/Page"
import { TariffPageHeader } from "./TariffPageHeader/TariffPageHeader"
import { fetchTariffsByType } from "features/TariffsTabs"
import { useSearchParams } from "react-router-dom"
import { TariffSchema, TariffType } from "shared/types"
import { TariffsItemList } from "features/TariffsItemList"

export interface TariffsPageProps {
	className?: string
}

export const TariffsPage = (props: TariffsPageProps) => {
	const { className } = props
	const [searchParams, setSearchParams] = useSearchParams()
	const [tariffs, setTariffs] = useState<TariffSchema[]>([])

	useEffect(() => {
		// eslint-disable-next-line no-extra-semi
		;(async () => {
			const response = await fetchTariffsByType((searchParams.get("type") as TariffType) || undefined)
			setTariffs(response.data)
		})()
	}, [searchParams])

	return (
		<Page className={classNames(cls.TariffsPage, {}, [className])}>
			<TariffPageHeader setSearchParams={setSearchParams} />
			<TariffsItemList tariffs={tariffs} />
		</Page>
	)
}
