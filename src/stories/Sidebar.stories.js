import '../../src/styles/layout.css';

export default {
  title: 'Layout/Sidebar',
};

const navItems = `
  <a href="#" class="nav-item nav-item--active">
    <span class="nav-item__icon">⬛</span>
    <span class="nav-item__label">Dashboard</span>
  </a>
  <a href="#" class="nav-item">
    <span class="nav-item__icon">🔔</span>
    <span class="nav-item__label">Incidents</span>
  </a>
  <a href="#" class="nav-item">
    <span class="nav-item__icon">📊</span>
    <span class="nav-item__label">Reports</span>
  </a>
  <a href="#" class="nav-item">
    <span class="nav-item__icon">⚙️</span>
    <span class="nav-item__label">Settings</span>
  </a>
`;

export const Expanded = {
  render: () => `
    <div style="height:400px;display:flex;">
      <nav class="sidebar">
        ${navItems}
        <div class="sidebar__footer">
          <a href="#" class="nav-item">
            <span class="nav-item__icon">👤</span>
            <span class="nav-item__label">Profile</span>
          </a>
        </div>
      </nav>
    </div>
  `,
};

export const Collapsed = {
  render: () => `
    <div style="height:400px;display:flex;">
      <nav class="sidebar sidebar--collapsed">
        ${navItems}
        <div class="sidebar__footer">
          <a href="#" class="nav-item">
            <span class="nav-item__icon">👤</span>
            <span class="nav-item__label">Profile</span>
          </a>
        </div>
      </nav>
    </div>
  `,
};

export const NoActiveItem = {
  render: () => `
    <div style="height:400px;display:flex;">
      <nav class="sidebar">
        <a href="#" class="nav-item">
          <span class="nav-item__icon">⬛</span>
          <span class="nav-item__label">Dashboard</span>
        </a>
        <a href="#" class="nav-item">
          <span class="nav-item__icon">🔔</span>
          <span class="nav-item__label">Incidents</span>
        </a>
      </nav>
    </div>
  `,
};
