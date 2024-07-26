import logo from "../assets/italoCostaLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FcDocument } from "react-icons/fc";
import { IoDocumentSharp } from "react-icons/io5";


const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img src={logo.src} alt="Logo" className="mx-2 w-28"/>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl" >
                <a href="https://www.linkedin.com/in/italo-costa-dev/" target="blank"><FaLinkedin /></a>
                <a href="https://github.com/costa-Italo"><FaGithub target="blank"/></a>
                <a href="https://twitter.com/_GhostDev"><FaSquareXTwitter target="blank"/></a>
                <a href="https://docs.google.com/document/d/1QfNWT5xb144VK2ynwRi-d__Ab1CeLJHhBqqCUbtYbqM/edit?usp=sharing" target="blank"><IoDocumentSharp /></a>
            </div>
        </nav>
    )
}

export default Navbar
