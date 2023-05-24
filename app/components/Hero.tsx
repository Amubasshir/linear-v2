interface HeroProps {
  children: React.ReactNode;
}

export const HeroTitle = ({ children }) => {
  return <h1 className="my-6 text-8xl">{children}</h1>;
};

export const HeroSubTitle = ({ children }) => {
  return <p className="mb-12 text-lg">{children}</p>;
};

const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>;
};

export default Hero;
