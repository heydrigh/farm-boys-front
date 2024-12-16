import { Configuration, DashboardApi } from '@/generated'
import apiClient from './apiClient'
import type {
	FarmsByCropResponse,
	FarmsByStateResponse,
	LandUseDistributionResponse,
	TotalFarmAreaResponse,
	TotalFarmsResponse,
} from '@/generated/models'

const configuration = new Configuration({
	basePath: apiClient.defaults.baseURL,
})

const dashboardApi = new DashboardApi(configuration)

export const getFarmsByCrop = async (): Promise<FarmsByCropResponse[]> => {
	try {
		return await dashboardApi.dashboardControllerGetFarmsByCrop()
	} catch (error) {
		console.error('Error fetching farms by crop:', error)
		throw error
	}
}

export const getFarmsByState = async (): Promise<FarmsByStateResponse[]> => {
	try {
		return await dashboardApi.dashboardControllerGetFarmsByState()
	} catch (error) {
		console.error('Error fetching farms by state:', error)
		throw error
	}
}

export const getLandUseDistribution = async (): Promise<LandUseDistributionResponse> => {
	try {
		return await dashboardApi.dashboardControllerGetLandUseDistribution()
	} catch (error) {
		console.error('Error fetching land use distribution:', error)
		throw error
	}
}

export const getTotalFarmArea = async (): Promise<TotalFarmAreaResponse> => {
	try {
		return await dashboardApi.dashboardControllerGetTotalFarmArea()
	} catch (error) {
		console.error('Error fetching total farm area:', error)
		throw error
	}
}

export const getTotalFarms = async (): Promise<TotalFarmsResponse> => {
	try {
		return await dashboardApi.dashboardControllerGetTotalFarms()
	} catch (error) {
		console.error('Error fetching total farms:', error)
		throw error
	}
}

export default {
	getFarmsByCrop,
	getFarmsByState,
	getLandUseDistribution,
	getTotalFarmArea,
	getTotalFarms,
}
