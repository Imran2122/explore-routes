
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/Home/About/About';
import Products from './components/Products/Products';
import Layout from './Layout/Layout';
import Friends from './components/Friends/Friends';

function App() {
  const router=createBrowserRouter([
  {path:'/',element:<Layout></Layout>,children:
[
  {path:'/',element:<Home></Home>},
  {path:'/home',element:<Home></Home>},
 
  {path:'/products',element:<Products></Products>}
]},
{path:'/about',element:<About></About>},
{path:'/*',element:<div>not found this router</div>},
{path:'/friends',
loader:async()=>{
  return fetch('https://jsonplaceholder.typicode.com/users')
},
element:<Friends></Friends>}

  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
