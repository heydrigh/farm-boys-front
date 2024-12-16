import { Configuration, ProducersApi } from '@/generated'
import apiClient from '../apiClient'
import type { Producer, CreateProducerDto, UpdateProducerDto } from '@/generated/models'

const configuration = new Configuration({
	basePath: apiClient.defaults.baseURL,
})

const producersApi = new ProducersApi(configuration)

export const findAllProducers = async (): Promise<Producer[]> => {
	try {
		return await producersApi.producersControllerFindAll()
	} catch (error) {
		console.error('Error fetching producers:', error)
		throw error
	}
}

export const findProducerById = async (id: string): Promise<Producer> => {
	try {
		return await producersApi.producersControllerFindOne({ id })
	} catch (error) {
		console.error(`Error fetching producer with ID ${id}:`, error)
		throw error
	}
}

export const createProducer = async (createProducerDto: CreateProducerDto): Promise<Producer> => {
	try {
		return await producersApi.producersControllerCreate({ createProducerDto })
	} catch (error) {
		console.error('Error creating producer:', error)
		throw error
	}
}

export const updateProducer = async (
	id: string,
	updateProducerDto: UpdateProducerDto
): Promise<Producer> => {
	try {
		return await producersApi.producersControllerUpdate({ id, updateProducerDto })
	} catch (error) {
		console.error(`Error updating producer with ID ${id}:`, error)
		throw error
	}
}

export const deleteProducer = async (id: string): Promise<void> => {
	try {
		await producersApi.producersControllerRemove({ id })
	} catch (error) {
		console.error(`Error deleting producer with ID ${id}:`, error)
		throw error
	}
}

export default {
	findAllProducers,
	findProducerById,
	createProducer,
	updateProducer,
	deleteProducer,
}
