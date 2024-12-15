import Card from '@/components/Card'

export default function Home() {
	return (
		<div className='flex flex-col w-full p-6'>
			<h1 className='font-bold text-lg md:text-3xl mb-6'>Dashboard</h1>

			<div className='grid grid-cols-12 gap-4'>
				<div className='col-span-12 md:col-span-6'>
					<Card title='Total de Fazendas' value={150} />
				</div>
				<div className='col-span-12 md:col-span-6'>
					<Card title='Área Total (hectares)' value='50,000' />
				</div>
			</div>
		</div>
	)
}
