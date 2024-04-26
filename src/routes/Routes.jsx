import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Login from "../pages/Login/Login";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import AddCraftItem from "../pages/AddCraftItem/AddCraftItem";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <PageNotFound></PageNotFound>,
        children: [
            {
                path: '/login',
                element:<Login></Login>,
            },
            {
                path: '/addItem',
                element: <AddCraftItem></AddCraftItem>,
            }
        ]
    },
]);

export default router;