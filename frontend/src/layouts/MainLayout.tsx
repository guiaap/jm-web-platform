import Header from "../components/layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";

function MainLayout()  {

    return (
        <div className="
            min-h-screen max-w-(--container-page) mx-auto
            bg-(--color-bg-primary) shadow-xl
        ">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default MainLayout;