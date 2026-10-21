import type { Category } from "../../types/campus-event";

interface EventFilterProps {
  searchText: string;
  category: Category | "";
  onSearchChange: (text: string) => void;
  onCategoryChange: (cat: Category | "") => void;
}

function EventFilter({ searchText, category, onSearchChange, onCategoryChange }: EventFilterProps) {
  return (
    <div className="filtreler">
      <input
        type="search"
        placeholder="Etkinlik ara..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select value={category} onChange={(e) => onCategoryChange(e.target.value as Category | "")}>
        <option value="">Tümü</option>
        <option value="Seminer">Seminer</option>
        <option value="Atölye">Atölye</option>
        <option value="Söyleşi">Söyleşi</option>
        <option value="Yarışma">Yarışma</option>
      </select>
    </div>
  );
}
export default EventFilter;