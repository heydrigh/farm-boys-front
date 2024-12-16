import { render, screen, fireEvent } from '@testing-library/react'
import UserTable from './'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'

describe('UserTable', () => {
	const mockData = [
		{
			id: 1,
			name: 'João Silva',
			farm: 'Fazenda Boa Vista',
			city: 'Ribeirão Preto',
			state: 'SP',
		},
		{
			id: 2,
			name: 'Maria Santos',
			farm: 'Sítio Esperança',
			city: 'Uberaba',
			state: 'MG',
		},
	]

	const mockEdit = jest.fn()
	const mockDelete = jest.fn()

	const actions = [
		{ icon: FiEdit2, onClick: mockEdit },
		{ icon: FiTrash2, onClick: mockDelete },
	]

	it('should render table headers correctly', () => {
		render(<UserTable data={mockData} actions={actions} />)

		expect(screen.getByText('Nome')).toBeInTheDocument()
		expect(screen.getByText('Fazenda')).toBeInTheDocument()
		expect(screen.getByText('Cidade')).toBeInTheDocument()
		expect(screen.getByText('Estado')).toBeInTheDocument()
		expect(screen.getByText('Ações')).toBeInTheDocument()
	})

	it('should render table rows with user data', () => {
		render(<UserTable data={mockData} actions={actions} />)

		expect(screen.getByText('João Silva')).toBeInTheDocument()
		expect(screen.getByText('Fazenda Boa Vista')).toBeInTheDocument()
		expect(screen.getByText('Ribeirão Preto')).toBeInTheDocument()
		expect(screen.getByText('SP')).toBeInTheDocument()

		expect(screen.getByText('Maria Santos')).toBeInTheDocument()
		expect(screen.getByText('Sítio Esperança')).toBeInTheDocument()
		expect(screen.getByText('Uberaba')).toBeInTheDocument()
		expect(screen.getByText('MG')).toBeInTheDocument()
	})

	it('should render action buttons and handle callbacks', () => {
		render(<UserTable data={mockData} actions={actions} />)

		const editButtons = screen.getAllByLabelText('action-0')
		const deleteButtons = screen.getAllByLabelText('action-1')

		expect(editButtons).toHaveLength(2)
		expect(deleteButtons).toHaveLength(2)

		fireEvent.click(editButtons[0])
		expect(mockEdit).toHaveBeenCalledWith(mockData[0])

		fireEvent.click(deleteButtons[1])
		expect(mockDelete).toHaveBeenCalledWith(mockData[1])
	})

	it('should render table without actions when actions prop is not provided', () => {
		render(<UserTable data={mockData} />)

		expect(screen.queryByText('Ações')).not.toBeInTheDocument()

		const actionButtons = screen.queryAllByRole('button')
		expect(actionButtons).toHaveLength(0)
	})
})
