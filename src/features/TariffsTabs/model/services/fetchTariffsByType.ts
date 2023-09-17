import axios from "axios"
import { Api } from "shared/api/api"
import { TariffType } from "shared/types"

export const fetchTariffsByType = async (type: TariffType | undefined) => {
	const response = await axios.get("http://127.0.0.1:5000/tariffs", {
		params: {
			type: type,
		},
	})
	return response
}
