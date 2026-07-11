import "./ProviderCard.css";

type ProviderCardProps = {
  name: string;
  resources: number;
};

function ProviderCard({ name, resources }: ProviderCardProps) {
  return (
    <article className="provider-card">
      <h2>{name}</h2>
      <p>Cloud Provider</p>
      <strong>{resources}</strong>
    </article>
  );
}

export default ProviderCard;
