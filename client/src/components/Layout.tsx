import React from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "./Layout.css";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout-container">
            <div className="sidebar-wrapper">
                <Sidebar />
            </div>

            <main className="layout-content">{children}</main>

            <Footer />
        </div>
    );
};

export default Layout;
