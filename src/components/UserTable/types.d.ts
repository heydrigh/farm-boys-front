import { Producer } from '@/generated'

export interface TableAction {
	icon: React.ComponentType<{ size?: number }>
	onClick: (user: User) => void
}

export interface UserTableProps {
	data: Producer[]
	actions?: TableAction[]
}
