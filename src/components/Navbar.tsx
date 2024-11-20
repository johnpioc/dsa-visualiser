import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from '/public/assets/j.png';
import Image from "next/image";

function Navbar() {
    return (
        <header>
            <div className="container mx-auto py-8 font-body text-3xl px-4 flex items-center justify-start space-x-4 text-white">
                <a href="https://www.johnpioc.com" target="_blank">
                    <Image src={logo} width={65} height={65} alt={"Logo"} />
                </a>
                <ul className="flex items-center justify-center space-x-4">
                    <li className="cursor-pointer">
                        <a href="https://github.com/Johnnyftb" target="_blank"><FaGithub /></a>
                    </li>
                    <li className="cursor-pointer">
                        <a href="https://www.linkedin.com/in/john-pioc/" target="_blank" ><FaLinkedin /></a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;