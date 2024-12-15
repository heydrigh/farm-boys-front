'use client'

import { ResponsivePie } from '@nivo/pie'
import { ChartCardProps } from './types'

const ChartCard = ({ title, data }: ChartCardProps) => {
	return (
		<div className='border rounded-md shadow-sm p-4 w-full'>
			<h2 className='text-lg font-bold mb-4'>{title}</h2>
			<div className='h-64'>
				<ResponsivePie
					data={data}
					margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
					innerRadius={0.5}
					padAngle={0.7}
					cornerRadius={3}
					activeOuterRadiusOffset={8}
					borderWidth={1}
					borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
					arcLinkLabelsSkipAngle={10}
					arcLinkLabelsTextColor='#333333'
					arcLinkLabelsThickness={2}
					arcLinkLabelsColor={{ from: 'color' }}
					arcLabelsSkipAngle={10}
					arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
				/>
			</div>
		</div>
	)
}

export default ChartCard
