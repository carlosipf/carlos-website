import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBook, FaSmile, FaEnvelope } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
    return (
        <div className="navigation">
            <li>
                <Link to="/">
                    <FaHome size={35} />
                    <span className="tooltip">home</span>
                </Link>
            </li>
            <li>
                <Link to="/story">
                    <FaBook size={35} />
                    <span className="tooltip">story</span>

                </Link>
            </li>
            <li>
                <Link to="/mood">
                    <FaSmile size={35} />
                    <span className="tooltip">mood</span>

                </Link>
            </li>
            <li>
                <Link to="/contact">
                    <FaEnvelope size={35} />
                    <span className="tooltip">contact</span>
                </Link>
            </li>
        </div>
    );
};

export default Sidebar;