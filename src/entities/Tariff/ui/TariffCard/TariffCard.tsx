import { classNames } from "shared/lib/classNames/classNames"
import cls from "./TariffCard.module.scss"
import { memo } from "react"
import { TariffSchema } from "shared/types"
import { Text } from "shared/ui/Text"
import { Button } from "shared/ui/Button"

export interface TariffCardProps {
	className?: string
	tariff: TariffSchema | undefined
}

export const TariffCard = memo((props: TariffCardProps) => {
	const { className, tariff } = props
	return (
		<div className={classNames(cls.TariffCard, {}, [className])}>
			<div className={cls.label}>
				<Text
					color="white"
					text={tariff?.label?.[0].text}
					className={cls.title}
				/>
			</div>
			<Text
				title={tariff?.title}
				color="red"
			/>
			<ul className={cls.productCharacteristics}>
				{tariff?.productCharacteristics?.map((characteristic, i) => (
					<li key={i}>
						<Text
							size="size_l"
							text={characteristic.title}
						/>
					</li>
				))}
			</ul>
			<div className={cls.benefits}>
				<div className={cls.iconCont}>
					{tariff?.benefitsDescription?.icons.map((icon) => (
						<img
							height={28}
							width={28}
							className={cls.benefitionIcon}
							key={icon}
							src={`https://${icon}`}
						/>
					))}
				</div>
				<Text text={tariff?.benefitsDescription?.description} />
			</div>
			<div className={cls.price}>
				<Text title={tariff?.subscriptionFee?.value} />
			</div>
			<div className={cls.btnCont}>
				<Button
					theme="red"
					className={cls.btn}
				>
					<Text
						text={"Подключить"}
						color="white"
						align="center"
					/>
				</Button>
				<Button
					className={cls.btn}
					theme="outlined_red"
				>
					<Text
						text={"Подробнее"}
						align="center"
					/>
				</Button>
			</div>
		</div>
	)
})
