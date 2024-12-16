import { z } from 'zod'

export const farmerSchema = z
	.object({
		cpfCnpj: z
			.string()
			.nonempty('CPF ou CNPJ é obrigatório')
			.refine((val) => val.length === 14 || val.length === 18, 'CPF ou CNPJ inválido'),
		farmerName: z.string().nonempty('Nome do Produtor é obrigatório'),
		farmName: z.string().nonempty('Nome da Fazenda é obrigatório'),
		city: z.string().nonempty('Cidade é obrigatória'),
		state: z.string().nonempty('Estado é obrigatório'),
		totalArea: z
			.number({
				invalid_type_error: 'Área Total deve ser um número',
				required_error: 'Área Total é obrigatória',
			})
			.positive('Área Total deve ser maior que zero'),
		arableArea: z
			.number({
				invalid_type_error: 'Área Agricultável deve ser um número',
				required_error: 'Área Agricultável é obrigatória',
			})
			.positive('Área Agricultável deve ser maior que zero'),
		vegetationArea: z
			.number({
				invalid_type_error: 'Área de Vegetação deve ser um número',
				required_error: 'Área de Vegetação é obrigatória',
			})
			.positive('Área de Vegetação deve ser maior que zero'),
		crops: z.array(z.string()).nonempty('Culturas Plantadas são obrigatórias'),
	})
	.refine((data) => data.arableArea + data.vegetationArea <= data.totalArea, {
		path: ['arableArea'],
		message: 'A soma das Áreas Agricultável e Vegetação não pode ser maior que a Área Total',
	})

export type FarmerFormValues = z.infer<typeof farmerSchema>
