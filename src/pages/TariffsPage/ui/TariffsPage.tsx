import { classNames } from "shared/lib/classNames/classNames"
import cls from "./TariffsPage.module.scss"
import { useEffect, useState } from "react"
import { Page } from "widgets/Page"
import { TariffsTabs, fetchTariffsByType } from "features/TariffsTabs"
import { useSearchParams } from "react-router-dom"
import { TariffSchema, TariffType } from "shared/types"
import { TariffsItemList } from "features/TariffsItemList"
import { Button } from "shared/ui/Button"
import { Text } from "shared/ui/Text"
import { Api } from "shared/api/api"
import { Spinner } from "shared/ui/Spinner"

export interface TariffsPageProps {
	className?: string
}

export const TariffsPage = (props: TariffsPageProps) => {
	const { className } = props
	const [searchParams] = useSearchParams()
	const [tariffs, setTariffs] = useState<TariffSchema[]>([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		// eslint-disable-next-line no-extra-semi
		;(async () => {
			setIsLoading(true)
			const response = await fetchTariffsByType((searchParams.get("type") as TariffType) || undefined)
			setTariffs(response?.data)
			setIsLoading(false)
		})()
	}, [searchParams])

	const parseTariffs = async () => {
		setIsLoading(true)
		Api.get("/refetch")
		const response = await fetchTariffsByType((searchParams.get("type") as TariffType) || undefined)
		setTariffs(response?.data)
		setIsLoading(false)
	}

	return (
		<Page className={classNames(cls.TariffsPage, {}, [className])}>
			<div className={cls.cont}>
				<TariffsTabs />
				<Button
					theme="clear"
					onClick={parseTariffs}
					className={cls.parseBtn}
				>
					<Text
						title="Парсить"
						color="red"
					/>
				</Button>
			</div>
			{!isLoading ? <TariffsItemList tariffs={tariffs} /> : <Spinner />}
		</Page>
	)
}
