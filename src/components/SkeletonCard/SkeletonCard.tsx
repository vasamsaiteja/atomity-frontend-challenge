import "./SkeletonCard.css";
function SkeletonCard() {
  return (
    <article className="skeleton-card">
      <div className="skeleton-avatar" />
      <div className="skeleton-line large" />
      <div className="skeleton-line" />
      <div className="skeleton-button" />
    </article>
  );
}

export default SkeletonCard;
