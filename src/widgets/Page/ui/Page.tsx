import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Page.module.scss"
import { MutableRefObject, ReactNode, memo, useRef } from "react"

export interface PageProps {
	className?: string
	children: ReactNode
	onScrollEnd?: () => void
}

export const Page = memo((props: PageProps) => {
	const { className, children, onScrollEnd } = props
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

	return (
		<section
			ref={wrapperRef}
			className={classNames(cls.PageWrapper, {}, [className])}
		>
			{children}
			{onScrollEnd ? (
				<div
					ref={triggerRef}
					className={cls.trigger}
				/>
			) : null}
		</section>
	)
})
