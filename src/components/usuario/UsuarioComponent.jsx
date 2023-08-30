
export const UsuarioComponent = ({nome, email}) => {
  return (
    <div data-testid="usuario-testid">
      <p>{ nome || 'Nome do usuário não informado' }</p>
      <p>{ email || 'E-mail do usuário não informado'}</p>
    </div>
  )
}
