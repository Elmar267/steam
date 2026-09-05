import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { IoClose } from "react-icons/io5";
import { FaSteam } from "react-icons/fa";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from 'firebase/auth';

function MobileSidebar({ isOpen, onClose }) {
  const [user, setUser] = useState(null)
  const [showLogout, setShowLogout] = useState(false)
  const location = useLocation();
  
  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
      });

      return () => unsubscribe();
  }, [])

  useEffect(() => {
    onClose();
  }, [location.pathname])

  const handleLogout = async () => {
      await signOut(auth);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        onClose();
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [onClose]);

  return (
    <>
      {isOpen && (
        <div onClick={onClose} className="fixed inset-0 z-40 bg-black/50" />
      )}
    
      <div className={`fixed top-0 right-0 h-full w-[240px] sm:w-[350px] bg-[#171a22] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <nav className="flex flex-col h-full py-4 overflow-y-auto">
          <div className="flex justify-between gap-3">
              <div className='max-w-[120px] mx-4 mb-4'>
                  <FaSteam className="text-[36px] text-[#c5c3c0]" />
              </div>
              <IoClose  onClick={onClose} className="text-white cursor-pointer text-[24px] m-3" />
          </div>
          <ul>
            <div className='flex items-center justify-center gap-2 px-5 py-4 border-b border-slate-700'>
              {user ? (
                  <div className="relative">
                      <div onClick={() => setShowLogout(!showLogout)} className="flex items-center gap-2 cursor-pointer" >
                          <span className="text-[#c5c3c0] text-[14px]"> {user.displayName || user.email}</span>
                          <div className="w-[32px] h-[32px] rounded-full bg-[#66c0f4] flex items-center justify-center">
                              {(user.displayName || user.email).charAt(0).toUpperCase()}
                          </div>
                      </div>
                      {showLogout && (
                          <button onClick={handleLogout}className="absolute right-0 mt-2 bg-[#171d25] cursor-pointer text-[#66c0f4] px-4 py-2">Log out</button>
                      )}
                  </div>
                  ) : (
                  <Link to="/login">
                      <p className='text-[#c5c3c0]'>Log in</p>
                  </Link>
              )}
            </div>
              <li>
                  <Link to={'/store'} className="block px-5 py-4 text-white font-semibold text-lg border-b border-slate-700">STORE</Link>
              </li>
              <li>
                  <Link to={'/about'} className="block px-5 py-4 text-white font-semibold text-lg border-b border-slate-700">ABOUT</Link>
              </li>
          </ul>
        </nav>
      </div>
    </>

  );
}

export default MobileSidebar