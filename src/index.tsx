import { App } from "./app/App"
import { createRoot } from "react-dom/client"
import "./app/styles/index.scss"

const container = document.getElementById("root")
const root = createRoot(container as HTMLElement)
root.render(<App />)
