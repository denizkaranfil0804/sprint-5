[[[# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
](https://sprint-4-gruf.vercel.app

# Kampüs Etkinlikleri - Sprint 4 (React & TypeScript)
**Ad Soyad:** Deniz Karanfil
**Öğrenci No:** 2416501047

## Proje Dosyaları ve Görevleri

* **`package.json`**: Proje adı, komutlar (dev, build) ve kullanılacak paket listesini barındırır.
* **`package-lock.json`**: Yüklenen paketlerin tam sürümlerini kilitleyerek herkesin aynı sürümü kullanmasını sağlar.
* **`node_modules/`**: İndirilen paketlerin kodlarının bulunduğu klasördür (GitHub'a gönderilmez).
* **`tsconfig*.json`**: TypeScript derleyicisinin projeye özel ayarlarını içerir.
* **`vite.config.ts`**: Vite geliştirme ortamı ayarları ve React eklentisi yapılandırmasını tutar.
* **`index.html`**: Uygulamanın ana HTML dosyasıdır ve içinde React'in yerleştiği boş `div#root` alanını barındırır.
* **`src/main.tsx`**: React uygulamasını başlatan ve `App` bileşenini `root` elementine çizen giriş dosyasıdır.
* **`src/App.tsx`**: Uygulamanın sayfalarını, geçişlerini ve tüm state mantığını yöneten ana bileşenidir.
* **`src/App.css`**: Uygulamanın (Sprint 3'ten taşınan) bileşen stillerini içerir.
* **`src/index.css`**: Tüm projeyi kapsayan genel stil dosyasıdır (bu sprintte çakışmayı önlemek için boşaltılmıştır).
* **`public/`**: Afiş görselleri gibi herhangi bir derleme işlemine girmeden doğrudan sunulan statik dosyaları tutar.)](https://sprint-4-gruf.vercel.app

# Kampüs Etkinlikleri - Sprint 4 (React & TypeScript)
**Ad Soyad:** Deniz Karanfil
**Öğrenci No:** 2416501047

## Proje Dosyaları ve Görevleri

* **`package.json`**: Proje adı, komutlar (dev, build) ve kullanılacak paket listesini barındırır.
* **`package-lock.json`**: Yüklenen paketlerin tam sürümlerini kilitleyerek herkesin aynı sürümü kullanmasını sağlar.
* **`node_modules/`**: İndirilen paketlerin kodlarının bulunduğu klasördür (GitHub'a gönderilmez).
* **`tsconfig*.json`**: TypeScript derleyicisinin projeye özel ayarlarını içerir.
* **`vite.config.ts`**: Vite geliştirme ortamı ayarları ve React eklentisi yapılandırmasını tutar.
* **`index.html`**: Uygulamanın ana HTML dosyasıdır ve içinde React'in yerleştiği boş `div#root` alanını barındırır.
* **`src/main.tsx`**: React uygulamasını başlatan ve `App` bileşenini `root` elementine çizen giriş dosyasıdır.
* **`src/App.tsx`**: Uygulamanın sayfalarını, geçişlerini ve tüm state mantığını yöneten ana bileşenidir.
* **`src/App.css`**: Uygulamanın (Sprint 3'ten taşınan) bileşen stillerini içerir.
* **`src/index.css`**: Tüm projeyi kapsayan genel stil dosyasıdır (bu sprintte çakışmayı önlemek için boşaltılmıştır).
* **`public/`**: Afiş görselleri gibi herhangi bir derleme işlemine girmeden doğrudan sunulan statik dosyaları tutar.)](https://sprint-4-gruf.vercel.app

# Kampüs Etkinlikleri - Sprint 4 (React & TypeScript)
**Ad Soyad:** Deniz Karanfil
**Öğrenci No:** 2416501047

## Proje Dosyaları ve Görevleri

* **`package.json`**: Proje adı, komutlar (dev, build) ve kullanılacak paket listesini barındırır.
* **`package-lock.json`**: Yüklenen paketlerin tam sürümlerini kilitleyerek herkesin aynı sürümü kullanmasını sağlar.
* **`node_modules/`**: İndirilen paketlerin kodlarının bulunduğu klasördür (GitHub'a gönderilmez).
* **`tsconfig*.json`**: TypeScript derleyicisinin projeye özel ayarlarını içerir.
* **`vite.config.ts`**: Vite geliştirme ortamı ayarları ve React eklentisi yapılandırmasını tutar.
* **`index.html`**: Uygulamanın ana HTML dosyasıdır ve içinde React'in yerleştiği boş `div#root` alanını barındırır.
* **`src/main.tsx`**: React uygulamasını başlatan ve `App` bileşenini `root` elementine çizen giriş dosyasıdır.
* **`src/App.tsx`**: Uygulamanın sayfalarını, geçişlerini ve tüm state mantığını yöneten ana bileşenidir.
* **`src/App.css`**: Uygulamanın (Sprint 3'ten taşınan) bileşen stillerini içerir.
* **`src/index.css`**: Tüm projeyi kapsayan genel stil dosyasıdır (bu sprintte çakışmayı önlemek için boşaltılmıştır).
* **`public/`**: Afiş görselleri gibi herhangi bir derleme işlemine girmeden doğrudan sunulan statik dosyaları tutar.)
