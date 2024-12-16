'use client'

import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import MaskedInput from '@/components/InputMasked'
import Input from '@/components/Input'
import CheckboxGroup from '@/components/CheckboxGroup'
import Select from '@/components/Select'
import { FarmerFormValues, farmerSchema } from '@/schemas/FarmerSchema'
import { useGetCrops } from '@/hooks/useGetCrops'
import Loader from '@/components/Loader'
import { brazilianStates, cpfCnpjMasks } from '../new/constants'

export default function EditFarmer() {
	const {
		control,
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<FarmerFormValues>({
		resolver: zodResolver(farmerSchema),
		defaultValues: {
			cpfCnpj: '',
			farmerName: '',
			farmName: '',
			city: '',
			state: '',
			totalArea: 0,
			arableArea: 0,
			vegetationArea: 0,
			crops: [],
		},
	})

	const { data: crops, isLoading: loadingCrops } = useGetCrops()

	const cropOptions =
		crops?.map((crop) => ({
			label: crop.name,
			value: crop.id,
		})) || []

	const onSubmit = (data: FarmerFormValues) => {
		console.log('Form submitted:', data)
	}

	if (loadingCrops) {
		return <Loader />
	}

	return (
		<div className='flex flex-col w-full p-6'>
			<h1 className='font-bold text-lg md:text-3xl mb-6'>Cadastro de Produtor</h1>
			<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
				{/* CPF/CNPJ */}
				<Controller
					name='cpfCnpj'
					control={control}
					render={({ field }) => (
						<MaskedInput
							{...field}
							name='cpfCnpj'
							label='CPF ou CNPJ'
							mask={cpfCnpjMasks}
							placeholder='Digite o CPF ou CNPJ'
							error={errors.cpfCnpj?.message}
						/>
					)}
				/>

				{/* Farmer Name */}
				<Input
					{...register('farmerName')}
					label='Nome do Produtor'
					placeholder='Digite o nome'
					error={errors.farmerName?.message}
				/>

				{/* Farm Name */}
				<Input
					{...register('farmName')}
					label='Nome da Fazenda'
					placeholder='Digite o nome da fazenda'
					error={errors.farmName?.message}
				/>

				{/* City */}
				<Input
					{...register('city')}
					label='Cidade'
					placeholder='Digite a cidade'
					error={errors.city?.message}
				/>

				{/* State */}
				<Controller
					name='state'
					control={control}
					render={({ field }) => (
						<Select
							{...field}
							options={brazilianStates}
							label='Estado'
							error={errors.state?.message}
						/>
					)}
				/>

				{/* Total Area */}
				<Input
					{...register('totalArea', { valueAsNumber: true })}
					label='Área Total (hectares)'
					placeholder='Digite a área total'
					error={errors.totalArea?.message}
					type='number'
				/>

				{/* Arable Area */}
				<Input
					{...register('arableArea', { valueAsNumber: true })}
					label='Área Agricultável (hectares)'
					placeholder='Digite a área agricultável'
					error={errors.arableArea?.message}
					type='number'
				/>

				{/* Vegetation Area */}
				<Input
					{...register('vegetationArea', { valueAsNumber: true })}
					label='Área de Vegetação (hectares)'
					placeholder='Digite a área de vegetação'
					error={errors.vegetationArea?.message}
					type='number'
				/>

				{/* Crops */}
				<Controller
					name='crops'
					control={control}
					render={({ field }) => (
						<CheckboxGroup
							{...field}
							label='Culturas Plantadas'
							options={cropOptions}
							selectedValues={field.value}
							onChange={(selectedValues) => field.onChange(selectedValues)}
							error={errors.crops?.message}
						/>
					)}
				/>

				<button
					type='submit'
					className='w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition'
				>
					Enviar
				</button>
			</form>
		</div>
	)
}
