import { render, screen } from '@testing-library/react'
import Container from './'
import { navItems } from './constants'

jest.mock('../Sider', () => ({
	__esModule: true,
	default: () => <div data-testid='sider' data-nav-items={JSON.stringify(navItems)} />,
}))

describe('Container', () => {
	const childrenContent = 'This is the main content'

	it('should render the Sider component', () => {
		render(
			<Container>
				<div>{childrenContent}</div>
			</Container>
		)

		const sider = screen.getByTestId('sider')
		expect(sider).toBeInTheDocument()

		expect(sider).toHaveAttribute('data-nav-items', JSON.stringify(navItems))
	})

	it('should render the main content with children', () => {
		render(
			<Container>
				<div>{childrenContent}</div>
			</Container>
		)

		const main = screen.getByRole('main')
		expect(main).toBeInTheDocument()

		expect(main).toHaveTextContent(childrenContent)
	})
})
