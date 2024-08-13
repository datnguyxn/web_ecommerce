import { createBrowserRouter } from "react-router-dom";
import Register  from "./views/register.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import Login from "./views/login.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]

    }
])

export default router;