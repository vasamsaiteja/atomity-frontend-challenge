import Hero from "./components/Hero/Hero";
import ProviderCard from "./components/ProviderCard/ProviderCard";
import "./App.css";

const providers = [
  {
    name: "AWS",
    resources: 120,
  },
  {
    name: "Azure",
    resources: 95,
  },
  {
    name: "Google Cloud",
    resources: 110,
  },
  {
    name: "Oracle Cloud",
    resources: 80,
  },
];

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
