'use client'

import { usePathname } from 'next/navigation'
import { SiderProps } from './types'
import { FaBars } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import NavItemLink from '../NavItemLink'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { closeSidebar, toggleSidebar } from '@/store/sidebarSlice'

const Sider = ({ navItems }: SiderProps) => {
	const pathname = usePathname()
	const dispatch = useAppDispatch()
	const isOpen = useAppSelector(({ sidebar }) => sidebar.isOpen)

	const handleToggleSidebar = () => {
		dispatch(toggleSidebar())
	}

	const handleCloseSidebar = () => {
		dispatch(closeSidebar())
	}

	return (
		<>
			<div className='flex flex-col h-screen bg-gray-800 text-white md:hidden'>
				<div className='flex justify-end items-center h-16 px-4'>
					<h1 className='hidden md:block text-xl font-bold'>Farm boys</h1>
					<button onClick={handleToggleSidebar} aria-label='Toggle Menu'>
						<FaBars className='text-2xl' />
					</button>
				</div>
			</div>

			{isOpen && (
				<div
					className='fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden'
					onClick={handleCloseSidebar}
				/>
			)}

			<aside
				className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 text-white transform ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				} transition-transform md:relative md:translate-x-0`}
			>
				<div className='flex items-center justify-between h-16 px-4 bg-gray-900 md:justify-center'>
					<h1 className='text-xl font-bold'>Farm boys</h1>
					<button
						onClick={handleCloseSidebar}
						className='text-2xl md:hidden'
						aria-label='Close Menu'
					>
						<IoMdClose />
					</button>
				</div>

				<nav className='flex-1 overflow-y-auto'>
					<ul className='mt-4 space-y-2'>
						{navItems.map((item) => (
							<li key={item.href}>
								<NavItemLink
									href={item.href}
									icon={item.icon}
									label={item.label}
									onClick={handleCloseSidebar}
									active={pathname === item.href}
								/>
							</li>
						))}
					</ul>
				</nav>
			</aside>
		</>
	)
}

export default Sider
