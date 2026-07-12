import "./SummaryCard.css";

type SummaryCardProps = {
  title: string;
  value: number | string;
};

function SummaryCard({ title, value }: SummaryCardProps) {
  return (
    <article className="summary-card">
      <p>{title}</p>
      <h2>{value}</h2>
    </article>
  );
}

export default SummaryCard;
