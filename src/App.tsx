import "./styles/components/_App.scss"
import {HashRouter as Router, Routes, Route,} from "react-router-dom";
import {Home, About, Projects, Contacts, NoPage} from "./pages/index.tsx";
import Header from './components/layout/Header.tsx';


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
    );
};

export default App;
