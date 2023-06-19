import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import Lightside from "./pages/Lightside";
import Darkside from "./pages/Darkside";

// layouts
import Rootlayout from "./layouts/RootLayout";

//this is the browser router, it routes all the pages in the app, it uses createBrowserRouter
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path="lightside" element={<Lightside />} />
      <Route path="darkside" element={<Darkside />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
