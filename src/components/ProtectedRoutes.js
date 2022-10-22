import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const token = localStorage.getItem('userToken')
  const auth = {token: token}
  return (
    auth.token ? <Outlet /> : <Navigate to='/admin' />
  )
}

export default ProtectedRoutes