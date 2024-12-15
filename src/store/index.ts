import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './sidebarSlice'

export const makeStore = () => {
	return configureStore({
		reducer: { sidebar: sidebarReducer },
	})
}

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export type AppStore = ReturnType<typeof makeStore>
