import { CardProps } from './types'

const Card = ({ title, value }: CardProps) => {
	return (
		<div className='border rounded-md shadow-sm p-4' role='article'>
			<p className='text-gray-700 font-semibold'>{title}</p>
			<p className='text-3xl font-bold mt-2'>{value}</p>
		</div>
	)
}

export default Card
