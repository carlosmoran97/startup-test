"use client";

import { ReactNode, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface IHeaderProps {
  children?: ReactNode;
}

const Header = ({ children }: IHeaderProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className={`
      flex justify-between pt-8 px-4 pb-4
      lg:pt-14 lg:px-14 lg:pb-6
    `}>
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="El Salvador"
          width={602}
          height={81}
          className="max-w-[60vw] h-auto md:max-w-[400px] xl:max-w-[602px] cursor-pointer"
          priority
        />
      </Link>
      {children && (
        <div className="hidden lg:block">
          {children}
        </div>
      )}
      {children && (
        <div className="block lg:hidden">
          <button
            aria-label="Open menu"
            className="p-2"
            onClick={() => setOpen(!open)}
          >
            <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
          </button>
        </div>
      )}
      {open && (
        <div
          className="fixed top-0 right-0 w-full max-w-4xl h-full bg-white shadow-lg z-50 flex flex-col items-end pt-8 px-4 lg:hidden"
        >
          <button
            aria-label="Close menu"
            className="mb-8 w-10 h-10 flex items-center justify-center"
            onClick={() => setOpen(false)}
          >
            <div>
              <span className="block w-6 h-0.5 bg-gray-800 rotate-45"></span>
              <span className="block w-6 h-0.5 bg-gray-800 -rotate-45"></span>
            </div>
          </button>
          <div className="w-full">{children}</div>
        </div>
      )}
    </header>
  );
};

export default Header;
