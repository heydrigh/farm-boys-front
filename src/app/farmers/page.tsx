'use client'

import UserTable from '@/components/UserTable'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'
import Loader from '@/components/Loader'
import { Producer } from '@/generated'
import { useGetProducers } from '@/hooks/useGetProducers'
import { useDeleteProducer } from '@/hooks/useDeleteProducer'
import { useQueryClient } from '@tanstack/react-query'
import { PRODUCERS_QUERY_KEY } from '@/utils/constants'
import { toast } from 'react-toastify'

export default function Farmers() {
	const router = useRouter()
	const queryClient = useQueryClient()
	const { data: producers, isLoading } = useGetProducers()
	const { mutate: deleteProducer } = useDeleteProducer({
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: PRODUCERS_QUERY_KEY })
			toast.success('Produtor deletado com sucesso')
		},
		onError: () => {
			toast.error('Falha ao deletar produtor')
		},
	})

	const handleEdit = (producer: Producer) => {
		router.push(`/farmers/${producer.id}`)
	}

	const handleDelete = (producer: Producer) => {
		deleteProducer({ id: producer.id })
	}

	const actions = [
		{ icon: FiEdit2, onClick: handleEdit },
		{ icon: FiTrash2, onClick: handleDelete },
	]

	if (isLoading) {
		return <Loader />
	}

	return (
		<div className='flex flex-col w-full p-6'>
			<h1 className='font-bold text-lg md:text-3xl mb-6'>Produtores Rurais</h1>

			<div className='w-full flex justify-end'>
				<Link
					className='bg-gray-900 mb-3 hover:bg-gray-500 p-4 rounded text-white'
					href='/farmers/new'
				>
					Cadastrar novo produtor
				</Link>
			</div>

			{producers && <UserTable data={producers} actions={actions} />}
		</div>
	)
}
