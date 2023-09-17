import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Sidebar.module.scss"
import { memo } from "react"

export interface SidebarProps {
	className?: string
}

export const Sidebar = memo((props: SidebarProps) => {
	const { className } = props
	return <div className={classNames(cls.Sidebar, {}, [className])}></div>
})
