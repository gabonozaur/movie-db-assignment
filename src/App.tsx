import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages";
import CategoriesPage from "./pages/Categories";
import FavoritesPage from "./pages/Favorites";
import { MyRoutes } from "./types";

const router = createBrowserRouter([
  {
    path: MyRoutes.home,
    element: <HomePage />,
  },
  { path: MyRoutes.categories, element: <CategoriesPage /> },
  { path: MyRoutes.favorites, element: <FavoritesPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
