'use client'

import Card from '@/components/Card'
import ChartCard from '@/components/ChartCard'
import Loader from '@/components/Loader'
import {
	useGetFarmsByState,
	useGetFarmsByCrop,
	useGetLandUseDistribution,
	useGetTotalFarmArea,
	useGetTotalFarms,
} from '@/hooks/useDashboard'

export default function Home() {
	const { data: totalFarms, isLoading: loadingTotalFarms } = useGetTotalFarms()
	const { data: totalFarmArea, isLoading: loadingTotalFarmArea } = useGetTotalFarmArea()

	const { data: farmsByState, isLoading: loadingFarmsByState } = useGetFarmsByState()
	const { data: farmsByCrop, isLoading: loadingFarmsByCrop } = useGetFarmsByCrop()

	const { data: landUse, isLoading: loadingLandUse } = useGetLandUseDistribution()

	const isLoading =
		loadingTotalFarms ||
		loadingTotalFarmArea ||
		loadingFarmsByState ||
		loadingFarmsByCrop ||
		loadingLandUse

	if (isLoading) {
		return <Loader />
	}

	const stateDistributionData =
		farmsByState?.map((state) => ({
			id: state.state,
			value: state.count,
		})) || []

	const cultureDistributionData =
		farmsByCrop?.map((crop) => ({
			id: crop.crop,
			value: crop.count,
		})) || []

	const landUseData = landUse
		? [
				{ id: 'Área Agricultável', value: landUse.agriculturalArea },
				{ id: 'Área de Vegetação', value: landUse.vegetationArea },
		  ]
		: []

	return (
		<div className='flex flex-col w-full p-6'>
			<h1 className='font-bold text-lg md:text-3xl mb-6'>Dashboard</h1>

			<div className='grid grid-cols-12 gap-4'>
				<div className='col-span-12 md:col-span-6'>
					<Card title='Total de Fazendas' value={totalFarms?.totalFarms || 0} />
				</div>
				<div className='col-span-12 md:col-span-6'>
					<Card title='Área Total (hectares)' value={totalFarmArea?.totalFarmArea || '0'} />
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
