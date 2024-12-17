'use client'

import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import MaskedInput from '@/components/InputMasked'
import Input from '@/components/Input'
import CheckboxGroup from '@/components/CheckboxGroup'
import Select from '@/components/Select'
import Loader from '@/components/Loader'
import { FarmerFormValues, farmerSchema } from '@/schemas/FarmerSchema'
import { brazilianStates, cpfCnpjMasks } from '../new/constants'
import { useGetCrops } from '@/hooks/useGetCrops'
import { useUpdateProducer } from '@/hooks/useUpdateProducer'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { PRODUCERS_QUERY_KEY } from '@/utils/constants'
import { useQueryClient } from '@tanstack/react-query'
import { EditFarmerClientProps } from './types'
import { UpdateProducerDto } from '@/generated'

export default function EditFarmerClient({ producer }: EditFarmerClientProps) {
	const router = useRouter()
	const queryClient = useQueryClient()
	const {
		control,
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<FarmerFormValues>({
		resolver: zodResolver(farmerSchema),
		defaultValues: {
			cpfCnpj: producer.cpfCnpj || '',
			farmerName: producer.name || '',
			farmName: producer.farm.name || '',
			city: producer.farm.city || '',
			state: producer.farm.state || '',
			totalArea: +producer.farm.totalArea || 0,
			arableArea: +producer.farm.agriculturalArea || 0,
			vegetationArea: +producer.farm.vegetationArea || 0,
			crops: producer.farm.crops.map((crop) => crop.id) || [],
		},
	})

	const { data: crops, isLoading: loadingCrops } = useGetCrops()
	const { mutate: updateProducer, isPending: updatingProducer } = useUpdateProducer({
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: PRODUCERS_QUERY_KEY })
			router.push('/farmers')
			toast.success('Produtor atualizado com sucesso!')
		},
		onError: () => {
			toast.error('Falha ao atualizar produtor, tente novamente mais tarde')
		},
	})

	const cropOptions =
		crops?.map((crop) => ({
			label: crop.name,
			value: crop.id,
		})) || []

	const onSubmit = (data: FarmerFormValues) => {
		updateProducer({
			id: producer.id,
			updateProducerDto: {
				cpfCnpj: data.cpfCnpj.replace(/\D/g, ''),
				name: data.farmerName,
				farm: {
					name: data.farmName,
					city: data.city,
					state: data.state,
					totalArea: data.totalArea,
					agriculturalArea: data.arableArea,
					vegetationArea: data.vegetationArea,
					cropIds: data.crops,
				},
			},
		})
	}

	if (loadingCrops) return <Loader />

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
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
			<Input
				{...register('farmerName')}
				label='Nome do Produtor'
				error={errors.farmerName?.message}
			/>
			<Input {...register('farmName')} label='Nome da Fazenda' error={errors.farmName?.message} />
			<Input {...register('city')} label='Cidade' error={errors.city?.message} />
			<Controller
				name='state'
				control={control}
				render={({ field }) => <Select {...field} options={brazilianStates} label='Estado' />}
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
				className='w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
			>
				{updatingProducer ? 'Atualizando...' : 'Atualizar'}
			</button>
		</form>
	)
}
