'use client'
import Card from '@/components/Card'
import ChartCard from '@/components/ChartCard'

export default function Home() {
	const stateDistributionData = [
		{ id: 'São Paulo', value: 33 },
		{ id: 'Minas Gerais', value: 20 },
		{ id: 'Paraná', value: 27 },
		{ id: 'Mato Grosso', value: 20 },
	]

	const cultureDistributionData = [
		{ id: 'Soja', value: 27 },
		{ id: 'Milho', value: 20 },
		{ id: 'Algodão', value: 13 },
		{ id: 'Café', value: 10 },
		{ id: 'Cana de Açúcar', value: 30 },
	]

	const landUseData = [
		{ id: 'Área Agricultável', value: 70 },
		{ id: 'Área de Vegetação', value: 30 },
	]
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

				<div className='col-span-12 md:col-span-4'>
					<ChartCard title='Distribuição por Estado' data={stateDistributionData} />
				</div>
				<div className='col-span-12 md:col-span-4'>
					<ChartCard title='Distribuição por Cultura' data={cultureDistributionData} />
				</div>
				<div className='col-span-12 md:col-span-4'>
					<ChartCard title='Uso do Solo' data={landUseData} />
				</div>
			</div>
		</div>
	)
}
