/* eslint-disable react/prop-types */

import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navdata = ({ onClose = null }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const navLists = [
    {
      label: "Home",
      href: "/",
      active: pathname == "/",
    },
    {
      label: "About",
      href: "/",
      active: pathname === "/about",
    },
    {
      label: "Shop",
      href: "/shop",
      active: pathname === "/shop",
    },
    {
      label: "FAQs",
      href: "/faqs",
      active: pathname === "/faqs",
    },
  ];

  return (
    <nav>
      <ul className="flex flex-col items-start gap-y-5 md:flex-row md:items-center md:gap-x-[60px]">
        {navLists.map((li, i) => (
          <li key={i} onClick={onClose}>
            <Link
              to={li.href}
              className={cn(
                `text-primary400 cursor-pointer transition-all duration-300 hover:font-medium md:text-lg`,
                li.active && "font-bold",
              )}
            >
              {li.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navdata;
