import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import type { Producer } from '@/generated/models'
import { AxiosError } from 'axios'
import { findProducerById } from '@/services/producerService'
import { PRODUCER_QUERY_KEY } from '@/utils/constants'

export const useGetProducerById = (id: string, options?: UseQueryOptions<Producer, AxiosError>) => {
	return useQuery<Producer, AxiosError>({
		queryKey: [PRODUCER_QUERY_KEY, id],
		queryFn: () => findProducerById(id),
		...options,
	})
}
