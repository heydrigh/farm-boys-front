'use client'

import Input from '@/components/Input'
import MaskedInput from '@/components/InputMasked'
import { useState } from 'react'

export default function NewFarmer() {
	const [value, setValue] = useState('')

	const handleAccept = (val: string) => {
		setValue(val)
		console.log('Unmasked value:', val)
	}

	const cpfCnpjMask = [
		{
			mask: '000.000.000-00', // CPF format
			maxLength: 11,
		},
		{
			mask: '00.000.000/0000-00', // CNPJ format
		},
	]
	return (
		<div className='flex flex-col w-full p-6'>
			<h1 className='font-bold text-lg md:text-3xl mb-6'>Novo produtor</h1>
			<form>
				<Input label='Nome do produtor' />
				<MaskedInput
					name='currency'
					label='CPF ou CNPJ'
					mask={cpfCnpjMask}
					radix='.'
					value={value}
					onAccept={handleAccept}
					placeholder='Digite o valor'
				/>
			</form>
		</div>
	)
}
