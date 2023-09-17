import { classNames } from "shared/lib/classNames/classNames"
import cls from "./TariffsPage.module.scss"
import { memo, useEffect } from "react"
import { Navbar } from "widgets/ui/Navbar"
import { Page } from "widgets/Page"
import axios from "axios"
import { Api } from "shared/api/api"
import { Select } from "shared/ui/Select/ui/Select"
import { TariffPageHeader } from "./TariffPageHeader/TariffPageHeader"

export interface TariffsPageProps {
	className?: string
}

export const TariffsPage = (props: TariffsPageProps) => {
	const { className } = props
	useEffect(() => {
		async function getTariffs() {
			const a = await Api.get("tariffs?type=Mobile")
			console.log(a.data)
		}
		getTariffs()
	}, [])
	return (
		<Page className={classNames(cls.TariffsPage, {}, [className])}>
			<TariffPageHeader />
		</Page>
	)
}
