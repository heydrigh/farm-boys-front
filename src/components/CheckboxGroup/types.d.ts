import { CheckboxProps } from '@/components/Checkbox/types'

export interface CheckboxOption {
	label: string
	value: string
}

export interface CheckboxGroupProps {
	options: CheckboxOption[]
	selectedValues: string[]
	onChange: (selectedValues: string[]) => void
	label?: string
	error?: string
	checkboxProps?: Omit<CheckboxProps, 'checked' | 'onChange'>
}
