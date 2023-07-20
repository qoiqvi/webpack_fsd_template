import { useState } from "react"

export const Counter = () => {
	const [state, setState] = useState(0)
	return (
		<div>
			{state}
			<button onClick={() => setState((state) => state + 1)}>decrese</button>
		</div>
	)
}
