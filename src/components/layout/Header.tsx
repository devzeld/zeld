import '../../styles/components/_Header.scss'
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
