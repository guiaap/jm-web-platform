import Header from "../components/layout/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer.jsx";

function MainLayout() {

    return (
        <div className="bg-(--color-bg-primary)">
            <div className="
                min-h-screen
                max-w-(--container-page) mx-auto
                font-sans text-(--color-text-primary)
                shadow-lg
            ">
                <Header />
                <main className="[&>section]:px-3 [&>section]:py-10">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default MainLayout;