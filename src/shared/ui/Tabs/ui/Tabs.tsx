import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Tabs.module.scss"
import { ReactNode, memo, useCallback } from "react"

export interface TabItem {
	value: string
	content: ReactNode
}

export interface TabsProps {
	className?: string
	tabs: TabItem[]
	value: string
	onTabClick: (newTab: TabItem) => void
}

export const Tabs = memo((props: TabsProps) => {
	const { className, onTabClick, tabs, value } = props

	const clickHandle = useCallback(
		(tab: TabItem) => {
			return () => {
				onTabClick(tab)
			}
		},
		[onTabClick]
	)

	return (
		<div className={classNames(cls.Tabs, {}, [className])}>
			{tabs.map((tab) => (
				<div
					key={tab.value}
					className={cls.card}
					onClick={clickHandle(tab)}
				>
					{tab.content}
				</div>
			))}
		</div>
	)
})
