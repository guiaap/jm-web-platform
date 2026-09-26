import Container from "./Container";
import Logo from "../ui/Logo";

function Header() {

    return (
        <header className={`
            sticky lg:fixed top-0 z-50 
            w-full max-w-(--container-page)
            bg-(--color-brown-900)
        `}>
            <Container>
                <nav className="
                    relative flex items-center justify-between 
                    p-4 text-(--color-text-secondary)
                ">
                    <Logo />
                </nav>
            </Container>
        </header>
    );
}

export default Header;