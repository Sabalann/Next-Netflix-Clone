import React, { useState } from "react";
import { useRouter } from "next/router";

function NavBar({ isScrolled }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <div className={`navBar ${isScrolled ? "scrolled" : ""} flex items-center justify-between px-4 py-2`}>
      {/* Logo */}

      {/* Desktop Menu (visible from md breakpoint upwards) */}
      <div className="hidden md:flex items-center space-x-4">
      <h1 className="text-red-600 text-3xl font-sans">NETFLIX</h1>
        <button className="navButton">Home</button>
        <button className="navButton">TV Shows</button>
        <button className="navButton">Movies</button>
        <button className="navButton">New & Popular</button>
        <button className="navButton">My List</button>
      </div>
      <div>
      <div className="ml-auto flex space-x-4">
        <button className="navButton">
          <svg width="24px" height="24px" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
              stroke="rgb(175, 174, 174)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="navButton">
          <svg width="24px" height="24px" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.0009 5C13.4331 5 14.8066 5.50571 15.8193 6.40589C16.832 7.30606 17.4009 8.52696 17.4009 9.8C17.4009 11.7691 17.846 13.2436 18.4232 14.3279C19.1606 15.7133 19.5293 16.406 19.5088 16.5642C19.4849 16.7489 19.4544 16.7997 19.3026 16.9075C19.1725 17 18.5254 17 17.2311 17H6.77066C5.47638 17 4.82925 17 4.69916 16.9075C4.54741 16.7997 4.51692 16.7489 4.493 16.5642C4.47249 16.406 4.8412 15.7133 5.57863 14.3279C6.1558 13.2436 6.60089 11.7691 6.60089 9.8C6.60089 8.52696 7.16982 7.30606 8.18251 6.40589C9.19521 5.50571 10.5687 5 12.0009 5ZM12.0009 5V3M9.35489 20C10.0611 20.6233 10.9888 21.0016 12.0049 21.0016C13.0209 21.0016 13.9486 20.6233 14.6549 20"
              stroke="rgb(175, 174, 174)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="navButton" onClick={handleLoginClick}>
          <svg width="24px" height="24px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fill="rgb(175, 174, 174)">
              <path d="M35.7502,28 C38.0276853,28 39.8876578,29.7909151 39.9950978,32.0427546 L40,32.2487 L40,33 C40,36.7555 38.0583,39.5669 35.0798,41.3802 C32.1509,43.1633 28.2139,44 24,44 C19.7861,44 15.8491,43.1633 12.9202,41.3802 C10.0319285,39.6218485 8.11862909,36.9249713 8.00532378,33.3388068 L8,33 L8,32.2489 C8,29.9703471 9.79294995,28.1122272 12.0440313,28.0048972 L12.2499,28 L35.7502,28 Z M24,4 C29.5228,4 34,8.47715 34,14 C34,19.5228 29.5228,24 24,24 C18.4772,24 14,19.5228 14,14 C14,8.47715 18.4772,4 24,4 Z"/>
            </g>
          </svg>
        </button>
      </div>
      </div>

      {/* Hamburger Button (visible on small screens) */}
      <button
        className="hamburger md:hidden flex flex-col items-center justify-center space-y-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`line h-0.5 w-5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></div>
        <div className={`line h-0.5 w-5 bg-white transition-all ${isOpen ? "opacity-0" : ""}`}></div>
        <div className={`line h-0.5 w-5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
      </button>

      {/* Mobile Menu Overlay (visible on small screens when isOpen) */}
      {isOpen && (
        <div className="mobile-menu md:hidden fixed top-0 left-0 right-0 h-screen bg-black bg-opacity-90 flex flex-col items-center pt-20 space-y-5 z-50">
          {/* Reuse your buttons here */}
          <button className="navButton" onClick={() => setIsOpen(false)}>Home</button>
          <button className="navButton" onClick={() => setIsOpen(false)}>TV Shows</button>
          <button className="navButton" onClick={() => setIsOpen(false)}>Movies</button>
          <button className="navButton" onClick={() => setIsOpen(false)}>New & Popular</button>
          <button className="navButton" onClick={() => setIsOpen(false)}>My List</button>

          <button className="navButton" onClick={() => setIsOpen(false)}>
            <svg width="24px" height="24px" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                stroke="rgb(175, 174, 174)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="navButton" onClick={() => setIsOpen(false)}>
            <svg width="24px" height="24px" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.0009 5C13.4331 5 14.8066 5.50571 15.8193 6.40589C16.832 7.30606 17.4009 8.52696 17.4009 9.8C17.4009 11.7691 17.846 13.2436 18.4232 14.3279C19.1606 15.7133 19.5293 16.406 19.5088 16.5642C19.4849 16.7489 19.4544 16.7997 19.3026 16.9075C19.1725 17 18.5254 17 17.2311 17H6.77066C5.47638 17 4.82925 17 4.69916 16.9075C4.54741 16.7997 4.51692 16.7489 4.493 16.5642C4.47249 16.406 4.8412 15.7133 5.57863 14.3279C6.1558 13.2436 6.60089 11.7691 6.60089 9.8C6.60089 8.52696 7.16982 7.30606 8.18251 6.40589C9.19521 5.50571 10.5687 5 12.0009 5ZM12.0009 5V3M9.35489 20C10.0611 20.6233 10.9888 21.0016 12.0049 21.0016C13.0209 21.0016 13.9486 20.6233 14.6549 20"
                stroke="rgb(175, 174, 174)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="navButton" onClick={() => { handleLoginClick(); setIsOpen(false); }}>
            <svg width="24px" height="24px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g fill="rgb(175, 174, 174)">
                <path d="M35.7502,28 C38.0276853,28 39.8876578,29.7909151 39.9950978,32.0427546 L40,32.2487 L40,33 C40,36.7555 38.0583,39.5669 35.0798,41.3802 C32.1509,43.1633 28.2139,44 24,44 C19.7861,44 15.8491,43.1633 12.9202,41.3802 C10.0319285,39.6218485 8.11862909,36.9249713 8.00532378,33.3388068 L8,33 L8,32.2489 C8,29.9703471 9.79294995,28.1122272 12.0440313,28.0048972 L12.2499,28 L35.7502,28 Z M24,4 C29.5228,4 34,8.47715 34,14 C34,19.5228 29.5228,24 24,24 C18.4772,24 14,19.5228 14,14 C14,8.47715 18.4772,4 24,4 Z"/>
              </g>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default NavBar;