import Hero from "./components/Hero/Hero";
import ProviderCard from "./components/ProviderCard/ProviderCard";
import "./App.css";
import { providers } from "./data/providers";

function App() {
  return (
    <main>
      <Hero />
      <section className="providers">
        {providers.map((provider) => (
          <ProviderCard
            key={provider.name}
            name={provider.name}
            resources={provider.resources}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
