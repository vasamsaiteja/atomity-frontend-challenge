import Hero from "./components/Hero/Hero";
import ProviderCard from "./components/ProviderCard/ProviderCard";

const providers = ["AWS", "Azure", "Google Cloud"];

function App() {
  return (
    <main>
      <Hero />
      {providers.map((provider) => (
        <ProviderCard key={provider} name={provider} />
      ))}
    </main>
  );
}

export default App;
