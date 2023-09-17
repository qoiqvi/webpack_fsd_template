export type TariffType = "Mobile" | "Convergent" | "HomeServicesTariff"

export interface Unit {
	display: string
	periodDisplay: string
	periodMultiplier: number
	unitDisplay: string
	quotaPeriod: string
}

export interface TotalPrice {
	valueFormat: string
	value: number
	unit: Unit
}

export interface Offer {
	title: string
	description: string
	totalPrice: TotalPrice
}

// нужно сделать родительский тип с айдишником и типом, и расширить его под нужды

export interface TariffSchema {
	marketingId: number
	tariffType: TariffType
	offer: Offer
}
