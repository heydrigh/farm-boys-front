import axios from 'axios'

const apiClient = axios.create({
	baseURL: process.env.API_BASE_URL || 'http://localhost:3333/api',
})

export default apiClient
