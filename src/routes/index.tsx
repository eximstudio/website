import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from '../components/root';
import View from '../pages/view';
import Home from '../pages/home';
import NotFound from '../pages/404';
import About from '../pages/about';
import Resources from '../pages/resources';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
          },
          {
            path: 'resources',
            element: <Resources />,
            },
            {
                path: 'view/:id',
                element: <View />,
            },
        ],
    },
]);

export default function Routes() {
    return (
        <>
            <RouterProvider router={Router} />
        </>
    );
}
