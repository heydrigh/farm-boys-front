'use client'

import React from 'react'
import Checkbox from '@/components/Checkbox'
import { CheckboxGroupProps } from './types'

const CheckboxGroup = ({
	options,
	selectedValues,
	onChange,
	label,
	error,
	checkboxProps,
}: CheckboxGroupProps) => {
	const handleChange = (value: string) => {
		const newValues = selectedValues.includes(value)
			? selectedValues.filter((item) => item !== value)
			: [...selectedValues, value]

		onChange(newValues)
	}

	return (
		<div className='mb-4'>
			{label && <h2 className='text-sm font-medium text-gray-700 mb-2'>{label}</h2>}

			<div className='flex flex-col gap-1'>
				{options.map((option) => (
					<Checkbox
						key={option.value}
						id={option.value}
						name={option.value}
						label={option.label}
						checked={selectedValues.includes(option.value)}
						onChange={() => handleChange(option.value)}
						{...checkboxProps}
					/>
				))}
			</div>

			{error && (
				<div className='mt-2'>
					<span className='text-xs text-red-500' role='alert'>
						{error}
					</span>
				</div>
			)}
		</div>
	)
}

export default CheckboxGroup
