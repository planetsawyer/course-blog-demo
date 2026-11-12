import { Outlet } from "react-router";
import Footer from "../common/Footer";
import Header from "../common/Header";

function CommonLayout () {
    return (
    <div className = "relative min-h-screen">
        <Header/>
        <div className = "pb-[60px]">
            <Outlet/>
        </div>
        <Footer/>
    </div>
    );
}

export default CommonLayout;