import {MainLayout} from "./components/MainLayout";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  // return (
      // <MainLayout/>
  // );
  return <BrowserRouter>
    <Routes>
      <Route element={ <MainLayout/> }>
        <Route path="/" element={<h2>Home</h2>}/>
        <Route path="/brand" element={<h2>brand</h2>}/>
        <Route path="/addbrand" element={<h2>addbrand</h2>}/>

      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;
