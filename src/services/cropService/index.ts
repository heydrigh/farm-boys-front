import { Configuration, CropsApi } from '@/generated'
import apiClient from '../apiClient'
import type { Crop } from '@/generated/models'

const configuration = new Configuration({
	basePath: apiClient.defaults.baseURL,
})

const cropsApi = new CropsApi(configuration)

export const findAllCrops = async (): Promise<Crop[]> => {
	try {
		return await cropsApi.cropsControllerFindAll()
	} catch (error) {
		console.error('Error fetching crops:', error)
		throw error
	}
}

export default {
	findAllCrops,
}
