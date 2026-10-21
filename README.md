https://sprint-5-eta.vercel.app/

# Kampüs Etkinlikleri - Sprint 5 (React Bileşen Mimarisi)
**Ad Soyad:** Deniz Karanfil
**Öğrenci No:** 2416501047

## Bu Sprintte Neler Yapıldı?
Sprint 4'te tek bir `App.tsx` dosyasında (yaklaşık 270 satır) yazılan kodlar, görsel hiçbir değişiklik olmadan parçalara bölünerek tekrar kullanılabilir **React Bileşenlerine (Components)** ayrılmıştır. State yönetimi ana `App.tsx` üzerinde (lifting state) tutulmuş, alt bileşenlerle veri ve olay (event) iletişimi `props` ve `callback` fonksiyonları aracılığıyla sağlanmıştır. Ana dosya 90 satır civarına indirilmiştir.

## Klasör ve Bileşen Yapısı (`src/`)

### 1. `components/layout/`
* **`Header.tsx`**: Sayfa üst bilgi ve başlık alanı. Props ile dışarıdan başlık alır.
* **`Navigation.tsx`**: Sayfalar arası geçişi sağlayan menü butonları. Aktif sayfayı ve tıklama olayını yönetir.
* **`Footer.tsx`**: Alt bilgi alanı (statik, props almaz).

### 2. `components/events/`
* **`EventList.tsx`**: Etkinlik dizisini alıp haritalayarak (`map`) çizen liste kapsayıcı bileşeni.
* **`EventCard.tsx`**: Tek bir etkinliğin özetini (tarih, kontenjan, yer vb.) gösteren kart bileşeni.
* **`EventFilter.tsx`**: Arama metni ve kategori seçim arayüzü. Değişimleri anında yukarıya (App) bildirir.
* **`EventDetail.tsx`**: Seçilen etkinliğin detaylarını, afişini gösteren ve güncelleme/geri dönme butonlarını barındıran bileşen.

### 3. `components/forms/`
* **`EventForm.tsx`**: Etkinlik ekleme ve güncelleme sayfalarında ortak olarak kullanılan form bileşeni. Form gönderimini (submit) engeller ve üst bileşene bildirir.

### 4. Diğer Yardımcı Dosyalar
* **`types/page.ts`**: Sayfa isimlerini standartlaştıran `PageName` tipi.
* **`utils/format-date.ts`**: Tarih verilerini daha okunaklı formata (örn. 12 Ekim 2026) çeviren yardımcı fonksiyon.
