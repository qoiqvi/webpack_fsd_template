import { Api } from "shared/api/api"
import { TariffType } from "shared/types"

export const fetchTariffsByType = async (type: TariffType | undefined) => {
	try {
		const response = await Api.get("/tariffs", {
			params: {
				type: type,
			},
		})
		return response
	} catch (error) {
		console.error(error)
	}
}
