import Hero from "./components/Hero/Hero";
import ProviderCard from "./components/ProviderCard/ProviderCard";

function App() {
  return (
    <main>
      <Hero />
      <ProviderCard name="AWS" />
      <ProviderCard name="Azure" />
      <ProviderCard name="Google Cloud" />
    </main>
  );
}

export default App;
