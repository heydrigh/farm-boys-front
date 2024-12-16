import { PulseLoader } from 'react-spinners'

const Loader = () => {
	return (
		<div className='flex items-center justify-center h-full w-full'>
			<PulseLoader color='#3b82f6' size={16} />
		</div>
	)
}

export default Loader
