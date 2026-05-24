import '../../src/styles/form-field.css';
import '../../src/styles/input.css';
import '../../src/styles/select.css';
import '../../src/styles/button.css';

export default {
  title: 'Forms/FormField',
};

export const WithInput = {
  render: () => `
    <div style="padding:16px;background:var(--bg);font-family:var(--font-mono);max-width:320px;">
      <div class="form-field">
        <label class="form-field__label" for="name-input">Name</label>
        <div class="input-field">
          <input class="input" type="text" id="name-input" placeholder="Enter your name..." />
        </div>
      </div>
    </div>
  `,
};

export const Required = {
  render: () => `
    <div style="padding:16px;background:var(--bg);font-family:var(--font-mono);max-width:320px;">
      <div class="form-field">
        <label class="form-field__label form-field__label--required" for="email-input">Email</label>
        <div class="input-field">
          <input class="input" type="email" id="email-input" placeholder="you@example.com" />
        </div>
      </div>
    </div>
  `,
};

export const WithError = {
  render: () => `
    <div style="padding:16px;background:var(--bg);font-family:var(--font-mono);max-width:320px;">
      <div class="form-field">
        <label class="form-field__label form-field__label--required" for="email-err">Email</label>
        <div class="input-field input-field--error">
          <input class="input" type="email" id="email-err" value="not-valid" />
        </div>
        <span class="form-field__error">Please enter a valid email address</span>
      </div>
    </div>
  `,
};

export const WithHelp = {
  render: () => `
    <div style="padding:16px;background:var(--bg);font-family:var(--font-mono);max-width:320px;">
      <div class="form-field">
        <label class="form-field__label" for="username">Username</label>
        <div class="input-field">
          <input class="input" type="text" id="username" placeholder="jsmith" />
        </div>
        <span class="form-field__help">Used as your login identifier. Cannot be changed later.</span>
      </div>
    </div>
  `,
};

export const WithSelect = {
  render: () => `
    <div style="padding:16px;background:var(--bg);font-family:var(--font-mono);max-width:320px;">
      <div class="form-field">
        <label class="form-field__label" for="status-sel">Status</label>
        <div class="select-field">
          <select class="select" id="status-sel">
            <option value="" disabled selected>Choose status...</option>
            <option value="open">Open</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>
      </div>
    </div>
  `,
};

export const FullForm = {
  render: () => `
    <div style="padding:16px;background:var(--bg2);border:1px solid var(--border);border-radius:8px;font-family:var(--font-mono);max-width:380px;display:flex;flex-direction:column;gap:16px;">
      <div class="form-field">
        <label class="form-field__label form-field__label--required" for="ff-name">Name</label>
        <div class="input-field">
          <input class="input" type="text" id="ff-name" placeholder="Full name" />
        </div>
      </div>
      <div class="form-field">
        <label class="form-field__label form-field__label--required" for="ff-email">Email</label>
        <div class="input-field input-field--error">
          <input class="input" type="email" id="ff-email" value="bad@" />
        </div>
        <span class="form-field__error">Enter a valid email</span>
      </div>
      <div class="form-field">
        <label class="form-field__label" for="ff-role">Role</label>
        <div class="select-field">
          <select class="select" id="ff-role">
            <option value="" disabled selected>Select role...</option>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="viewer">Viewer</option>
          </select>
        </div>
        <span class="form-field__help">Determines access level</span>
      </div>
      <div style="display:flex;gap:8px;">
        <button class="btn btn--primary btn--md">Save</button>
        <button class="btn btn--secondary btn--md">Cancel</button>
      </div>
    </div>
  `,
};
