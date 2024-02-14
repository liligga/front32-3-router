import { useNavigate } from "react-router-dom"

const LoginPage = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    // TODO запрос на сервер
    navigate("/articles")
  }

  return (
    <div>LoginPage
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Логин" />
        <input type="password" placeholder="Пароль" />
        <button type="submit">Войти</button>
      </form>
    </div>
  )
}
export default LoginPage