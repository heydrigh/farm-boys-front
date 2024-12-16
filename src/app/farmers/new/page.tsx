'use client'

import Input from '@/components/Input'
import MaskedInput from '@/components/InputMasked'
import CheckboxGroup from '@/components/CheckboxGroup'
import Select from '@/components/Select'
import { useState } from 'react'

export default function NewFarmer() {
	const [value, setValue] = useState('')
	const [selectedState, setSelectedState] = useState('')
	const [selectedCrops, setSelectedCrops] = useState<string[]>([])
	const [error, setError] = useState<string | undefined>()

	const handleAccept = (val: string) => {
		setValue(val)
		console.log('Unmasked value:', val)
	}

	const cpfCnpjMask = [
		{ mask: '000.000.000-00', maxLength: 11 }, // CPF
		{ mask: '00.000.000/0000-00' }, // CNPJ
	]

	const cropOptions = [
		{ label: 'Soja', value: 'soja' },
		{ label: 'Milho', value: 'milho' },
		{ label: 'Algodão', value: 'algodao' },
	]

	const stateOptions = [
		{ label: 'São Paulo', value: 'SP' },
		{ label: 'Minas Gerais', value: 'MG' },
		{ label: 'Paraná', value: 'PR' },
	]

	const handleSubmit = () => {
		if (!selectedState) {
			setError('Selecione um estado.')
		} else {
			setError(undefined)
			console.log('Form Submitted:', { value, selectedState, selectedCrops })
		}
	}

	return (
		<div className='flex flex-col w-full p-6'>
			<h1 className='font-bold text-lg md:text-3xl mb-6'>Novo produtor</h1>
			<form>
				<Input label='Nome do produtor' />
				<MaskedInput
					name='cpfCnpj'
					label='CPF ou CNPJ'
					mask={cpfCnpjMask}
					value={value}
					onAccept={handleAccept}
					placeholder='Digite o CPF ou CNPJ'
				/>
				<Select
					name='state'
					label='Estado'
					options={stateOptions}
					value={selectedState}
					onChange={(e) => setSelectedState(e.target.value)}
					error={error}
				/>
				<CheckboxGroup
					label='Culturas Plantadas'
					options={cropOptions}
					selectedValues={selectedCrops}
					onChange={setSelectedCrops}
				/>
				<button
					type='button'
					onClick={handleSubmit}
					className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'
				>
					Enviar
				</button>
			</form>
		</div>
	)
}
