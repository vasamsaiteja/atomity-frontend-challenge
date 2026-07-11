import Hero from "./components/Hero/Hero";
import ProviderCard from "./components/ProviderCard/ProviderCard";
import "./App.css";
import { providers as intialProviders } from "./data/providers";
import { useState } from "react";

function App() {
  const [providers, setProviders] = useState(intialProviders);

  const increaseResources = (providerName: string) => {
    setProviders((currentProviders) =>
      currentProviders.map((provider) =>
        provider.name === providerName
          ? { ...provider, resources: provider.resources + 1 }
          : provider,
      ),
    );
  };
  return (
    <main>
      <Hero />
      <section className="providers">
        {providers.map((provider) => (
          <ProviderCard
            key={provider.name}
            provider={provider}
            onIncrease={increaseResources}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
