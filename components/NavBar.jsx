import React from "react";
import { useRouter } from "next/router";

function NavBar({ isScrolled }) {
    const router = useRouter();

    const handleLoginClick = () => {
        router.push('/login');
    };

  return (
      <div className={`navBar ${isScrolled ? 'scrolled' : ''}`}>
          <h1 className="red h-min text-red-600 text-3xl font-sans self-center col-span-1">NETFLIX</h1>
          <button className="navButton">Home</button>
          <button className="navButton">TV Shows</button>
          <button className="navButton">Movies</button>
          <button className="navButton">New & Popular</button>
          <button className="navButton">My List</button>
          <button className="navButton">
              <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                      stroke="rgb(175, 174, 174)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </button>
          <button className="navButton">
              <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M12.0009 5C13.4331 5 14.8066 5.50571 15.8193 6.40589C16.832 7.30606 17.4009 8.52696 17.4009 9.8C17.4009 11.7691 17.846 13.2436 18.4232 14.3279C19.1606 15.7133 19.5293 16.406 19.5088 16.5642C19.4849 16.7489 19.4544 16.7997 19.3026 16.9075C19.1725 17 18.5254 17 17.2311 17H6.77066C5.47638 17 4.82925 17 4.69916 16.9075C4.54741 16.7997 4.51692 16.7489 4.493 16.5642C4.47249 16.406 4.8412 15.7133 5.57863 14.3279C6.1558 13.2436 6.60089 11.7691 6.60089 9.8C6.60089 8.52696 7.16982 7.30606 8.18251 6.40589C9.19521 5.50571 10.5687 5 12.0009 5ZM12.0009 5V3M9.35489 20C10.0611 20.6233 10.9888 21.0016 12.0049 21.0016C13.0209 21.0016 13.9486 20.6233 14.6549 20"
                      stroke="rgb(175, 174, 174)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </button>
          <button className="navButton" onClick={handleLoginClick}>
            <svg width="24px" height="24px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"  >
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="ic_fluent_person_48_filled" fill="rgb(175, 174, 174)">
                        <path d="M35.7502,28 C38.0276853,28 39.8876578,29.7909151 39.9950978,32.0427546 L40,32.2487 L40,33 C40,36.7555 38.0583,39.5669 35.0798,41.3802 C32.1509,43.1633 28.2139,44 24,44 C19.7861,44 15.8491,43.1633 12.9202,41.3802 C10.0319285,39.6218485 8.11862909,36.9249713 8.00532378,33.3388068 L8,33 L8,32.2489 C8,29.9703471 9.79294995,28.1122272 12.0440313,28.0048972 L12.2499,28 L35.7502,28 Z M24,4 C29.5228,4 34,8.47715 34,14 C34,19.5228 29.5228,24 24,24 C18.4772,24 14,19.5228 14,14 C14,8.47715 18.4772,4 24,4 Z">
                        </path>
                    </g>
                </g>
            </svg>
          </button>
      </div>
  );
}

export default NavBar;
