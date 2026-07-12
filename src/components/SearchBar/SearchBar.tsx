import "./SearchBar.css";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Search team members..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-bar"
      />
    </div>
  );
}

export default SearchBar;
