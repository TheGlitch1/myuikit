import '../../src/styles/select.css';

export default {
  title: 'Forms/Select',
};

export const Default = {
  render: () => `
    <div style="padding:16px;background:var(--bg);font-family:var(--font-mono);max-width:320px;">
      <div class="select-field">
        <select class="select">
          <option value="" disabled selected>Choose status...</option>
          <option value="open">Open</option>
          <option value="in-progress">In Progress</option>
          <option value="resolved">Resolved</option>
          <option value="closed">Closed</option>
        </select>
      </div>
    </div>
  `,
};

export const WithValue = {
  render: () => `
    <div style="padding:16px;background:var(--bg);font-family:var(--font-mono);max-width:320px;">
      <div class="select-field">
        <select class="select">
          <option value="open">Open</option>
          <option value="in-progress" selected>In Progress</option>
          <option value="resolved">Resolved</option>
        </select>
      </div>
    </div>
  `,
};

export const WithError = {
  render: () => `
    <div style="padding:16px;background:var(--bg);font-family:var(--font-mono);max-width:320px;">
      <div class="select-field select-field--error">
        <select class="select">
          <option value="" disabled selected>Choose status...</option>
          <option value="open">Open</option>
        </select>
      </div>
      <span class="select__error-msg">Selection is required</span>
    </div>
  `,
};

export const Disabled = {
  render: () => `
    <div style="padding:16px;background:var(--bg);font-family:var(--font-mono);max-width:320px;">
      <div class="select-field select-field--disabled">
        <select class="select" disabled>
          <option value="open">Open</option>
        </select>
      </div>
    </div>
  `,
};
