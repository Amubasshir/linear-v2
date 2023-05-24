interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <div className="text-center">
      <h1 className="text-5xl">{title}</h1>
      <p className="text-lg">{subtitle}</p>
    </div>
  );
};

export default Hero;
