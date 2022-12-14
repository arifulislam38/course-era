import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Blog from '../Pages/Blog/Blog'
import Body from "../Pages/Body/Body";
import CourseDeatails from "../Pages/CourseDetails/CourseDeatails";
import Courses from "../Pages/courses/Courses";
import Courses1 from "../Pages/courses/Courses1";
import ErrorPage from "../Pages/errorelemnt/ErrorPage";
import Login from "../Pages/Logiin/Login";
import PremiumCourse from "../Pages/PremiumCourse/PremiumCourse";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import FAQ from '../Pages/FAQ/FAQ';

export let routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                loader:()=> fetch('https://web-server-woad.vercel.app'),
                element: <Body></Body>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                children:[
                    {
                        path: '/courses',
                        loader:()=> fetch('https://web-server-woad.vercel.app'),
                        element: <Courses1></Courses1>
                    },
                    {
                        path: '/courses/:catname',
                        loader: ({params})=> fetch(`https://web-server-woad.vercel.app/courses/${params.catname}`),
                        element: <Courses1></Courses1>
                    },
                ],
            },
            {
                path: '/course/:id',
                loader: ({params}) => fetch(`https://web-server-woad.vercel.app/course/${params.id}`),
                element: <CourseDeatails></CourseDeatails>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/premium/:name',
                loader: ({params}) => fetch(`https://web-server-woad.vercel.app/premium/${params.name}`),
                element: <PrivateRoute><PremiumCourse></PremiumCourse></PrivateRoute>
            },
            {
                path:'/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ],
    },
]);