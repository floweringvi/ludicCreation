import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';



const router= createBrowserRouter([
    {
        path:'/',
        element: <App />,
        errorElement: ,
        children:[

        ]
    }
])









ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );