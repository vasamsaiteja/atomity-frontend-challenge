type ProviderCardProps = {
  name: string;
};

function ProviderCard({ name }: ProviderCardProps) {
  return <div>{name}</div>;
}

export default ProviderCard;
