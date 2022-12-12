import './App.css';
import Home from "./components/Home";
import {BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Layout from "./components/Layout";
import Index from "./auth/Login";

function App() {
  return (
    <div className={'App'}>

        <Router>
            <Routes>

                <Route path={'/'} element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path={'checkout'} element={<Checkout/>} />
                    <Route path={'login'} element={<Index />} />
                </Route>

            </Routes>
        </Router>



    </div>
  );
}

export default App;
