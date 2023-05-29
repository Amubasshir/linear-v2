import classNames from 'classnames';
import { Button, Highlight } from './components/Button';
import { Container } from './components/Container';
import { Hero, HeroSubtitle, HeroTitle } from './components/Hero';
import Clients from './components/clients';
import { HeroImage } from './components/hero-image';
import { ChevronIcon } from './components/icons/Chevron';
import { StarsIllustration } from './components/icons/Star';

export default function Home() {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem] ">
        <Container className="pt-[6.4rem]">
          <Hero>
            <Button
              className="animate-fade-in"
              href="/"
              variant="secondary"
              size="small"
            >
              Introducing Linear Insights <Highlight>→</Highlight>
            </Button>
            <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              Linear is a better way <br className="hidden md:block" /> to build
              products
            </HeroTitle>
            <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              Meet the new standard for modern software development.
              <br className="hidden md:block" /> Streamline issues, sprints, and
              product roadmaps.
            </HeroSubtitle>
            <Button
              className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]"
              href="/"
              variant="primary"
              size="large"
            >
              Get Started
              <Highlight>
                <ChevronIcon />
              </Highlight>
            </Button>
            <HeroImage />
          </Hero>
        </Container>
      </div>
      <Container>
        <Clients />
        <div
          className={classNames(
            'relative my-[-12.8rem] h-[60rem] overflow-hidden',
            '[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]',
            'after:absolute after:-left-1/2 after:top-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t  after:border-[rgba(120,_119,_198,_0.4)] after:bg-background'
          )}
        >
          <StarsIllustration />
        </div>
      </Container>
    </>
  );
}
