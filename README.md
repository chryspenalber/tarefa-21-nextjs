[Versão em Português](#portugues) | [English Version](#english)

---
<a id="portugues"></a>
## Versão em Português

# Portal Viagens — Next.js + TypeScript
**Projeto desenvolvido por Chrys Penalber**

Aplicação de portal de viagens desenvolvida com **Next.js** e **TypeScript**. O projeto apresenta uma página inicial, uma listagem de destinos turísticos e páginas individuais geradas a partir de dados locais.

---

## Objetivos

- Criar uma experiência de navegação entre página inicial, listagem de destinos e detalhes individuais.
- Demonstrar rotas dinâmicas no Next.js com `/destinos/[id]`.
- Organizar a interface em componentes reutilizáveis (`Layout`, `CardDestino`) e dados centralizados em `src/data/destinos.ts`.

---

## Links

- [**Live Site**](https://tarefa-21.vercel.app/)
- [**Repositório no GitHub**](https://github.com/chryspenalber/tarefa-21-nextjs)

---

## Principais Funcionalidades

- Página inicial (`/`) com chamada para a listagem de destinos.
- Página de destinos (`/destinos`) com cards renderizados a partir do array local `destinos`.
- Páginas dinâmicas de detalhe (`/destinos/[id]`) para cada destino cadastrado.
- Geração estática das rotas com `getStaticPaths` e `getStaticProps`.
- Navegação entre páginas com `next/link`.
- Imagens otimizadas com `next/image` usando assets da pasta `public/images`.

---

## Estrutura do Projeto

```text
next.config.ts
package.json
tsconfig.json
public/
  images/
    fernando-de-noronha.svg
    machu-picchu.svg
    paris.svg
    toquio.svg
src/
  components/
    CardDestino.module.css
    CardDestino.tsx
    Layout.module.css
    Layout.tsx
  data/
    destinos.ts
  pages/
    _app.tsx
    index.tsx
    destinos/
      index.tsx
      [id].tsx
  styles/
    DestinoDetalhe.module.css
    Destinos.module.css
    globals.css
    Home.module.css
```

---

## Estilos

- Estilos globais e variáveis CSS estão em `src/styles/globals.css`.
- As telas usam CSS Modules em `src/styles` para estilos por página.
- Os componentes `Layout` e `CardDestino` possuem estilos próprios em arquivos `.module.css`.

---

## Tecnologias

- Next.js — Framework React com roteamento e geração estática
- React — Biblioteca de UI
- TypeScript — Tipagem da aplicação
- CSS Modules — Estilos com escopo por componente e página
- CSS — Estilos globais em `src/styles/globals.css`

---

## Como executar

1. Instale dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra `http://localhost:3000` no navegador.

---

## Contato

- GitHub — [@chryspenalber](https://github.com/chryspenalber)
- LinkedIn — [Chrystiana Penalber](https://www.linkedin.com/in/chrystiana-penalber/)

---

<a id="english"></a>
## English Version

# Travel Portal — Next.js + TypeScript
**Project developed by Chrys Penalber**

Travel portal application built with **Next.js** and **TypeScript**. The project includes a home page, a tourist destination listing and individual detail pages generated from local data.

---

## Goals

- Create a navigation flow between the home page, destination listing and individual detail pages.
- Demonstrate dynamic routes in Next.js with `/destinos/[id]`.
- Organize the UI into reusable components (`Layout`, `CardDestino`) and centralize destination data in `src/data/destinos.ts`.

---

## Links

- [**Live Site**](https://tarefa-21.vercel.app/)
- [**GitHub Repository**](https://github.com/chryspenalber/tarefa-21-nextjs)

---

## Key Features

- Home page (`/`) with a call to the destination listing.
- Destinations page (`/destinos`) with cards rendered from the local `destinos` array.
- Dynamic detail pages (`/destinos/[id]`) for each registered destination.
- Static route generation with `getStaticPaths` and `getStaticProps`.
- Page navigation with `next/link`.
- Optimized images with `next/image` using assets from `public/images`.

---

## Project Structure

```text
next.config.ts
package.json
tsconfig.json
public/
  images/
    fernando-de-noronha.svg
    machu-picchu.svg
    paris.svg
    toquio.svg
src/
  components/
    CardDestino.module.css
    CardDestino.tsx
    Layout.module.css
    Layout.tsx
  data/
    destinos.ts
  pages/
    _app.tsx
    index.tsx
    destinos/
      index.tsx
      [id].tsx
  styles/
    DestinoDetalhe.module.css
    Destinos.module.css
    globals.css
    Home.module.css
```

---

## Styles

- Global styles and CSS variables are defined in `src/styles/globals.css`.
- Pages use CSS Modules in `src/styles` for page-specific styling.
- The `Layout` and `CardDestino` components have their own `.module.css` style files.

---

## Technologies

- Next.js — React framework with routing and static generation
- React — UI library
- TypeScript — Application typing
- CSS Modules — Scoped styles by component and page
- CSS — Global styles in `src/styles/globals.css`

---

## How to Run

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## Author / Contact

- GitHub — [@chryspenalber](https://github.com/chryspenalber)
- LinkedIn — [Chrystiana Penalber](https://www.linkedin.com/in/chrystiana-penalber/)
