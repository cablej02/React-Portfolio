import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="py-3" style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 1000 }}>
            <div className="container d-flex justify-content-center">
                <a href="https://www.github.com/cablej02" target="_blank" className="mx-2 noopener noreferrer">
                    <FaGithub size={30} />
                </a>
                <a href="https://linkedin.com/" target="_blank" className="mx-2 noopener noreferrer">
                    <FaLinkedin size={30} />
                </a>
            </div>
        </footer>
    );
}