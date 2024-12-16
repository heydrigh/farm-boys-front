import { UserTableProps } from './types'

const UserTable = ({ data, actions }: UserTableProps) => {
	return (
		<div className='overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700'>
			<table className='w-full table-auto bg-white dark:bg-gray-800'>
				<thead className='bg-gray-100 dark:bg-gray-700'>
					<tr>
						<th className='px-6 py-3 text-left text-xs font-medium uppercase text-gray-600 dark:text-gray-300'>
							Nome
						</th>
						<th className='px-6 py-3 text-left text-xs font-medium uppercase text-gray-600 dark:text-gray-300'>
							Fazenda
						</th>
						<th className='px-6 py-3 text-left text-xs font-medium uppercase text-gray-600 dark:text-gray-300'>
							Cidade
						</th>
						<th className='px-6 py-3 text-left text-xs font-medium uppercase text-gray-600 dark:text-gray-300'>
							Estado
						</th>
						{actions && (
							<th className='px-6 py-3 text-center text-xs font-medium uppercase text-gray-600 dark:text-gray-300'>
								Ações
							</th>
						)}
					</tr>
				</thead>
				<tbody>
					{data.map((user) => (
						<tr
							key={user.id}
							className='hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-150'
						>
							<td className='px-6 py-4 text-gray-800 dark:text-gray-300'>{user.name}</td>
							<td className='px-6 py-4 text-gray-800 dark:text-gray-300'>{user.farm}</td>
							<td className='px-6 py-4 text-gray-800 dark:text-gray-300'>{user.city}</td>
							<td className='px-6 py-4 text-gray-800 dark:text-gray-300'>{user.state}</td>
							{actions && (
								<td className='px-6 py-4 flex justify-center gap-4'>
									{actions.map((action, index) => (
										<button
											key={index}
											onClick={() => action.onClick(user)}
											className='text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-all'
											aria-label={`action-${index}`}
										>
											<action.icon size={20} />
										</button>
									))}
								</td>
							)}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default UserTable
