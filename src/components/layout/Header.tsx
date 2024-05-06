import '../../styles/components/_header.scss'
import Menu from "./Menu.tsx";
import Logo from "./Logo.tsx";

function Header() {
    
    return (
        <>
            <header>
                <Logo/>
                <Menu/>
            </header>
        </>
    )
}

export default Header;
