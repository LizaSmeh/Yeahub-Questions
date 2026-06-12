import { createBrowserRouter } from "react-router";
import App from "./App";
import { Layout } from "./components/Layout/Layout";
import { QuestionPage } from "./pages/QuestionPage";

export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children:[
            {
        path: '/',
        element: <App/>
    },
    {
        path: '/question/:id',
        element: <QuestionPage/>
    },

        ]
    }
    
])