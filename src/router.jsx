import { createBrowserRouter } from "react-router-dom";
import Register  from "./views/register.jsx";
import GuestLayout from "./components/GuestLayout.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/register",
                element: <Register />
            }
        ]

    }
])

export default router;