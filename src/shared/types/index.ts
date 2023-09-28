export type TariffType = "Mobile" | "Convergent" | "HomeServicesTariff" | "All"

interface subscriptionFee {
	baseParameter: string
	displayUnit: string
	isUnlimited: boolean
	numValue: number
	numValueType: string
	quotaPeriod: string
	quotaUnit: string
	sortOrder: number
	title: string
	value: string
}

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

interface Label {
	sortOrder: number
	text: string
	type: string
}

interface productCharacteristics {
	baseParameter: string
	displayUnit: string
	isUnlimited: boolean
	numValue: number
	numValueType: string
	quotaUnit: string
	title: string
	value: string
	description?: string
}

interface benefitsDescription {
	description: string
	icons: string[]
}

export interface TariffSchema {
	benefitsDescription: benefitsDescription | null
	cardImageUrl: string
	description: string | null
	id: number
	label?: Label[] | null
	marketingId: number
	parametrizedTariffSettings: any
	productCharacteristics?: productCharacteristics[] | []
	productFeatures: any[]
	subscriptionFee?: subscriptionFee | null
	title: string
	type: TariffType
}
