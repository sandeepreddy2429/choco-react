import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './Home';
import './App.css';
import Contact from './Contact';
import Slider from './Slider';
import Client from './Client';
import Offer from './Offer';
import Chocolate from './Chocolate';
import About from './About';
import Useeffect from './Useeffect';
 
 

let routerConfig = createBrowserRouter([
  {
  path:"/",
  element: <Home/>
  },
   {
    path:"/home",
    element: <Home/>
   }, 
    {
    path:"/login",
    element: <Contact/>
   }, 
   {
    path:"/slider",
    element: <Slider/>
   }, 
   {
    path:"/client",
    element: <Client/>
   },
   {
    path:"/offer",
    element: <Offer/>
   },
   {
    path:"/chocolate",
    element: <Chocolate/>
   },
   { 
     path:"/about",
   element: <About/>
   },
   { 
     path:"/useeffect",
   element: <Useeffect/>
   }
]);
function App() {
  return (
    <div className="container">
      <RouterProvider router={routerConfig}/>
    </div>
  );
}

export default App;