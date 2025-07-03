
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

function App() {

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
     path: "/dashboard",
    element: <DashBoard/>
  },
  {
     path: "/newTicket",
    element: <NewTicket/>
  },
  {
     path: "/myTicket",
    element: <MyTicket/>
  },
  {
     path: "/user",
    element: <UserProfile/>
  },
  {
     path: "/userInformation",
    element: <UserInformation/>
  },
  {
    path:"/op-dashboard",
    element:<OperationDashboard/>
  },
  {
    path:"/ticket-approval",
    element:<TicketApproval/>
  },
  {
    path:"/my-ticket",
    element:<MyTicketOP/>
  }
  ]);

  

  return (
     
     <div>
      <RouterProvider router={router}>
      {/* <Login/> */}
      {/* <DashBoard/> */}
      {/* <NewTicket/> */}
      {/* <MyTicket/> */}
      {/* <ViewTicket/> */}
      {/* <UserProfile/> */}
      {/* <UserInformation/> */}
      </RouterProvider>
     </div>

  )
}

export default App
