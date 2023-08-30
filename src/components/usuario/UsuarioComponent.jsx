import PropTypes from 'prop-types'

export const UsuarioComponent = ({
  nome = 'Nome do usuário não informado',
  email = 'E-mail do usuário não informado'
}) => {
  return (
    <div data-testid="usuario-testid">
      <p>{ nome }</p>
      <p>{ email }</p>
    </div>
  )
}

UsuarioComponent.propTypes = {
  nome: PropTypes.string,
  email: PropTypes.string,
}