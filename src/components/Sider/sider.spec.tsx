import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from '@/store/sidebarSlice'
import Sider from './'
import { usePathname } from 'next/navigation'

jest.mock('../NavItemLink', () => ({
	__esModule: true,
	default: ({ href, label, active }: any) => (
		<div data-testid='nav-item-link' data-active={active} data-href={href}>
			{label}
		</div>
	),
}))

describe('Sider', () => {
	const navItems = [
		{ label: 'Dashboard', href: '/', icon: jest.fn() },
		{ label: 'Farmers', href: '/farmers', icon: jest.fn() },
	]

	const setupStore = (preloadedState = {}) =>
		configureStore({
			reducer: { sidebar: sidebarReducer },
			preloadedState,
		})

	beforeEach(() => {
		;(usePathname as jest.Mock).mockReturnValue('/')
	})

	it('should render correctly with all nav items', () => {
		const store = setupStore()

		render(
			<Provider store={store}>
				<Sider navItems={navItems} />
			</Provider>
		)

		expect(screen.getAllByTestId('nav-item-link')).toHaveLength(navItems.length)
		navItems.forEach((item) => {
			expect(screen.getByText(item.label)).toBeInTheDocument()
		})
	})

	it('should toggle the sidebar when the toggle button is clicked', () => {
		const store = setupStore({ sidebar: { isOpen: false } })

		render(
			<Provider store={store}>
				<Sider navItems={navItems} />
			</Provider>
		)

		const toggleButton = screen.getByRole('button', { name: 'Toggle Menu' })

		expect(screen.getByRole('complementary')).toHaveClass('-translate-x-full')

		fireEvent.click(toggleButton)
		expect(store.getState().sidebar.isOpen).toBe(true)

		fireEvent.click(toggleButton)
		expect(store.getState().sidebar.isOpen).toBe(false)
	})

	it('should close the sidebar when the backdrop is clicked', () => {
		const store = setupStore({ sidebar: { isOpen: true } })

		render(
			<Provider store={store}>
				<Sider navItems={navItems} />
			</Provider>
		)

		const backdrop = screen.getByRole('button', { name: 'Toggle Menu' })

		expect(screen.getByRole('complementary')).toHaveClass('translate-x-0')

		fireEvent.click(backdrop)
		expect(store.getState().sidebar.isOpen).toBe(false)
	})
})
