export interface User {
	id: number
	name: string
	farm: string
	city: string
	state: string
}

export interface TableAction {
	icon: React.ComponentType<{ size?: number }>
	onClick: (user: User) => void
}

export interface UserTableProps {
	data: User[]
	actions?: TableAction[]
}
