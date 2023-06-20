import { Button, Highlight } from '../Button';
import { Hero, HeroSubtitle, HeroTitle } from '../Hero';
import { HeroImage } from '../hero-image';
import { ChevronIcon } from '../icons/Chevron';

const HomePageHero = () => {
  return (
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
  );
};

export default HomePageHero;
