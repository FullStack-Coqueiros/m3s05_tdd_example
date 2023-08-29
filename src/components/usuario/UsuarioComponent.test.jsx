import '@testing-library/jest-dom';

import { screen } from '@testing-library/dom';

describe('Suite de testes do usuário sem os dados passados por parametro', () => {
  it('Verificando se o componente esta sendo exibido em tela', () => {
    expect(screen.getByTestId('usuario-testid')).toBeInTheDocument();
  })
  
  it('Verificando se o nome do usuario esta sendo exibido com a tratativa', () => {
    expect(screen.getByText(/Nome do usuário não informado/i)).toBeInTheDocument();
  })

  it('Verificando se o email do usuario esta sendo exibido com a tratativa', () => {
    expect(screen.getByText(/E-mail do usuário não informado/i)).toBeInTheDocument();
  })
})