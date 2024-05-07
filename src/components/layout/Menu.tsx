import '../../styles/components/_menu.scss';
import {useNavigate, useLocation} from "react-router-dom";

function Menu() {
    const navigate = useNavigate();

    const menuLinkEls = document.querySelectorAll('.menu_link');
    
    let location = useLocation().pathname === '/' ? 'Home' : useLocation().pathname.substring(1, 2).toUpperCase() + useLocation().pathname.substring(2);
    menuLinkEls.forEach(menuLinkEl => {
        if(location === menuLinkEl.textContent){
            document.querySelector('.active')?.classList.remove('active');
            menuLinkEl.classList.add('active');
            console.log("ysp")
        }
    })

    return (
        <>
            <nav className="menu">
                <ul className="menu-list">
                    <li className={'menu_item'}>
                        <a className = {"menu_link"} onClick={() => {navigate("/home");}}>Home</a></li>
                    <li className={'menu_item'}>
                        <a className = {"menu_link"} onClick={() => {navigate("/projects");}}>Projects</a></li>
                    <li className={'menu_item'}>
                        <a className = {"menu_link"} onClick={() => {navigate("/about");}}>About</a></li>
                    <li className={'menu_item'}>
                        <a className = {"menu_link"} onClick={() => {navigate("/contacts");}}>Contacts</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Menu;
