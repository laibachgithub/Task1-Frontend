import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))

// Base
const NewUser=React.lazy(()=>import("./views/users/newuser"))

const EditUser=React.lazy(()=>import("./views/users/edituser"))

const ViewUser=React.lazy(()=>import("./views/users/viewuser"))
// Buttons

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/newuser', name: 'NewUser', element:NewUser },
  { path: '/edituser', name: 'EditUser', element: EditUser },
  { path: '/viewuser', name: 'ViewUser', element:ViewUser  },
 
 ]

export default routes
