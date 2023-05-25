import Link from 'next/link';
import { Button } from './Button';
import { Container } from './Container';
import { Logo } from './icons/logo';

const Header = () => {
  return (
    <header className="fixed left-0 top-0 w-full border-b border-transparent-white ">
      <Container className="flex h-[var(--navigation-height)] items-center ">
        <Link
          href="/"
          className="flex items-center text-lg font-semibold tracking-wide"
        >
          <Logo className="mr-3 h-5 w-5" />
          Linear
        </Link>

        <nav className="h-full">
          <ul className="flex h-full items-center [&_a]:text-sm [&_li]:ml-6">
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Method</Link>
            </li>
            <li>
              <Link href="#">Customer</Link>
            </li>
            <li>
              <Link href="#">Changelog</Link>
            </li>
            <li>
              <Link href="#">Integrations</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Company</Link>
            </li>
          </ul>
        </nav>

        <div className="ml-auto flex h-full items-center">
          <Link className="mr-6 text-sm" href="#">
            Log in
          </Link>
          <Button href="#" variant="primary">
            Sign up
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
