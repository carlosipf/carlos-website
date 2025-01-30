import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaSnapchat, FaSpotify, FaFilePdf } from "react-icons/fa"

import "./Footer.css"

const Footer: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState<'snapcode' | 'resume' | null>(null);

    const handleIconClick = (content: 'snapcode' | 'resume') => {
        setModalContent(content);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setModalContent(null);
    };

    return (
        <footer className="app-footer">
            <div className="social-links">
                <a
                    href="https://www.instagram.com/carlosipf/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="instagram"
                >
                    <FaInstagram size={24} />
                </a>
                <div
                    className="snapchat"
                    onClick={() => handleIconClick('snapcode')}
                    style={{ cursor: "pointer" }}
                    title='snapchat'
                >
                    <FaSnapchat size={24} />
                </div>
                <a
                    href="https://open.spotify.com/user/w8ovnblkmbhviff8b50vljirk?si=6aoykoUAQISPtCa9Bku2xg"
                    target="_blank"
                    rel='noopener noreferrer'
                    title="spotify"
                >
                    <FaSpotify size={24} />
                </a>
                <a
                    href="https://www.linkedin.com/in/carlos-ip-fernandez/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="linkedin"
                >
                    <FaLinkedin size={24} />
                </a>

                <a
                    href="https://drive.google.com/file/d/1XRV5r-85v2Ocsb-WcHXuckruscyaNbFg/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="resume"
                >
                    <FaFilePdf size={24} />
                </a>
            </div>

            <p> {new Date().getFullYear()} carlos iñigo fernandez</p>
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button onClick={handleCloseModal} className='modal-close'>
                            X
                        </button>
                        {modalContent === 'snapcode' && (
                            <img
                                src="/carlos.png"
                                alt="snapcode"
                                style={{ width: "100%", height: "auto" }}
                            />
                        )}
                        {/* {modalContent === 'resume' && (
                            <iframe
                                src="/CARLOSIÑIGOFERNANDEZ09.pdf"
                                title="resume"
                                style={{ width: '100%', height: '100%' }}

                            />
                        )} */}
                    </div>
                </div>
            )}
        </footer >
    );
};
export default Footer;