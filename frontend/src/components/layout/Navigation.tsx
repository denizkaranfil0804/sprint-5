import type { PageName } from "../../types/page";

interface NavigationProps {
  current: PageName;
  onNavigate: (page: PageName) => void;
}

function Navigation({ current, onNavigate }: NavigationProps) {
  return (
    <nav className="menu">
      <button 
        onClick={(e) => { e.preventDefault(); onNavigate("home"); }} 
        aria-current={current === "home" ? "page" : undefined}>Ana Sayfa</button>
      <button 
        onClick={(e) => { e.preventDefault(); onNavigate("events"); }} 
        aria-current={current === "events" ? "page" : undefined}>Etkinlikler</button>
      <button 
        onClick={(e) => { e.preventDefault(); onNavigate("add"); }} 
        aria-current={current === "add" ? "page" : undefined}>Ekle</button>
    </nav>
  );
}
export default Navigation;