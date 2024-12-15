import { IconType } from 'react-icons'

export interface NavItemLinkProps {
	href: string
	icon: IconType
	label: string
	onClick?: () => void
	active: boolean
}
