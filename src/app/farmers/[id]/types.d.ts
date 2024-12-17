import { Producer } from '@/generated'

export interface EditFarmerClientProps {
	producer: Producer
}

export interface EditFarmerProps {
	params: Promise<{ id: string }>
}
