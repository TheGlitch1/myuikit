# myUiLib

A **CSS-first component library** extracted from a GitHub-dark admin dashboard. Drop in one stylesheet and get a complete set of UI components that work in plain HTML, Vue 3, React, or any server-rendered template (Symfony/Twig, Laravel Blade, etc.).

> **CSS is the product. Framework wrappers are optional.**

---

## Why CSS-first?

Most component libraries lock you into a framework. myUiLib ships pure CSS class names as the API. A developer using plain HTML can use `class="btn btn--primary"`. A Vue developer can use the thin `<Button>` wrapper that applies the same class. A React developer uses the class name directly. The design system survives stack changes.

---

## Visual Style

GitHub-dark aesthetic. Monospace font. Dense information layout suited to admin panels, dashboards, and developer tools.

- Background: `#0d1117` (deepest) → `#161b22` (cards) → `#1c2128` (inputs)
- Accent: `#58a6ff` (blue) / `#3fb950` (green) / `#f85149` (red)
- Font: `'SF Mono', 'Fira Code', monospace` at `12px`

---

## Installation

### Option A — Copy into your project

```bash
cp -r myUiLib /your-project/assets/vendor/myuilib
```

### Option B — npm link (local development)

```bash
# In the myUiLib directory
npm link

# In your project
npm link myuilib
```

### Option C — npm install (if published)

```bash
npm install myuilib
```

---

## Quick Start

### Plain HTML / Twig / Blade

Add one `<link>` tag. That's it.

```html
<link rel="stylesheet" href="/vendor/myuilib/index.css">

<button class="btn btn--primary">Save</button>
<span class="badge badge--success">Active</span>

<div class="card">
  <div class="card__title">Stats</div>
  <div class="card__body">Content here</div>
</div>
```

### Vue 3

```js
// main.js
import 'myuilib/index.css'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

```vue
<!-- Any component -->
<script setup>
import { Button, Badge, Card, FormField, Input } from 'myuilib/vue'
</script>

<template>
  <Card title="New Incident">
    <FormField label="Title" required :error="errors.title">
      <Input v-model="form.title" placeholder="Incident title..." />
    </FormField>
    <template #footer>
      <Button variant="secondary" @click="cancel">Cancel</Button>
      <Button variant="primary" :loading="saving" @click="save">Save</Button>
    </template>
  </Card>
</template>
```

### React

Import the CSS once in your entry file, then use class names directly.

```js
// src/index.jsx
import 'myuilib/index.css'
```

```jsx
// Any component
export function SaveButton({ loading }) {
  return (
    <button className={`btn btn--primary${loading ? ' btn--loading' : ''}`}>
      Save
    </button>
  )
}

export function StatusBadge({ status }) {
  const variant = status === 'ok' ? 'success' : status === 'warn' ? 'warning' : 'error'
  return <span className={`badge badge--${variant}`}>{status}</span>
}
```

---

## Components

| Component | CSS Classes | Vue Wrapper | Description |
|-----------|------------|-------------|-------------|
| **Button** | `.btn`, `.btn--primary/secondary/ghost/danger`, `.btn--sm/md/lg`, `.btn--loading` | `<Button>` | Action button with variants and loading state |
| **Input** | `.input-field`, `.input`, `.input-field--error`, `.input-field__prefix/suffix` | `<Input>` | Text input with v-model, error state, slots |
| **Select** | `.select-field`, `.select`, `.select-field--error` | `<Select>` | Native select with consistent styling |
| **FormField** | `.form-field`, `.form-field__label`, `.form-field__error`, `.form-field__help` | `<FormField>` | Label + control + error/help wrapper |
| **Badge** | `.badge`, `.badge--success/warning/error/info/neutral` | `<Badge>` | Inline status indicator |
| **Card** | `.card`, `.card__title`, `.card__body`, `.card__footer` | `<Card>` | Panel container with optional title and footer |
| **Modal** | `.modal-backdrop`, `.modal`, `.modal--sm/lg`, `.modal--open`, `.modal__header/body/footer` | `<Modal>` | Dialog overlay with backdrop and ESC close |
| **DataTable** | `.data-table`, `.data-table__section-header` | `<DataTable>` | Table with section headers and row hover |
| **Topbar** | `.topbar`, `.topbar__title`, `.topbar__path`, `.topbar__actions` | `<Topbar>` | Page header bar |
| **Sidebar** | `.sidebar`, `.sidebar--collapsed`, `.nav-item`, `.nav-item--active` | `<Sidebar>` | Vertical navigation with collapse support |
| **AppLayout** | `.app-layout`, `.app-layout__topbar/sidebar/main`, `.app-layout--sidebar-collapsed` | `<AppLayout>` | CSS Grid shell: topbar + sidebar + content |

---

## Usage Examples

### Button variants

```html
<button class="btn btn--primary btn--md">Save</button>
<button class="btn btn--secondary btn--md">Cancel</button>
<button class="btn btn--danger btn--sm">Delete</button>
<button class="btn btn--ghost btn--md">Settings</button>
<button class="btn btn--primary btn--loading">Saving...</button>
<a href="/docs" class="btn btn--ghost btn--md">Docs →</a>
```

### Form with validation

```html
<div class="form-field">
  <label class="form-field__label form-field__label--required" for="email">Email</label>
  <div class="input-field input-field--error">
    <input class="input" type="email" id="email" value="bad@">
  </div>
  <span class="form-field__error">Enter a valid email address</span>
</div>

<div class="form-field">
  <label class="form-field__label" for="role">Role</label>
  <div class="select-field">
    <select class="select" id="role">
      <option value="" disabled selected>Choose role...</option>
      <option value="admin">Admin</option>
      <option value="viewer">Viewer</option>
    </select>
  </div>
  <span class="form-field__help">Determines access level in the dashboard</span>
</div>
```

### Data table with badges

```html
<table class="data-table">
  <thead>
    <tr>
      <th>Step</th><th>Status</th><th>Duration</th>
    </tr>
  </thead>
  <tbody>
    <tr class="data-table__section-header">
      <td colspan="3">Phase A — Analysis</td>
    </tr>
    <tr>
      <td>metrics</td>
      <td><span class="badge badge--success">✓ SUCCESS</span></td>
      <td>3.8s</td>
    </tr>
    <tr>
      <td>enrich</td>
      <td><span class="badge badge--error">✗ FAILED</span></td>
      <td>0.4s</td>
    </tr>
  </tbody>
</table>
```

### Modal (plain HTML, no JS framework)

```html
<!-- Trigger -->
<button class="btn btn--danger"
        onclick="document.getElementById('del-modal').classList.add('modal--open')">
  Delete
</button>

<!-- Modal -->
<div class="modal-backdrop" id="del-modal"
     onclick="this.classList.remove('modal--open')">
  <div class="modal modal--sm" onclick="event.stopPropagation()">
    <div class="modal__header">
      <span class="modal__title">Confirm Deletion</span>
      <button class="modal__close"
              onclick="document.getElementById('del-modal').classList.remove('modal--open')">×</button>
    </div>
    <div class="modal__body">This action cannot be undone.</div>
    <div class="modal__footer">
      <button class="btn btn--secondary btn--sm">Cancel</button>
      <button class="btn btn--danger btn--sm">Delete</button>
    </div>
  </div>
</div>
```

### Full page layout

```html
<div class="app-layout">
  <div class="app-layout__topbar">
    <header class="topbar">
      <span class="topbar__title">Admin Panel</span>
      <span class="topbar__path">/dashboard</span>
    </header>
  </div>
  <div class="app-layout__sidebar">
    <nav class="sidebar">
      <a href="/dashboard" class="nav-item nav-item--active">
        <span class="nav-item__icon">⬛</span>
        <span class="nav-item__label">Dashboard</span>
      </a>
      <a href="/incidents" class="nav-item">
        <span class="nav-item__icon">🔔</span>
        <span class="nav-item__label">Incidents</span>
      </a>
    </nav>
  </div>
  <main class="app-layout__main">
    <!-- page content -->
  </main>
</div>
```

---

## Design Tokens

All tokens are CSS custom properties available globally after importing `index.css`.

```css
/* Override any token in your own stylesheet */
:root {
  --blue: #0969da;  /* swap to GitHub light blue */
}
```

| Token | Default | Role |
|-------|---------|------|
| `--bg` | `#0d1117` | Page background |
| `--bg2` | `#161b22` | Card / panel |
| `--bg3` | `#1c2128` | Input / hover |
| `--border` | `#30363d` | Default border |
| `--border-subtle` | `#21262d` | Row separators |
| `--text` | `#e6edf3` | Primary text |
| `--muted` | `#7d8590` | Labels / secondary |
| `--green` | `#3fb950` | Success |
| `--yellow` | `#d29922` | Warning |
| `--red` | `#f85149` | Error / danger |
| `--blue` | `#58a6ff` | Primary action |
| `--purple` | `#bc8cff` | Accent |
| `--font-mono` | `'SF Mono', 'Fira Code', monospace` | All text |
| `--font-size-base` | `12px` | Base font size |
| `--radius-sm` | `3px` | Small elements |
| `--radius-md` | `4px` | Inputs, buttons |
| `--radius-lg` | `8px` | Cards, modals |
| `--radius-pill` | `10px` | Tab badges |

---

## Integrating with an Existing Project

Drop in the stylesheet and use the class names directly in your existing templates. Removing `index.css` reverts everything instantly — zero lock-in.

---

## Live Demo

Browse all components at **[myuikit.xor11lab.xyz](https://myuikit.xor11lab.xyz)**

---

## File Structure

```
src/
  tokens/tokens.css     ← CSS custom properties — source of truth
  styles/               ← THE PRODUCT — pure CSS, no framework dependency
    layout.css          ← topbar, sidebar, nav-item, app-layout
    button.css
    input.css
    select.css
    form-field.css
    data-table.css
    badge.css
    card.css
    modal.css
    index.css           ← @import all — the only file consumers need
  vue/                  ← Optional Vue 3 wrappers (thin class composers)
    AppLayout.vue
    Topbar.vue
    Sidebar.vue
    Button.vue
    Input.vue
    Select.vue
    FormField.vue
    DataTable.vue
    Badge.vue
    Card.vue
    Modal.vue
    index.ts            ← named exports for all Vue components
  stories/              ← Storybook @storybook/html stories
.storybook/             ← Storybook configuration
docker/                 ← Internal Nginx config for the container
index.css               ← root alias → src/styles/index.css
Dockerfile              ← Multi-stage build (Node → Nginx)
docker-compose.yml      ← Production deployment
renovate.json           ← Dependency update policy
```

---

## Development

```bash
# Install dependencies
npm install

# Run Storybook (component browser, hot-reload)
npm run storybook

# Build Storybook for production
npm run build-storybook
```

---

## Compatibility

| Environment | Support |
|-------------|---------|
| Plain HTML | Any browser supporting CSS custom properties (all modern browsers) |
| Vue 3 | 3.x with `<script setup>` |
| React | 17+ / 18+ (class names only — no JSX wrapper provided) |
| Symfony/Twig | Any version (import CSS via Webpack Encore or AssetMapper) |
| Sass/SCSS | Import `index.css` directly — no Sass dependency |

---

## License

MIT
