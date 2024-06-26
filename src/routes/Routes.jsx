import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Login from "../pages/Login/Login";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import AddCraftItem from "../pages/AddCraftItem/AddCraftItem";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
import ItemDetails from "../pages/ItemDetails/ItemDetails";
import MyArtAndCraft from "../pages/MyArtAndCraft/MyArtAndCraft";
import PrivateRoute from "./PrivateRoute";
import UpdateItem from "../pages/UpadateItem/UpdateItem";
import AllArtAndCraft from "../pages/AllArtAndCraft/AllArtAndCraft";
import SubcategoryAllCard from "../components/SubcategoryAllCard/SubcategoryAllCard";
import CategoryCardDetails from "../pages/CategoryCardDetails/CategoryCardDetails";
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
                element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>,
            },
            {
                path: '/item/:id',
                element: <PrivateRoute><ItemDetails></ItemDetails></PrivateRoute>
            },
            {
                path: '/mylist',
                element: <PrivateRoute><MyArtAndCraft></MyArtAndCraft></PrivateRoute>
            },
            {
                path:'/updateitem/:id',
                element: <PrivateRoute><UpdateItem></UpdateItem></PrivateRoute>,
            },
            {
                path: '/allartcrafts',
                element: <AllArtAndCraft></AllArtAndCraft>
            },
            {
                path: '/subcategory/itemcard/:id',
                element: <SubcategoryAllCard></SubcategoryAllCard>
            },
            {
                path: '/subcategory/card/details/:id',
                element: <CategoryCardDetails></CategoryCardDetails>
            }
        ]
    },
]);

export default router;