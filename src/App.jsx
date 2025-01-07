import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from 'react-router'
import React from 'react'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import MyRecipesPage from './pages/MyRecipesPage';
import NotFoundPage from './pages/NotFoundPage';
import RecipePage, { recipeLoader } from './pages/RecipePage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
      <Route index element={<HomePage />} />
      <Route path='/recipes' element={<MyRecipesPage />} />
      <Route path='/recipes/:id' element={<RecipePage />} loader={recipeLoader} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App