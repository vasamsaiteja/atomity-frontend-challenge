import type { Provider } from "../../types/Provider";
import "./ProviderCard.css";

type ProviderCardProps = {
  provider: Provider;
};

function ProviderCard({ provider }: ProviderCardProps) {
  return (
    <article className="provider-card">
      <h2>{provider.name}</h2>
      <p>Cloud Provider</p>
      <strong>{provider.resources}</strong>
      {/* <button onClick={() => onIncrease(provider.name)}>+</button> */}
    </article>
  );
}

export default ProviderCard;
