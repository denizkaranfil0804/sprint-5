import { useState, useEffect } from "react";
import "./App.css";
import { events } from "./data/event";
import type { Category } from "./types/campus-event";
import type { PageName } from "./types/page";
import { searchEvents, filterByCategory, findEventById } from "./utils/filter-events";

import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import EventList from "./components/events/EventList";
import EventFilter from "./components/events/EventFilter";
import EventDetail from "./components/events/EventDetail";
import EventForm from "./components/forms/EventForm";

function App() {
  const [page, setPage] = useState<PageName>("home");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState<Category | "">("");

  const selected = selectedId ? findEventById(events, selectedId) : undefined;
  const pageTitle = selected ? selected.title : "Kampüs Etkinlikleri";

  useEffect(() => {
    document.title = `Kampüs Etkinlikleri - ${pageTitle}`;
  }, [pageTitle]);

  function go(next: PageName, id: string | null = null) {
    setPage(next);
    setSelectedId(id);
    window.scrollTo(0, 0);
  }

  const upcoming = [...events].sort((a, b) => a.date.localeCompare(b.date)).slice(0, 2);
  const filtered = filterByCategory(searchEvents(events, searchText), category);

  return (
    <>
      <Header 
        title="Kampüs Etkinlikleri" 
        text="Fakültedeki seminer, atölye ve söyleşileri tek yerden takip edin." 
      />
      <Navigation current={page} onNavigate={go} />

      <main>
        {page === "home" && (
          <section className="etkinlik-listesi">
            <h2>Yaklaşan 2 Etkinlik</h2>
            <EventList events={upcoming} onShowDetail={(id) => go("detail", id)} />
            <button className="tumunu-gor" onClick={() => go("events")}>Tüm etkinlikleri gör</button>
          </section>
        )}

        {page === "events" && (
          <section className="etkinlikler-sayfasi">
            <h2>Tüm Etkinlikler</h2>
            <EventFilter 
              searchText={searchText} 
              category={category} 
              onSearchChange={setSearchText} 
              onCategoryChange={setCategory} 
            />
            <p>{filtered.length} etkinlik listeleniyor.</p>
            <EventList 
              events={filtered} 
              onShowDetail={(id) => go("detail", id)} 
              emptyText="Bu kriterlere uygun etkinlik bulunamadı." 
            />
          </section>
        )}

        {page === "detail" && selected && (
          <EventDetail 
            event={selected} 
            onBack={() => go("events")} 
            onEdit={(id) => go("update", id)} 
          />
        )}

        {(page === "add" || page === "update") && (
          <EventForm 
            title={page === "add" ? "Etkinlik Ekle" : "Etkinlik Güncelle"} 
            onSubmit={() => window.scrollTo(0, 0)} 
          />
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;