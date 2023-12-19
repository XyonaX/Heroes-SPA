import { fireEvent, render, screen } from '@testing-library/react';
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { Navbar } from '../../../src/ui/components/Navbar';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en <Navbar/>', () => {
	const contexValue = {
		logged: true,
		user: {
			name: 'Eze',
		},
		logout: jest.fn(),
	};

	beforeEach(() => jest.clearAllMocks());

	test('debe de mostrar el nombre del usuario logeado', () => {
		render(
			<AuthContext.Provider value={contexValue}>
				<MemoryRouter>
					<Navbar />
				</MemoryRouter>
			</AuthContext.Provider>
		);
		expect(screen.getByText('Eze')).toBeTruthy();
	});

	test('debe de llamar el logout y navigate cuando se hace click en el boton', () => {
		render(
			<AuthContext.Provider value={contexValue}>
				<MemoryRouter>
					<Navbar />
				</MemoryRouter>
			</AuthContext.Provider>
		);
		const logoutBtn = screen.getByRole('button');

		fireEvent.click(logoutBtn);

		expect(contexValue.logout).toHaveBeenCalled();
		expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
	});
});
