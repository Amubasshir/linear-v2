import Link from 'next/link';
import { Logo } from './icons/logo';

const Header = () => {
  return (
    <header className="mx-10">
      <Link href="/">
        <Logo /> Linear
      </Link>
    </header>
  );
};

export default Header;
