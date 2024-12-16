import { SelectProps } from './types'

const Select = ({ name, label, error, options, ...rest }: SelectProps) => {
	return (
		<div className=''>
			{label && (
				<label
					htmlFor={name}
					className='text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block'
				>
					{label}
				</label>
			)}

			<select
				id={name}
				name={name}
				className={`block w-full px-3 py-2 text-gray-700 border rounded-md bg-white focus:outline-none ${
					error
						? 'border-red-500 focus:ring-red-500'
						: 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
				} transition-all duration-150`}
				{...rest}
			>
				<option value='' disabled>
					Selecione uma opção
				</option>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>

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

export default Select
