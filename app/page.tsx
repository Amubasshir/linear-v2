import { Container } from './components/Container';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div>
      <header>
        <Container>header</Container>
      </header>
      <main>
        <Container>
          <Hero
            title="Linear is a better way
to build products"
            subtitle="Meet the new standard for modern software development.
Streamline issues, sprints, and product roadmaps."
          />
        </Container>
      </main>
      <footer>
        <Container>Footer</Container>
      </footer>
    </div>
  );
}
