import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import {
	getFarmsByCrop,
	getFarmsByState,
	getLandUseDistribution,
	getTotalFarmArea,
	getTotalFarms,
} from '@/services/dasboardService'
import type {
	FarmsByCropResponse,
	FarmsByStateResponse,
	LandUseDistributionResponse,
	TotalFarmAreaResponse,
	TotalFarmsResponse,
} from '@/generated/models'
import { DASHBOARD_QUERY_KEY } from '@/utils/constants'

export const useGetFarmsByCrop = (options?: UseQueryOptions<FarmsByCropResponse[], AxiosError>) => {
	return useQuery<FarmsByCropResponse[], AxiosError>({
		queryKey: DASHBOARD_QUERY_KEY.FARMS_BY_CROP,
		queryFn: getFarmsByCrop,
		...options,
	})
}

export const useGetFarmsByState = (
	options?: UseQueryOptions<FarmsByStateResponse[], AxiosError>
) => {
	return useQuery<FarmsByStateResponse[], AxiosError>({
		queryKey: DASHBOARD_QUERY_KEY.FARMS_BY_STATE,
		queryFn: getFarmsByState,
		...options,
	})
}

export const useGetLandUseDistribution = (
	options?: UseQueryOptions<LandUseDistributionResponse, AxiosError>
) => {
	return useQuery<LandUseDistributionResponse, AxiosError>({
		queryKey: DASHBOARD_QUERY_KEY.LAND_USE_DISTRIBUTION,
		queryFn: getLandUseDistribution,
		...options,
	})
}

export const useGetTotalFarmArea = (
	options?: UseQueryOptions<TotalFarmAreaResponse, AxiosError>
) => {
	return useQuery<TotalFarmAreaResponse, AxiosError>({
		queryKey: DASHBOARD_QUERY_KEY.TOTAL_FARM_AREA,
		queryFn: getTotalFarmArea,
		...options,
	})
}

export const useGetTotalFarms = (options?: UseQueryOptions<TotalFarmsResponse, AxiosError>) => {
	return useQuery<TotalFarmsResponse, AxiosError>({
		queryKey: DASHBOARD_QUERY_KEY.TOTAL_FARMS,
		queryFn: getTotalFarms,
		...options,
	})
}
