import { createBrowserRouter } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
import Main from "../Layout/Main/Main";
import Body from "../Pages/Body/Body";
import CourseDeatails from "../Pages/CourseDetails/CourseDeatails";
import Courses from "../Pages/courses/Courses";
import Courses1 from "../Pages/courses/Courses1";
import Login from "../Pages/Logiin/Login";
import PremiumCourse from "../Pages/PremiumCourse/PremiumCourse";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export let routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader:()=> fetch('http://localhost:5000'),
                element: <Body></Body>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                children:[
                    {
                        path: '/courses',
                        loader:()=> fetch('http://localhost:5000'),
                        element: <Courses1></Courses1>
                    },
                    {
                        path: '/courses/:catname',
                        loader: ({params})=> fetch(`http://localhost:5000/courses/${params.catname}`),
                        element: <Courses1></Courses1>
                    },
                ],
            },
            {
                path: '/course/:id',
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`),
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
                loader: ({params}) => fetch(`http://localhost:5000/premium/${params.name}`),
                element: <PrivateRoute><PremiumCourse></PremiumCourse></PrivateRoute>
            },
        ],
    },
]);