import '../../styles/components/_Menu.scss';
import {useNavigate} from "react-router-dom";

function Menu() {
    const navigate = useNavigate();
    return (
        <>
            <nav className="menu">
                <ul className="menu-list">
                    <li><a onClick={() => navigate("/home")}>Home</a></li>
                    <li><a onClick={() => navigate("/projects")}>Projects</a></li>
                    <li><a onClick={() => navigate("/about")}>About</a></li>
                    <li><a onClick={() => navigate("/contacts")}>Contacts</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Menu;
