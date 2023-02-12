import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../contexts/admin.context";

const Admin = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
      console.log('logged out')
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <div className="title-container">
        <h1 className="title">ADMIN PAGE</h1>
        <h1 className="title">Current User: {user && user.email}</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
};

export default Admin;