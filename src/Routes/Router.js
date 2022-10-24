import { createBrowserRouter } from "react-router-dom";
import Main from "../Shared/Main/Main";

export let routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>
    }
]);