import { Header } from './index';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

it('should have a "Cadastrar" button', () => {
    render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    );

    let button = screen.getByText('Cadastrar');
    expect(button).toBeInTheDocument();
});

export {};