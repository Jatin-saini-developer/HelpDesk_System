
import './App.css'
import DashBoard from './pages/DashBoard'
import Login from './components/Login'
import NewTicket from './pages/NewTicket'
import MyTicket from './pages/MyTicket'
import ViewTicket from './pages/ViewTicket'
import UserProfile from './pages/UserProfile'
import UserInformation from './pages/UserInformation'
import {  createBrowserRouter,  RouterProvider,} from "react-router";
import OperationDashboard from './pages/operation/OperationDashboard'
import TicketApproval from './pages/operation/TicketApproval'
import MyTicketOP from './pages/operation/MyTicketOP'
import Performance from './pages/operation/Performance'
import ProtectedRoute from './utils/ProtectedRoute';

function App() {

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
     path: "/dashboard",
    element: (<ProtectedRoute>
    <DashBoard/>
    </ProtectedRoute>)
  },
  {
     path: "/newTicket",
    element:( <ProtectedRoute>
      <NewTicket/>
      </ProtectedRoute> )
  },
  {
     path: "/myTicket",
    element: (
      <ProtectedRoute>
        <MyTicket />
      </ProtectedRoute>
    )
  },
  {
     path: "/user",
    element: (
      <ProtectedRoute>
        <UserProfile />
      </ProtectedRoute>
    )
  },
  {
     path: "/userInformation",
    element: (
      <ProtectedRoute>
        <UserInformation />
      </ProtectedRoute>
    )
  },
  {
    path:"/op-dashboard",
    element:(
      <ProtectedRoute>
        <OperationDashboard />
      </ProtectedRoute>
    )
  },
  {
    path:"/ticket-approval",
    element:(
      <ProtectedRoute>
        <TicketApproval />
      </ProtectedRoute>
    )
  },
  {
    path:"/my-ticket",
    element: (
      <ProtectedRoute>
        <MyTicketOP />
      </ProtectedRoute>
    )
  },
  {
    path:"/performance",
    element:  (
      <ProtectedRoute>
        <Performance />
      </ProtectedRoute>
    )
  }
  ]);

  

  return (
     
     <div>
      <RouterProvider router={router}>
     
      </RouterProvider>
     </div>

  )
}

export default App
