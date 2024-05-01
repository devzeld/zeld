import '../styles/components/Header.module.scss'
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
