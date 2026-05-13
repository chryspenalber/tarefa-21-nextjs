# Portal Viagens

Aplicação em Next.js e TypeScript que simula um pequeno portal de viagens. O projeto apresenta uma página inicial, uma listagem de destinos turísticos e páginas individuais com detalhes de cada destino.

## Funcionalidades

- Página inicial (`/`) com apresentação do portal.
- Página de destinos (`/destinos`) com cards renderizados a partir de um array local.
- Rotas dinâmicas (`/destinos/[id]`) para informações detalhadas de cada destino.
- Componentes reutilizáveis `Layout` e `CardDestino`.
- Navegação com `next/link` no menu presente em todas as páginas.
- Estilização com CSS Modules.

## Como executar

```bash
npm install
npm run dev
```

Depois acesse `http://localhost:3000` no navegador.

## Scripts disponíveis

- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run build`: gera a versão de produção.
- `npm run start`: executa a versão de produção após o build.
- `npm run typecheck`: valida os tipos TypeScript.
