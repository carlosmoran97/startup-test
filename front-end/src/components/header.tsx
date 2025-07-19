import { ReactNode } from 'react';
import Image from 'next/image';


interface IHeaderProps {
  children?: ReactNode;
}

const Header = ({ children }: IHeaderProps) => {
  return (
    <header className="flex justify-between pt-14 px-14 pb-6">
      <Image
        src="/images/logo.png"
        alt="El Salvador"
        width={602}
        height={81}
      />
      {children && (<>
        {children}
      </>)}
    </header>
  );
};

export default Header;
