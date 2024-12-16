import { CheckboxProps } from './types'

const Checkbox = ({ name, label, error, ...rest }: CheckboxProps) => {
	return (
		<div className='mb-4'>
			<div className='flex items-start'>
				<input
					id={name}
					name={name}
					type='checkbox'
					className='w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
					{...rest}
				/>
				{label && (
					<label
						htmlFor={name}
						className='ml-2 text-sm font-medium text-gray-700 dark:text-gray-300'
					>
						{label}
					</label>
				)}
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

export default Checkbox
