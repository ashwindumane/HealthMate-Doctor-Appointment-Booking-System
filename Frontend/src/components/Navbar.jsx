import React, { useContext, useEffect, useRef, useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

function Navbar() {
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext);

  const [showMenu, setShowMenu] = useState(false);
  const [animateMenu, setAnimateMenu] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const [showDesktopDropdown, setShowDesktopDropdown] = useState(false);

  const dropdownRef = useRef(null);

  const logout = () => {
    setToken(false);
    localStorage.removeItem('token');
    toast.success('Logged out successfully');
    navigate('/');
  };

  const openMenu = () => {
    setShowMenu(true);
    setTimeout(() => setAnimateMenu(true), 10);
    document.body.style.overflow = 'hidden'; // ❌ stop scrolling
  };

  const closeMenu = () => {
    setAnimateMenu(false);
    setTimeout(() => setShowMenu(false), 300);
    document.body.style.overflow = 'auto'; // ✅ allow scrolling again
  };

  const toggleDesktopDropdown = () => {
    setShowDesktopDropdown(!showDesktopDropdown);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDesktopDropdown(false);
        setShowMobileDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // HealthMate Icon
  const HealthMateIcon = () => (
    <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="18" fill="#5f6fff" />
      <path
        d="M24 15H21V12C21 11.45 20.55 11 20 11H16C15.45 11 15 11.45 15 12V15H12C11.45 15 11 15.45 11 16V20C11 20.55 11.45 21 12 21H15V24C15 24.55 15.45 25 16 25H20C20.55 25 21 24.55 21 24V21H24C24.55 21 25 20.55 25 20V16C25 15.45 24.55 15 24 15Z"
        fill="white"
      />
    </svg>
  );

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 relative">
      
      {/* Logo + App Name */}
      <div onClick={() => navigate('/')} className="flex items-center gap-2 cursor-pointer">
        <HealthMateIcon />
        <span className="text-xl sm:text-2xl font-bold text-[#5f6fff]">HealthMate</span>
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex items-start gap-6 font-medium">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'border-b-2 border-[#5f6fff] py-1' : 'py-1')}>
          <li>HOME</li>
        </NavLink>
        <NavLink to="/doctors" className={({ isActive }) => (isActive ? 'border-b-2 border-[#5f6fff] py-1' : 'py-1')}>
          <li>ALL DOCTORS</li>
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'border-b-2 border-[#5f6fff] py-1' : 'py-1')}>
          <li>ABOUT</li>
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'border-b-2 border-[#5f6fff] py-1' : 'py-1')}>
          <li>CONTACT</li>
        </NavLink>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-4 relative">
        {token && userData ? (
          <>
            {/* Desktop Dropdown */}
            <div className="relative hidden md:block" ref={dropdownRef}>
              <div className="flex items-center gap-2 cursor-pointer" onClick={toggleDesktopDropdown}>
                <img className="w-9 h-9 object-cover rounded-full" src={userData.image || assets.default_profile} alt="Profile" />
                <img
                  className={`w-3 transition-transform duration-300 ${showDesktopDropdown ? 'rotate-180' : ''}`}
                  src={assets.dropdown_icon}
                  alt="Dropdown"
                />
              </div>
              {showDesktopDropdown && (
                <div className="absolute top-full right-0 mt-2 pt-3 text-base font-medium text-gray-600 z-20 bg-stone-100 rounded shadow-lg animate-fadeIn flex flex-col gap-3 p-4 min-w-48">
                  <p onClick={() => { navigate('/my-profile'); setShowDesktopDropdown(false); }} className="hover:text-black cursor-pointer">My Profile</p>
                  <p onClick={() => { navigate('/my-appointment'); setShowDesktopDropdown(false); }} className="hover:text-black cursor-pointer">My Appointment</p>
                  <p onClick={() => { logout(); setShowDesktopDropdown(false); }} className="hover:text-black cursor-pointer">Logout</p>
                </div>
              )}
            </div>

            {/* Mobile Dropdown */}
            <div className="relative md:hidden" ref={dropdownRef}>
              <img
                className="w-9 h-9 object-cover rounded-full cursor-pointer"
                onClick={() => setShowMobileDropdown(!showMobileDropdown)}
                src={userData.image || assets.default_profile}
                alt="Profile"
              />
              {showMobileDropdown && (
                <div className="absolute top-full right-0 mt-2 pt-3 text-base font-medium text-gray-600 z-50 bg-stone-100 rounded shadow-lg animate-fadeIn flex flex-col gap-3 p-4 min-w-48">
                  <p onClick={() => { navigate('/my-profile'); setShowMobileDropdown(false); }} className="hover:text-black cursor-pointer">My Profile</p>
                  <p onClick={() => { navigate('/my-appointment'); setShowMobileDropdown(false); }} className="hover:text-black cursor-pointer">My Appointment</p>
                  <p onClick={() => { logout(); setShowMobileDropdown(false); }} className="hover:text-black cursor-pointer">Logout</p>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Desktop Login */}
            <button
              onClick={() => navigate('/login')}
              className="bg-[#5f6fff] text-white px-8 py-3 rounded-full font-light hidden md:block"
            >
              Create account
            </button>
            {/* Mobile Login */}
            <button
              onClick={() => navigate('/login')}
              className="bg-[#5f6fff] text-white px-4 py-2 rounded-full font-light block md:hidden"
            >
              Create
            </button>
          </>
        )}

        {/* Mobile Menu Button */}
        {!token && (
          <img onClick={openMenu} className="w-6 md:hidden cursor-pointer" src={assets.menu_icon} alt="Menu" />
        )}

        {/* Mobile Side Menu */}
        {showMenu && (
          <>
            <div
              onClick={closeMenu}
              className={`fixed inset-0 z-30 bg-black transition-opacity duration-300 ${animateMenu ? 'opacity-40' : 'opacity-0'}`}
            />
            <div
              className={`fixed top-0 right-0 w-4/5 max-w-xs h-full bg-white z-40 transition-transform duration-300 ease-in-out ${animateMenu ? 'translate-x-0' : 'translate-x-full'}`}
            >
              <div className="flex items-center justify-between px-5 py-6">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => { navigate('/'); closeMenu(); }}>
                  <HealthMateIcon />
                  <span className="text-xl font-bold text-[#5f6fff]">HealthMate</span>
                </div>
                <img className="w-7 cursor-pointer" onClick={closeMenu} src={assets.cross_icon} alt="Close" />
              </div>
              <ul className="flex flex-col items-center gap-4 mt-5 text-lg font-medium">
                <NavLink onClick={closeMenu} to="/" className={({ isActive }) => (isActive ? 'border-b-2 border-[#5f6fff] px-4 py-3' : 'px-4 py-3')}>
                  HOME
                </NavLink>
                <NavLink onClick={closeMenu} to="/doctors" className={({ isActive }) => (isActive ? 'border-b-2 border-[#5f6fff] px-4 py-3' : 'px-4 py-3')}>
                  ALL DOCTORS
                </NavLink>
                <NavLink onClick={closeMenu} to="/about" className={({ isActive }) => (isActive ? 'border-b-2 border-[#5f6fff] px-4 py-3' : 'px-4 py-3')}>
                  ABOUT
                </NavLink>
                <NavLink onClick={closeMenu} to="/contact" className={({ isActive }) => (isActive ? 'border-b-2 border-[#5f6fff] px-4 py-3' : 'px-4 py-3')}>
                  CONTACT
                </NavLink>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
