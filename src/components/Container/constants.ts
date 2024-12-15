import { NavItem } from '../Sider/types'
import { FiHome } from 'react-icons/fi'
import { SlPeople } from 'react-icons/sl'

export const navItems: NavItem[] = [
	{ label: 'Dashboard', href: '/', icon: FiHome },
	{ label: 'Produtores', href: '/farmers', icon: SlPeople },
]
