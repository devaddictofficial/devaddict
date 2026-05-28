import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import Footer from "../pages/Footer";

function MainLayout()
{
    return(
        <>
            <header>
                <Header />
            </header>
            
            <main>
                <Outlet />
            </main>
            
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default MainLayout