import '../../src/styles/input.css';

export default {
  title: 'Forms/Input',
};

export const Default = {
  render: () => `
    <div style="padding:16px;background:var(--bg);font-family:var(--font-mono);max-width:320px;">
      <div class="input-field">
        <input class="input" type="text" placeholder="Search incidents..." />
      </div>
    </div>
  `,
};

export const WithError = {
  render: () => `
    <div style="padding:16px;background:var(--bg);font-family:var(--font-mono);max-width:320px;">
      <div class="input-field input-field--error">
        <input class="input" type="email" value="not-an-email" />
      </div>
      <span class="input__error-msg">Invalid email address</span>
    </div>
  `,
};

export const WithPrefix = {
  render: () => `
    <div style="padding:16px;background:var(--bg);font-family:var(--font-mono);max-width:320px;">
      <div class="input-field">
        <span class="input-field__prefix">🔍</span>
        <input class="input" type="search" placeholder="Search..." />
      </div>
    </div>
  `,
};

export const WithSuffix = {
  render: () => `
    <div style="padding:16px;background:var(--bg);font-family:var(--font-mono);max-width:320px;">
      <div class="input-field">
        <input class="input" type="text" placeholder="Enter value..." />
        <span class="input-field__suffix">px</span>
      </div>
    </div>
  `,
};

export const Disabled = {
  render: () => `
    <div style="padding:16px;background:var(--bg);font-family:var(--font-mono);max-width:320px;">
      <div class="input-field input-field--disabled">
        <input class="input" type="text" value="Read only value" disabled />
      </div>
    </div>
  `,
};

export const Password = {
  render: () => `
    <div style="padding:16px;background:var(--bg);font-family:var(--font-mono);max-width:320px;">
      <div class="input-field">
        <input class="input" type="password" placeholder="Enter password..." />
      </div>
    </div>
  `,
};
