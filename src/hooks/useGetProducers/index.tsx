import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import type { Producer } from '@/generated/models'
import { AxiosError } from 'axios'
import { findAllProducers } from '@/services/producerService'
import { PRODUCERS_QUERY_KEY } from '@/utils/constants'

export const useGetProducers = (options?: UseQueryOptions<Producer[], AxiosError>) => {
	return useQuery<Producer[], AxiosError>({
		queryKey: PRODUCERS_QUERY_KEY,
		queryFn: findAllProducers,
		...options,
	})
}
