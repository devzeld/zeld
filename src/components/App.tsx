import "../styles/components/App.scss"
import {HashRouter as Router, Routes, Route,} from "react-router-dom";
import Header from "./Header.tsx";
import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";
import Projects from "../pages/Projects.tsx";
import Contacts from "../pages/Contacts.tsx";
import NoPage from "../pages/NoPage.tsx";

function App() {

    return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/*" element={<NoPage/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App
