import { Button, Highlight } from './components/Button';
import { Container } from './components/Container';
import Hero, { HeroSubTitle, HeroTitle } from './components/Hero';
import { ChevronIcon } from './components/icons/Chevron';

export default function Home() {
  return (
    <Container className="pt-[3.4rem] md:pt-[6.4rem]">
      <Hero>
        <Button href="/" variant="secondary" size="small">
          Introducing Linear Insights <Highlight>→</Highlight>
        </Button>
        <HeroTitle>
          Linear is a better way <br className="hidden md:block" /> to build
          products
        </HeroTitle>
        <HeroSubTitle>
          Meet the new standard for modern software development.
          <br className="hidden md:block" /> Streamline issues, sprints, and
          product roadmaps.
        </HeroSubTitle>
        <Button href="/" variant="primary" size="large">
          Get Started
          <Highlight>
            <ChevronIcon />
          </Highlight>
        </Button>

        <img
          src="/hero.webp"
          alt="hero image"
          className="mt-[12.8rem] rounded-sm"
        />
      </Hero>
    </Container>
  );
}
