import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Login from '../pages/login'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/login',
        element: <Login />
    },
])

export default routes