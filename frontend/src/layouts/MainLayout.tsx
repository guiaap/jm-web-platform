import Header from "../components/layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";

function MainLayout() {

    return (
        <div className="bg-(--color-bg-primary)">
            <div className="min-h-screen max-w-(--container-page) mx-auto shadow-xl font-sans">
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default MainLayout;