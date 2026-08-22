import { Link, useParams } from "react-router";
import { IoClose } from "react-icons/io5";

function MobileSidebar({ isOpen, onClose }) {
    const {menuOpen} = useParams()

  return (
    <div className={`fixed top-0 right-0 h-full w-[250px] bg-[#171a22] z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav className="flex flex-col h-full py-4 overflow-y-auto">
        <div className="flex justify-between gap-3">
            <div className='max-w-[120px] mx-4 mb-4'>
                <img  src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" alt="logo" />
            </div>
            <IoClose  onClick={onClose} className="text-white cursor-pointer text-[24px] m-3" />
        </div>

        <ul>
            <li>
                <Link to={'/'} className="block px-5 py-4 text-white font-semibold text-lg border-b border-slate-700">STORE</Link>
            </li>
            <li>
                <Link to={'/about'} className="block px-5 py-4 text-white font-semibold text-lg border-b border-slate-700">ABOUT</Link>
            </li>
            <li>
                <Link to={'/support'} className="block px-5 py-4 text-white font-semibold text-lg border-b border-slate-700">SUPPORT</Link>
            </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileSidebar