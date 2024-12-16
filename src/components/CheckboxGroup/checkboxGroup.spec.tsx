import { render, screen, fireEvent } from '@testing-library/react'
import CheckboxGroup from './'

describe('CheckboxGroup Component', () => {
	const mockOnChange = jest.fn()
	const options = [
		{ label: 'Soja', value: 'soja' },
		{ label: 'Milho', value: 'milho' },
		{ label: 'Algodão', value: 'algodao' },
	]

	it('should render all checkboxes with labels', () => {
		render(
			<CheckboxGroup
				label='Culturas Plantadas'
				options={options}
				selectedValues={[]}
				onChange={mockOnChange}
			/>
		)

		options.forEach((option) => {
			expect(screen.getByLabelText(option.label)).toBeInTheDocument()
		})
	})

	it('should call onChange with updated values when a checkbox is clicked', () => {
		render(
			<CheckboxGroup
				label='Culturas Plantadas'
				options={options}
				selectedValues={['soja']}
				onChange={mockOnChange}
			/>
		)

		const milhoCheckbox = screen.getByLabelText('Milho')
		fireEvent.click(milhoCheckbox)

		expect(mockOnChange).toHaveBeenCalledWith(['soja', 'milho'])
	})

	it('should deselect a checkbox and update values', () => {
		render(
			<CheckboxGroup
				label='Culturas Plantadas'
				options={options}
				selectedValues={['soja', 'milho']}
				onChange={mockOnChange}
			/>
		)

		const sojaCheckbox = screen.getByLabelText('Soja')
		fireEvent.click(sojaCheckbox)

		expect(mockOnChange).toHaveBeenCalledWith(['milho'])
	})

	it('should display an error message when provided', () => {
		render(
			<CheckboxGroup
				label='Culturas Plantadas'
				options={options}
				selectedValues={[]}
				onChange={mockOnChange}
				error='Selecione pelo menos uma cultura.'
			/>
		)

		expect(screen.getByText('Selecione pelo menos uma cultura.')).toBeInTheDocument()
	})
})
