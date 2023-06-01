import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { WorkshopsContext } from '../../contexts/workshop.context'
import WorkshopTable from '../../components/admin-page-components/workshop-table/workshop-table.component'
import AddWorkshop from '../../components/admin-page-components/add-workshops/add-workshop.component'
import { UserAuth } from "../../contexts/admin.context";

import './admin-page.styles.scss';

const AdminPage = () => {
  const {workshops} = useContext(WorkshopsContext);
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
    <>
    <div className="title-container">
        <h1 className="title">ADMIN PAGE</h1>
        <h1 className="title">Current User: {user && user.email}</h1>
        <button onClick={handleLogout}>Logout</button>
        {/* <h1 className="title">Current User: {user && user.email}</h1> */}
        {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
    <AddWorkshop />

    <div className="all workshops">
    <h2>All Workshops</h2>
      {/* <div className="workshops-container">
        {workshops.map((workshop) => (
          <WorkshopTable key={workshop.id} workshop={workshop} />
        ))}
      </div> */}
      <WorkshopTable workshops={workshops}/>
    </div>
    </>
  )
};

export default AdminPage;


   