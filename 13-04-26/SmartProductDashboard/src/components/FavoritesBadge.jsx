function FavoritesBadge({ count }) {
  return (
    <div className="favorites-badge">
      <span>Favorites:</span>
      <strong>{count}</strong>
    </div>
  );
}

export default FavoritesBadge;
