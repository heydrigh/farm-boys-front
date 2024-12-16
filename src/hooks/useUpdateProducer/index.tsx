import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import type { Producer, UpdateProducerDto } from '@/generated/models'
import { updateProducer } from '@/services/producerService'

export const useUpdateProducer = (
	options?: UseMutationOptions<
		Producer,
		AxiosError,
		{ id: string; updateProducerDto: UpdateProducerDto }
	>
) => {
	return useMutation<Producer, AxiosError, { id: string; updateProducerDto: UpdateProducerDto }>({
		mutationFn: ({ id, updateProducerDto }) => updateProducer(id, updateProducerDto),
		...options,
	})
}
