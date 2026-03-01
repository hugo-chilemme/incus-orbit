# CVODEX Auto-Routing API Template (Express)

Architecture API with **0 manual route declaration**:

- Folder = URL segment
- HTTP files are auto-mounted by name (`get.js`, `post.js`, etc.)
- Versioning by folders (`/api/v1`, `/api/v2`)
- Hierarchical `layout.js` middlewares (Next.js-like)
- Dynamic folders supported (`[id]` -> `:id`)

## Run

```bash
npm install
npm run dev
```

With logs:

```bash
npm run dev:log
npm run start:log
```

## Structure

```txt
src/
  api/
    v1/
      layout.js
      auth/
        layout.js
        register/
          post.js
        login/
          post.js
      users/
        get.js
        post.js
        [id]/
          get.js
      cv/
        get.js
        post.js
  core/
    autoLoader.js
```

Detailed behavior is documented in `docs/api-structure.md`.
