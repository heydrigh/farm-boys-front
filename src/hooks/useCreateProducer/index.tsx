import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import type { Producer, CreateProducerDto } from '@/generated/models'
import { createProducer } from '@/services/producerService'

export const useCreateProducer = (
	options?: UseMutationOptions<Producer, AxiosError, { createProducerDto: CreateProducerDto }>
) => {
	return useMutation<Producer, AxiosError, { createProducerDto: CreateProducerDto }>({
		mutationFn: ({ createProducerDto }) => createProducer(createProducerDto),
		...options,
	})
}
