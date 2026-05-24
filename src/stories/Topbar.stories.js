import '../../src/styles/layout.css';

export default {
  title: 'Layout/Topbar',
};

export const Default = {
  render: () => `
    <header class="topbar">
      <span class="topbar__title">Migration Pipeline</span>
      <span class="topbar__path">file://./output/dashboard.html</span>
      <div class="topbar__actions">
        <button style="padding:4px 10px;background:var(--bg3);color:var(--text);border:1px solid var(--border);border-radius:4px;cursor:pointer;font-size:11px;">Settings</button>
      </div>
    </header>
  `,
};

export const TitleOnly = {
  render: () => `
    <header class="topbar">
      <span class="topbar__title">Dashboard</span>
    </header>
  `,
};

export const WithPath = {
  render: () => `
    <header class="topbar">
      <span class="topbar__title">Admin Panel</span>
      <span class="topbar__path">/admin/users</span>
    </header>
  `,
};

export const WithActions = {
  render: () => `
    <header class="topbar">
      <span class="topbar__title">Reports</span>
      <div class="topbar__actions">
        <button style="padding:4px 10px;background:var(--blue);color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:11px;font-family:var(--font-mono);">Export</button>
        <button style="padding:4px 10px;background:var(--bg3);color:var(--text);border:1px solid var(--border);border-radius:4px;cursor:pointer;font-size:11px;font-family:var(--font-mono);">Filter</button>
      </div>
    </header>
  `,
};
