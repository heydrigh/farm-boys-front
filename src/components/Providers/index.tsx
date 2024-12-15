'use client'
import { AppStore, makeStore } from '@/store'
import { ReactNode, useRef } from 'react'
import { Provider } from 'react-redux'

export function Providers({ children }: { children: ReactNode }) {
	const storeRef = useRef<AppStore>(undefined)
	if (!storeRef.current) {
		storeRef.current = makeStore()
	}

	return <Provider store={storeRef.current}>{children}</Provider>
}
