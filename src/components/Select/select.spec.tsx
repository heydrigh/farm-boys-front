import { render, screen, fireEvent } from '@testing-library/react'
import Select from './'

describe('Select Component', () => {
	const options = [
		{ label: 'São Paulo', value: 'SP' },
		{ label: 'Minas Gerais', value: 'MG' },
		{ label: 'Paraná', value: 'PR' },
	]

	const defaultProps = {
		name: 'state',
		label: 'Estado',
		options: options,
		onChange: jest.fn(),
	}

	it('should render the select input with a label', () => {
		render(<Select {...defaultProps} />)

		expect(screen.getByLabelText('Estado')).toBeInTheDocument()
	})

	it('should display the correct number of options', () => {
		render(<Select {...defaultProps} />)

		const select = screen.getByRole('combobox')
		expect(select).toBeInTheDocument()
		expect(select.children).toHaveLength(4)
	})

	it('should call onChange when an option is selected', () => {
		const handleChange = jest.fn()
		render(<Select {...defaultProps} onChange={handleChange} />)

		const select = screen.getByRole('combobox')

		fireEvent.change(select, { target: { value: 'SP' } })

		expect(handleChange).toHaveBeenCalledTimes(1)
		expect(handleChange).toHaveBeenCalledWith(expect.any(Object))
		expect(select).toHaveValue('SP')
	})

	it('should display an error message when provided', () => {
		const error = 'Campo obrigatório'
		render(<Select {...defaultProps} error={error} />)

		expect(screen.getByText(error)).toBeInTheDocument()
		expect(screen.getByRole('alert')).toHaveTextContent(error)
	})

	it('should have the correct default placeholder', () => {
		render(<Select {...defaultProps} />)

		expect(screen.getByRole('option', { name: 'Selecione uma opção' })).toBeInTheDocument()
		expect(screen.getByRole('option', { name: 'Selecione uma opção' })).toBeDisabled()
	})
})
