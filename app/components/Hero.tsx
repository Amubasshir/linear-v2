interface HeroProps {
  children: React.ReactNode;
}

export const HeroTitle = ({ children }) => {
  return (
    <h1 className="text-gradient my-6 text-6xl font-medium md:text-8xl">
      {children}
    </h1>
  );
};

export const HeroSubTitle = ({ children }) => {
  return (
    <p className="mb-12 text-center text-md text-primary-text md:text-xl">
      {children}
    </p>
  );
};

const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>;
};

export default Hero;
