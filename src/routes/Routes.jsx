import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Login from "../pages/Login/Login";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import AddCraftItem from "../pages/AddCraftItem/AddCraftItem";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <PageNotFound></PageNotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/signin',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            },
            {
                path: '/addItem',
                element: <AddCraftItem></AddCraftItem>,
            }
        ]
    },
]);

export default router;