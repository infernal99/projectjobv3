# ProntoJob — Next.js 15

Versión migrada de Vite + Express a **Next.js 15 App Router**.

## Estructura

```
prontojob-next/
├── app/
│   ├── layout.tsx           ← Root layout (reemplaza App.tsx + main.tsx)
│   ├── page.tsx             ← Home
│   ├── explore/page.tsx
│   ├── job/[id]/page.tsx
│   ├── post-job/page.tsx
│   ├── wallet/page.tsx
│   ├── profile/page.tsx
│   ├── profile/[id]/page.tsx
│   ├── pro-plans/page.tsx
│   ├── how-it-works/page.tsx
│   ├── security/page.tsx
│   ├── help/page.tsx
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   └── api/
│       └── jobs/route.ts    ← Reemplaza server.ts (Express)
├── components/
│   └── Layout.tsx           ← Navbar + Footer
├── context/
│   └── AuthContext.tsx
├── data/
│   └── mockData.ts
├── lib/
│   └── constants.ts
├── types/
│   └── index.ts
└── middleware.ts             ← Protección de rutas
```

## Setup

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar entorno
cp .env.example .env.local
# Edita .env.local con tus claves

# 3. Desarrollo
npm run dev

# 4. Producción
npm run build
npm start
```

## Cambios principales vs versión anterior

| Antes (Vite) | Ahora (Next.js) |
|---|---|
| `react-router-dom` | `next/link` + `useRouter` |
| `useNavigate()` | `useRouter().push()` |
| `useParams()` | `useParams()` de `next/navigation` |
| `server.ts` (Express) | `app/api/*/route.ts` |
| `vite.config.ts` | `next.config.ts` |
| `src/main.tsx` | `app/layout.tsx` |
| `src/App.tsx` | `app/layout.tsx` |
| `@tailwindcss/vite` | `@tailwindcss/postcss` |

## Mejoras aplicadas

- ✅ Countdown real en página de Planes PRO (antes era estático)
- ✅ Botones "Impulsa tu perfil" ahora son Links a `/pro-plans`
- ✅ Categorías en Home son clicables y filtran en Explore
- ✅ Botón "Registrarme como profesional" en CTA va a `/register`
- ✅ `useAuth()` corregido en ProPlans (era `currentUser`, no existía)
