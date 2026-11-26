
import { createBrowserRouter, RouterProvider } from 'react-router';

import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

import { getPosts, getPost } from './api/postsApi';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        loader: getPosts,
        element: <HomePage />,
        errorElement: <NotFoundPage />,
      },
      {
        path: 'posts/:postId',
        loader: ({ params }) => getPost(params.postId),
        element: <PostPage />,
        errorElement: <NotFoundPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
