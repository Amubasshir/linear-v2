import Link from 'next/link';
import { Container } from './Container';
import { GithubIcon } from './icons/Github';
import { SlackIcon } from './icons/Slack';
import { TwitterIcon } from './icons/Twitter';
import { Logo } from './icons/logo';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { title: 'Features', href: '#' },
      { title: 'Integrations', href: '#' },
      { title: 'Pricing', href: '#' },
      { title: 'Changelog', href: '#' },
      { title: 'Docs', href: '#' },
      { title: 'Download', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About us', href: '#' },
      { title: 'Blog', href: '#' },
      { title: 'Careers', href: '#' },
      { title: 'Customers', href: '#' },
      { title: 'Brand', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { title: 'Community', href: '#' },
      { title: 'Contact', href: '#' },
      { title: 'DPA', href: '#' },
      { title: 'Terms of service', href: '#' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { title: 'API', href: '#' },
      { title: 'Status', href: '#' },
      { title: 'GitHub', href: '#' },
    ],
  },
];

export const Footer = () => (
  <footer className="mt-12 border-t border-transparent-white py-[5.6rem] text-sm">
    <Container className="flex flex-col justify-between lg:flex-row">
      <div>
        <div className="flex h-full flex-row justify-between lg:flex-col">
          <div className="flex cursor-pointer items-center text-grey transition-colors duration-500 hover:text-off-white">
            <Logo className="mr-4 h-4 w-4 " /> Linear - Designed worldwide
          </div>
          <div className="mt-auto flex items-center space-x-4 pl-1 ">
            <Link
              href="https://twitter.com/lastmubasshir"
              className=" flex text-grey"
            >
              <TwitterIcon className="transition-colors duration-300 hover:text-off-white" />
            </Link>
            <Link
              href="https://github.com/Amubasshir"
              className=" flex text-grey"
            >
              <GithubIcon className="transition-colors duration-300 hover:text-off-white" />
            </Link>
            <Link
              href="https://mubasshir-ahmed.vercel.app/"
              className=" flex text-grey"
            >
              <SlackIcon className="transition-colors duration-300 hover:text-off-white" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {footerLinks.map((column) => (
          <div
            key={column.title}
            className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]"
          >
            <h3 className="mb-3 font-medium">{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.title} className="[&_a]:last:mb-0">
                  <Link
                    className="mb-3 block text-grey transition-colors hover:text-off-white"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </footer>
);
