import React from 'react'
import{Navigate} from 'react-router-dom';
import {UserAuth} from '../contexts/admin.context';

export const ProtectedRoute = ({children}) => {
    const {user} = UserAuth()

    if (!user) {
        return <Navigate to='/' />
    }
  return children
}

export default ProtectedRoute
