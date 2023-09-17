import { ChangeEvent, useMemo } from "react"
import { classNames, Mods } from "shared/lib/classNames/classNames"
import cls from "./Select.module.scss"

export interface SelectOption<T extends string> {
	value: T
	content: string
	disabled?: boolean
}

interface SelectProps<T extends string> {
	className?: string
	label?: string
	options?: SelectOption<T>[]
	value?: T
	onChange?: (value: T) => void
	readonly?: boolean
}

export const Select = <T extends string>(props: SelectProps<T>) => {
	const { className, label, options, onChange, value, readonly } = props

	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		if (onChange) {
			onChange(e.target.value as T)
		}
	}

	const optionsList = useMemo(
		() =>
			options?.map((opt) => (
				<option
					className={cls.selectOption}
					value={opt.value}
					key={opt.value}
				>
					{opt.content}
				</option>
			)),
		[options],
	)

	const mods: Mods = {}

	return (
		<div className={classNames(cls.Wrapper, mods, [className])}>
			<select
				disabled={readonly}
				className={cls.selectOptions}
				value={value}
				onChange={onChangeHandler}
			>
				{optionsList}
			</select>
		</div>
	)
}
