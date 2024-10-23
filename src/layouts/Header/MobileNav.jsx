/* eslint-disable no-unused-vars */

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import Navdata from "./Navdata";

const MobileNav = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <section className="w-ful md:hidden ">
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger className="bg-baseWhite flex size-12 items-center justify-center rounded-full p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
          >
            <path
              d="M1.33325 1.16669L14.6666 1.16669"
              stroke="#0A0A0A"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.33325 7L14.6666 7"
              stroke="#0A0A0A"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.33325 12.8333L14.6666 12.8333"
              stroke="#0A0A0A"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="flex h-screen w-full max-w-[500px] flex-col border-none bg-white px-0 pt-0  z-[90]"
        >
          {/* header */}
          <div className="flex items-center justify-between border-b border-[#F0F0F0] px-4 py-4">
            {/* logo */}
            <img src={"/logo.webp"} alt="logo" className="h-[45px] w-[71px]" />

            {/* close */}
            <SheetClose className="flex size-12 items-center justify-center rounded-full bg-white p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M12.8337 1.16656L1.16699 12.8332M1.16699 1.16656L12.8337 12.8332"
                  stroke="#0A0A0A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </SheetClose>
          </div>

          <div className="mt-6 px-5">
            <Navdata onClose={() => setIsSheetOpen(false)} />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
