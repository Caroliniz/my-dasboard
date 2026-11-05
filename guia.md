# Prettier + EditorConfig + LF (UC15 · Dashboard React)

Pacote de configuração padrão para o projeto **my-dashboard** (React 19 + Vite + Tailwind v4 + Oxlint).

**Papéis:**

- **Prettier** → formatação (espaços, aspas, ponto e vírgula, fim de linha).
- **Oxlint** → lint (regras de qualidade). **Não use ESLint** neste projeto.
- **EditorConfig** → regras básicas do editor (charset, LF, indentação).
- **`.gitattributes`** → força LF no Git em qualquer sistema operacional.

Este pacote **não substitui** o material `uc15-vscode-config` (checkJs, Oxc, Tailwind CSS IntelliSense). Os dois se complementam: aquele cuida de erros no editor; este cuida de formatação e CRLF/LF.

---

## 1. O que copiar para a raiz do projeto

Copie estes arquivos para a **raiz** do dashboard (a pasta que tem `package.json`):

| Arquivo                   | Ação                                                    |
| ------------------------- | ------------------------------------------------------- |
| `.prettierrc.json`        | copiar (ou substituir se já existir um Prettier antigo) |
| `.prettierignore`         | copiar                                                  |
| `.editorconfig`           | copiar                                                  |
| `.gitattributes`          | copiar                                                  |
| `.vscode/settings.json`   | **mesclar** com o que já existir (ver seção 4)          |
| `.vscode/extensions.json` | **mesclar** recomendações (ver seção 4)                 |

Não apague `jsconfig.json`, `.oxlintrc.json`, `vite.config.js` nem o `settings.json` antigo que liga o checkJs / Tailwind.

---

## 2. Instalar o Prettier no projeto

No terminal, na raiz do projeto:

```bash
npm install -D prettier
```

No `package.json`, **adicione** (não substitua o objeto `scripts` inteiro) estas entradas:

```json
"format": "prettier --write .",
"format:check": "prettier --check ."
```

Exemplo do bloco depois da mescla (mantenha `dev`, `build`, `lint` etc.):

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "oxlint",
  "format": "prettier --write .",
  "format:check": "prettier --check ."
}
```

Comandos:

- `npm run format` → formata os arquivos de texto suportados e normaliza LF.
- `npm run format:check` → só verifica (útil no CI ou antes de entregar).

**Tailwind v4:** não é obrigatório instalar plugin de ordenação de classes do Prettier. Deixe o padrão simples.

---

## 3. Extensões no VS Code

Ao abrir o projeto, o VS Code deve sugerir as recomendações. Se não sugerir, instale manualmente (`Ctrl+Shift+X`):

| Extensão     | ID                          |
| ------------ | --------------------------- |
| Prettier     | `esbenp.prettier-vscode`    |
| EditorConfig | `EditorConfig.EditorConfig` |
| Oxc (Oxlint) | `oxc.oxc-vscode`            |

Depois: Paleta (`Ctrl+Shift+P`) → `Developer: Reload Window`.

Confirme no canto inferior direito, ao salvar um `.jsx`, que o formatador usado é o Prettier.

---

## 4. Mesclar `.vscode/settings.json` (importante)

O material antigo de erros no editor (`uc15-vscode-config`) pode ter:

```json
"editor.formatOnSave": false
```

Para o Prettier funcionar no save, essa chave precisa ficar **`true`**.

**Como mesclar:** mantenha as chaves úteis do pacote antigo (checkJs implícito via `jsconfig.json`, associação Tailwind, Oxc se já estiver, Error Lens etc.) e incorpore as chaves deste pacote:

- `editor.defaultFormatter`: `esbenp.prettier-vscode`
- `editor.formatOnSave`: `true`
- `files.eol`: `"\n"`
- formatadores por linguagem (`[javascript]`, `[javascriptreact]`, `[json]`, `[css]`, `[markdown]` etc.)

Em `extensions.json`, una as listas `recommendations` sem duplicar IDs. Pode manter Tailwind CSS IntelliSense e Error Lens do pacote antigo.

Não invente chaves `oxc.*` novas. A extensão Oxc recomenda-se pelo ID; o lint continua sendo o Oxlint do projeto (`npm run lint`).

---

## 5. CRLF × LF — o que cada peça faz

| Peça                                            | O que resolve                                            | O que **não** resolve sozinha                  |
| ----------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------- |
| `.editorconfig`                                 | arquivos **novos** e editores que respeitam EditorConfig | não converte arquivos já salvos com CRLF       |
| `.gitattributes`                                | checkout/commit com LF (autoridade no repositório)       | não formata estilo de código                   |
| Prettier (`endOfLine: "lf"` + `npm run format`) | formata e normaliza LF nos textos que o Prettier conhece | não mexe em binários nem em arquivos ignorados |
| `files.eol: "\n"` no VS Code                    | padrão de fim de linha ao salvar no editor               | não reescreve o histórico do Git               |

Fluxo recomendado na sala:

1. Copiar os arquivos deste pacote.
2. `npm install -D prettier` e scripts `format` / `format:check`.
3. Revisar e **commitar** o trabalho atual (se ainda não estiver commitado).
4. Rodar `npm run format` uma vez.
5. Conferir o diff e commitar a formatação (mensagem sugerida: `style: apply prettier and lf`).

### Git (por repositório)

O `.gitattributes` com `* text=auto eol=lf` é a fonte preferida de verdade.

Se ainda aparecer CRLF em algum PC Windows, oriente **neste repositório** (não precisa mudar a config global do aluno):

```bash
git config core.autocrlf false
git config core.eol lf
```

### Renormalizar arquivos já rastreados (opcional)

Só depois de revisar e, de preferência, ter um commit limpo do estado atual. **Não rode automaticamente** em massa sem olhar o diff.

```bash
git add --renormalize .
git diff --cached
```

- `git add --renormalize .` → prepara (stage) a normalização de fim de linha dos arquivos **já rastreados**.
- `git diff --cached` → mostra exatamente o que entrou no stage (só normalização ou também mudanças de conteúdo).
- Se o diff estiver correto: `git commit -m "chore: normalize line endings to lf"`.
- Se algo estranho aparecer: `git restore --staged .` e investigue antes de commitar.

Não use comandos destrutivos (`reset --hard`, limpeza forçada) para “consertar” CRLF.

---

## 6. Markdown: espaços duplos no fim da linha

Em Markdown, dois espaços no fim da linha criam uma quebra de linha forçada. Por isso o `.editorconfig` tem:

```ini
[*.md]
trim_trailing_whitespace = false
```

O Prettier também formata Markdown; se um README depender desses espaços, avise a turma ou ajuste o trecho. Em geral, preferir listas ou parágrafo novo em vez de “two trailing spaces”.

---

## 7. Conferência rápida (checklist)

1. Extensão Prettier instalada e `editor.defaultFormatter` apontando para ela.
2. Salvar um `.jsx` bagunçado → o arquivo se organiza sozinho.
3. `npm run format:check` → sem erros.
4. `npm run lint` → Oxlint continua funcionando (formatação ≠ lint).
5. No Git: `git grep -I $'\r' -- .` (opcional) ou abrir o arquivo no VS Code e ver `LF` na barra de status.

---

## 8. Conteúdo deste pacote

```
react-prettier-lf/
├── .prettierrc.json
├── .prettierignore
├── .editorconfig
├── .gitattributes
├── .vscode/
│   ├── settings.json
│   └── extensions.json
└── guia.md
```

Padrão Prettier deste curso: 2 espaços, ponto e vírgula, aspas simples, `trailingComma: "all"`, `printWidth: 80`, `endOfLine: "lf"`.
