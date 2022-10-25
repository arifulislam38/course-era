import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import AutoplayHoc from "../Pages/Body/Body";
import Body from "../Pages/Body/Body";
import Header from "../Shared/Header/Header";

export let routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <AutoplayHoc></AutoplayHoc>
            }
        ],
    },
    {
        path: '/header',
        element: <Header></Header>
    }
]);