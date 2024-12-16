import { render, screen, fireEvent } from '@testing-library/react'
import Checkbox from './'

describe('Checkbox Component', () => {
	const mockOnChange = jest.fn()

	it('should render the checkbox with a label', () => {
		render(<Checkbox name='test' label='Test Label' />)
		expect(screen.getByLabelText('Test Label')).toBeInTheDocument()
	})

	it('should call onChange when clicked', () => {
		render(<Checkbox name='test' label='Test Label' onChange={mockOnChange} />)
		const checkbox = screen.getByLabelText('Test Label')

		fireEvent.click(checkbox)
		expect(mockOnChange).toHaveBeenCalled()
	})

	it('should render as checked when the checked prop is true', () => {
		render(<Checkbox name='test' label='Test Label' checked={true} />)
		const checkbox = screen.getByLabelText('Test Label')
		expect(checkbox).toBeChecked()
	})

	it('should display an error message when provided', () => {
		render(<Checkbox name='test' label='Test Label' error='Required field' />)
		expect(screen.getByText('Required field')).toBeInTheDocument()
	})
})
