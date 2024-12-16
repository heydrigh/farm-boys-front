import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import type { Crop } from '@/generated/models'
import { AxiosError } from 'axios'
import { findAllCrops } from '@/services/cropService'
import { CROPS_QUERY_KEY } from '@/utils/constants'

export const useGetCrops = (options?: UseQueryOptions<Crop[], AxiosError>) => {
	return useQuery<Crop[], AxiosError>({
		queryKey: CROPS_QUERY_KEY,
		queryFn: findAllCrops,
		...options,
	})
}
