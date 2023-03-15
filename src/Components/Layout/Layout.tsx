
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const Layout = () => {
    return (
       <>
            <Header/>
            <main className="Layout-Content">
               <Outlet/>
            </main>
       </>
    )
};

export default Layout;