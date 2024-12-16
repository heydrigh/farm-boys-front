import { SelectHTMLAttributes } from 'react'

export interface SelectOption {
	label: string
	value: string | number
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	name: string
	label?: string
	error?: string
	options: SelectOption[]
}
