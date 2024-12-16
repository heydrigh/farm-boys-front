import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { deleteProducer } from '@/services/producerService'

export const useDeleteProducer = (
	options?: UseMutationOptions<void, AxiosError, { id: string }>
) => {
	return useMutation<void, AxiosError, { id: string }>({
		mutationFn: ({ id }) => deleteProducer(id),
		...options,
	})
}
