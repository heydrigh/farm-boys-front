'use client'
import UserTable from '@/components/UserTable'
import { User } from '@/components/UserTable/types'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'

export default function Farmers() {
	const users: User[] = [
		{ id: 1, name: 'João Silva', farm: 'Fazenda Boa Vista', city: 'Ribeirão Preto', state: 'SP' },
		{ id: 2, name: 'Maria Santos', farm: 'Sítio Esperança', city: 'Uberaba', state: 'MG' },
		{ id: 3, name: 'Carlos Oliveira', farm: 'Rancho Alegre', city: 'Londrina', state: 'PR' },
	]

	const handleEdit = (user: User) => {
		console.log('Edit user:', user)
	}

	const handleDelete = (user: User) => {
		console.log('Delete user:', user.id)
	}

	const actions = [
		{ icon: FiEdit2, onClick: handleEdit },
		{ icon: FiTrash2, onClick: handleDelete },
	]

	return (
		<div className='flex flex-col w-full p-6'>
			<h1 className='font-bold text-lg md:text-3xl mb-6'>Produtores Rurais</h1>
			<UserTable data={users} actions={actions} />
		</div>
	)
}
