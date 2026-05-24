import '../../src/styles/modal.css';
import '../../src/styles/button.css';

export default {
  title: 'Feedback/Modal',
};

// Storybook HTML stories show the modal in its open state (modal--open applied directly)
export const Default = {
  render: () => `
    <div style="position:relative;height:400px;background:var(--bg);font-family:var(--font-mono);overflow:hidden;">
      <div class="modal-backdrop modal--open" style="position:absolute;">
        <div class="modal" onclick="event.stopPropagation()">
          <div class="modal__header">
            <span class="modal__title">Confirm Action</span>
            <button class="modal__close">×</button>
          </div>
          <div class="modal__body">
            Are you sure you want to delete this pipeline run? This action cannot be undone.
          </div>
          <div class="modal__footer">
            <button class="btn btn--secondary btn--md">Cancel</button>
            <button class="btn btn--danger btn--md">Delete</button>
          </div>
        </div>
      </div>
    </div>
  `,
};

export const Small = {
  render: () => `
    <div style="position:relative;height:300px;background:var(--bg);font-family:var(--font-mono);overflow:hidden;">
      <div class="modal-backdrop modal--open" style="position:absolute;">
        <div class="modal modal--sm" onclick="event.stopPropagation()">
          <div class="modal__header">
            <span class="modal__title">Quick Confirm</span>
            <button class="modal__close">×</button>
          </div>
          <div class="modal__body">Proceed with this action?</div>
          <div class="modal__footer">
            <button class="btn btn--secondary btn--sm">No</button>
            <button class="btn btn--primary btn--sm">Yes</button>
          </div>
        </div>
      </div>
    </div>
  `,
};

export const Large = {
  render: () => `
    <div style="position:relative;height:500px;background:var(--bg);font-family:var(--font-mono);overflow:hidden;">
      <div class="modal-backdrop modal--open" style="position:absolute;">
        <div class="modal modal--lg" onclick="event.stopPropagation()">
          <div class="modal__header">
            <span class="modal__title">Pipeline Details</span>
            <button class="modal__close">×</button>
          </div>
          <div class="modal__body">
            <p style="margin:0 0 8px;">Full pipeline run log and configuration details would appear here.</p>
            <p style="margin:0;color:var(--muted);">Started: 2026-05-21 14:32:00 UTC</p>
          </div>
          <div class="modal__footer">
            <button class="btn btn--secondary btn--md">Close</button>
            <button class="btn btn--primary btn--md">Export Log</button>
          </div>
        </div>
      </div>
    </div>
  `,
};

export const NoFooter = {
  render: () => `
    <div style="position:relative;height:300px;background:var(--bg);font-family:var(--font-mono);overflow:hidden;">
      <div class="modal-backdrop modal--open" style="position:absolute;">
        <div class="modal modal--sm" onclick="event.stopPropagation()">
          <div class="modal__header">
            <span class="modal__title">Info</span>
            <button class="modal__close">×</button>
          </div>
          <div class="modal__body">
            This is an informational modal with no action buttons.
          </div>
        </div>
      </div>
    </div>
  `,
};
