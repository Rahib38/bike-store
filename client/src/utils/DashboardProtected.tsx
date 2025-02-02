import { useCurrentToken } from '@/Redux/Features/Auth/AuthSlice'
import { useAppSelector } from '@/Redux/hooks'
import React, { ReactNode } from 'react'
import { verifyToken } from './verifyToken'
import { Tuser } from '@/components/ProfileDropDown'
import { Navigate } from 'react-router-dom'

const DashboardProtected = ({children,role}:{children:ReactNode ,role:string}) => {
const token = useAppSelector(useCurrentToken)
  let user;
  if (token) {
    user = verifyToken(token) as Tuser;
  }

  if(!user?.email){
    return <Navigate to={'/login'}></Navigate>
  }

  if(user?.role !== role){
    return <Navigate to={user?.role==='admin'?'/adminDashboard':'/userDashboard'}></Navigate>
  }
  return children
}

export default DashboardProtected
