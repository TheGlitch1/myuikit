import '../../src/styles/layout.css';

export default {
  title: 'Layout/AppLayout',
};

const sidebar = `
  <nav class="sidebar">
    <a href="#" class="nav-item nav-item--active">
      <span class="nav-item__icon">⬛</span>
      <span class="nav-item__label">Dashboard</span>
    </a>
    <a href="#" class="nav-item">
      <span class="nav-item__icon">📊</span>
      <span class="nav-item__label">Reports</span>
    </a>
    <a href="#" class="nav-item">
      <span class="nav-item__icon">⚙️</span>
      <span class="nav-item__label">Settings</span>
    </a>
    <div class="sidebar__footer">
      <a href="#" class="nav-item">
        <span class="nav-item__icon">👤</span>
        <span class="nav-item__label">Profile</span>
      </a>
    </div>
  </nav>
`;

const topbar = `
  <header class="topbar">
    <span class="topbar__title">Migration Pipeline</span>
    <span class="topbar__path">file://./output/dashboard.html</span>
  </header>
`;

const content = `
  <div style="padding:16px;color:var(--text);">
    <p style="margin:0;font-size:12px;">Main content area</p>
  </div>
`;

export const Default = {
  render: () => `
    <div class="app-layout" style="min-height:400px;">
      <div class="app-layout__topbar">${topbar}</div>
      <div class="app-layout__sidebar">${sidebar}</div>
      <main class="app-layout__main">${content}</main>
    </div>
  `,
};

export const SidebarCollapsed = {
  render: () => `
    <div class="app-layout app-layout--sidebar-collapsed" style="min-height:400px;">
      <div class="app-layout__topbar">${topbar}</div>
      <div class="app-layout__sidebar">
        <nav class="sidebar sidebar--collapsed">
          <a href="#" class="nav-item nav-item--active">
            <span class="nav-item__icon">⬛</span>
            <span class="nav-item__label">Dashboard</span>
          </a>
          <a href="#" class="nav-item">
            <span class="nav-item__icon">📊</span>
            <span class="nav-item__label">Reports</span>
          </a>
        </nav>
      </div>
      <main class="app-layout__main">${content}</main>
    </div>
  `,
};

export const WithTabs = {
  render: () => `
    <div class="app-layout" style="min-height:400px;">
      <div class="app-layout__topbar">${topbar}</div>
      <div class="app-layout__sidebar">${sidebar}</div>
      <main class="app-layout__main">
        <div class="tabs">
          <div class="tab tab--active">Overview <span class="tab-badge">3</span></div>
          <div class="tab">Pipeline</div>
          <div class="tab">Reports</div>
        </div>
        ${content}
      </main>
    </div>
  `,
};
