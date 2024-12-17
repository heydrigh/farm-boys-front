'use client'
import { AppStore, makeStore } from '@/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useRef } from 'react'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

const queryClient = new QueryClient()

export function Providers({ children }: { children: ReactNode }) {
	const storeRef = useRef<AppStore>(undefined)
	if (!storeRef.current) {
		storeRef.current = makeStore()
	}

	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={storeRef.current}>
				<ToastContainer />
				{children}
			</Provider>
		</QueryClientProvider>
	)
}
