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

	const price =
		tariff?.subscriptionFee?.value ?? `${tariff?.subscriptionFee?.numValue} ${tariff?.subscriptionFee?.displayUnit}`

	return (
		<div className={classNames(cls.TariffCard, {}, [className])}>
			<div
				style={{ backgroundImage: `url(https://${tariff?.cardImageUrl})` }}
				className={cls.image}
			>
				{tariff?.label ? (
					<div className={cls.labelCard}>
						<Text
							color="white"
							text={tariff?.label?.[0].text}
							className={cls.label}
						/>
					</div>
				) : null}
			</div>
			<div className={cls.content}>
				<span className={cls.title}>{tariff?.title}</span>
				<span
					className={cls.desc}
					dangerouslySetInnerHTML={{ __html: tariff?.description ?? "" }}
				></span>
				<ul className={cls.productCharacteristics}>
					{tariff?.productCharacteristics?.map((characteristic, i) => (
						<li
							key={i}
							className={cls.charateristic}
						>
							{`${characteristic.numValue} ${
								characteristic.displayUnit ? characteristic.displayUnit : "каналов"
							}`}
						</li>
					))}
				</ul>
				{tariff?.benefitsDescription ? (
					<div className={cls.benefits}>
						<div style={{ width: tariff?.benefitsDescription?.icons.length * 27 }}>
							{tariff?.benefitsDescription?.icons.map((icon, i) => (
								<img
									height={28}
									width={28}
									style={{
										left: i === 0 ? 0 : i * 20,
									}}
									className={cls.benefitionIcon}
									key={icon}
									src={`https://${icon}`}
								/>
							))}
						</div>
						<span
							className={cls.description}
							dangerouslySetInnerHTML={{ __html: tariff.benefitsDescription.description }}
						/>
					</div>
				) : null}
				<div className={cls.price}>
					<Text title={price === "undefined undefined" ? "" : price} />
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
		</div>
	)
})
