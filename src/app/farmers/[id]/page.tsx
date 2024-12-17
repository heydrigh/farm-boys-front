import EditFarmerClient from './client'
import { findProducerById } from '@/services/producerService'
import { EditFarmerProps } from './types'

export default async function EditFarmer({ params }: EditFarmerProps) {
	const id = await params.id

	const producer = await findProducerById(id)

	return <EditFarmerClient producer={producer} />
}
