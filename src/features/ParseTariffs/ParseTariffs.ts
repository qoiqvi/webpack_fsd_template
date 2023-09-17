import { Api } from "shared/api/api"

export function ParseTariffs() {
	Api.get("/refetch")
}
