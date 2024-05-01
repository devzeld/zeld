import '../styles/components/Header.scss'
import Menu from "./Menu.tsx";
import Logo from "./Logo.tsx";

function Header() {
    
    return (
        <>
            <div>
                <Logo/>
                <Menu/>
            </div>
        </>
    )
}

export default Header
