'use client'
import Sider from '../Sider'
import { navItems } from './constants'
import { ContainerProps } from './types'

const Container = ({ children }: ContainerProps) => {
	return (
		<div className='flex h-screen'>
			<Sider navItems={navItems} />
			<main className='flex-1 bg-gray-100 p-4 overflow-y-auto'>{children}</main>
		</div>
	)
}

export default Container
