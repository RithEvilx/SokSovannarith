# Portfolio Project Maintenance Guide

This guide outlines where to update content, styles, and structure for the portfolio.

## 📍 Quick Reference Map

| I want to change...      | File / Folder Path        | Notes                                 |
| :----------------------- | :------------------------ | :------------------------------------ |
| **Global Theme/Colors**  | `src/theme.ts`            | Define Chakra UI tokens & breakpoints |
| **Website Content/Data** | `src/constants/data`      | Main text and info                    |
| **Data Types (TS)**      | `src/types`               | TypeScript type                       |
| **Profile Images**       | `public/profiles`         | Referenced in `src/constants/app.tsx` |
| **Global Styles**        | `src/constants/style.tsx` | Reusable styles & themes              |
| **App Routes**           | `src/router.tsx`          | URL path configurations               |
| **Translations**         | `src/assets/languages`    | Multi-language JSON/files             |
| **Layout Structure**     | `src/layout`              | Headers, footers, sidebars            |
| **UI Components**        | `src/components/common`   | Buttons, Cards, Inputs                |
| **Page Views**           | `src/views/LandingPage`   | `index.tsx` is the entry point        |

---

## 🎨 Theme & Design System (Chakra UI)

The file `src/theme.ts` uses `defineConfig` and `defineTokens` to manage the app's look.

- **Colors:** To add new colors (e.g., `primaryColor`), add them inside the `tokens.colors` object.
- **Breakpoints:** If you need to adjust when the layout changes for mobile or tablet, modify the `config.theme.breakpoints` section.

## 🏗️ Global Layout (`src/layout`)

The `PublicLayout.tsx` file defines the **container shape** for the entire application.

- **Structure:** It uses a `<Box>` to wrap the `<Outlet />`.
- **Global Sizing:** Adjust the `padding` here to change the width and margins for every page at once (e.g., the `20%` side margins for large screens).
- **Persistence:** Anything added here (like a Navbar or Footer) will stay visible as the user navigates between different views.

## 🖼️ Media & Assets

- **Profile Photos:** Upload new images to `/public/profiles`.
- **Linkage:** After uploading, update the import paths inside `src/constants/app.tsx` so the app knows which new image to display.

## 🧩 Components vs. Views

To keep the architecture clean, follow this rule:

- **Common:** Small, reusable UI pieces (e.g., a generic `Button`).
- **Views:** Full page compositions (e.g., `AboutMe` page) located in `src/views`. `index.tsx` serves as the main entry point for your views.

## 💡 Pro-Tips for Editing

1.  **Adding a Page:** Create the file in `src/views`, then register the path in `src/router.tsx`.
2.  **Using Theme Colors:** When using colors in your styles, use the names defined in `theme.ts` (e.g., `bgForDark`).
