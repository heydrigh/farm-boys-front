import { IMaskInputProps, IMaskInstance } from 'react-imask'

export interface MaskedInputProps extends Omit<IMaskInputProps, 'onAccept'> {
	name: string
	label?: string
	error?: string
	onAccept: (value: string, mask: IMaskInstance) => void
}
