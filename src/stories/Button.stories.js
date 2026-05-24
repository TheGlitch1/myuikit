import '../../src/styles/button.css';

export default {
  title: 'Forms/Button',
};

export const AllVariants = {
  render: () => `
    <div style="display:flex;gap:8px;flex-wrap:wrap;padding:16px;background:var(--bg);font-family:var(--font-mono);">
      <button class="btn btn--primary btn--md">Primary</button>
      <button class="btn btn--secondary btn--md">Secondary</button>
      <button class="btn btn--ghost btn--md">Ghost</button>
      <button class="btn btn--danger btn--md">Danger</button>
    </div>
  `,
};

export const AllSizes = {
  render: () => `
    <div style="display:flex;gap:8px;align-items:center;padding:16px;background:var(--bg);font-family:var(--font-mono);">
      <button class="btn btn--primary btn--sm">Small</button>
      <button class="btn btn--primary btn--md">Medium</button>
      <button class="btn btn--primary btn--lg">Large</button>
    </div>
  `,
};

export const Disabled = {
  render: () => `
    <div style="display:flex;gap:8px;padding:16px;background:var(--bg);font-family:var(--font-mono);">
      <button class="btn btn--primary btn--md" disabled>Primary</button>
      <button class="btn btn--secondary btn--md" disabled>Secondary</button>
      <button class="btn btn--danger btn--md" disabled>Danger</button>
    </div>
  `,
};

export const Loading = {
  render: () => `
    <div style="display:flex;gap:8px;padding:16px;background:var(--bg);font-family:var(--font-mono);">
      <button class="btn btn--primary btn--md btn--loading">Saving</button>
      <button class="btn btn--secondary btn--md btn--loading">Loading</button>
    </div>
  `,
};

export const AsLink = {
  render: () => `
    <div style="display:flex;gap:8px;padding:16px;background:var(--bg);font-family:var(--font-mono);">
      <a href="#" class="btn btn--ghost btn--md">Settings →</a>
      <a href="#" class="btn btn--secondary btn--md">View Docs</a>
    </div>
  `,
};
