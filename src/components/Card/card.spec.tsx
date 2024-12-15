import { render, screen } from '@testing-library/react'
import Card from './'
import { CardProps } from './types'

describe('Card Component', () => {
	const defaultProps: CardProps = {
		title: 'Test Title',
		value: '123',
	}

	it('should render correctly with title and value', () => {
		render(<Card {...defaultProps} />)

		const titleElement = screen.getByText(defaultProps.title)
		expect(titleElement).toBeInTheDocument()

		const valueElement = screen.getByText(defaultProps.value)
		expect(valueElement).toBeInTheDocument()
	})

	it('should render the correct styles', () => {
		render(<Card {...defaultProps} />)

		const cardElement = screen.getByRole('article')
		expect(cardElement).toHaveClass('border')
		expect(cardElement).toHaveClass('rounded-md')
		expect(cardElement).toHaveClass('shadow-sm')
		expect(cardElement).toHaveClass('p-4')
	})

	it('should render numeric values correctly', () => {
		const numericProps: CardProps = {
			title: 'Total',
			value: 50000,
		}

		render(<Card {...numericProps} />)

		const valueElement = screen.getByText('50000')
		expect(valueElement).toBeInTheDocument()
	})
})
