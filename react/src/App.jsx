import {MainLayout} from "./components/MainLayout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";

function App() {
  // return (
      // <MainLayout/>
  // );
  return <BrowserRouter>
    <Routes>
      <Route element={ <MainLayout/> }>
        <Route path="/" element={<HomePage />}/>
        <Route path="/brand" element={<h2>brand</h2>}/>
        <Route path="/addbrand" element={<h2>addbrand</h2>}/>

      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;
