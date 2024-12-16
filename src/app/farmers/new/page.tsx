'use client'

import Input from '@/components/Input'

export default function NewFarmer() {
	return (
		<div className='flex flex-col w-full p-6'>
			<h1 className='font-bold text-lg md:text-3xl mb-6'>Novo produtor</h1>
			<form>
				<Input label='Nome do produtor' />
			</form>
		</div>
	)
}
