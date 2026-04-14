import { createBrowserRouter } from "react-router";
import layout from "../layout/layout";
import Home from '../pages/Home/Home'
import Timeline from '../pages/Timeline/Timeline'
import Stats from "../pages/Stats/Stats";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
export const router = createBrowserRouter([
    {
        path: '/',
        Component: layout,
        children: [
            {
                index: '/',
                element: <Home />
            },
            {
                path: 'Timeline',
                element: <Timeline />
            },
            {
                path: 'Stats',
                element: <Stats />
            }
        ],
        errorElement: <ErrorPage />
    }
])