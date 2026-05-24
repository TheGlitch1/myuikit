import '../../src/styles/card.css';
import '../../src/styles/button.css';
import '../../src/styles/badge.css';

export default {
  title: 'Feedback/Card',
};

export const WithTitle = {
  render: () => `
    <div style="padding:16px;background:var(--bg);font-family:var(--font-mono);max-width:300px;">
      <div class="card">
        <div class="card__title">LLM Statistics</div>
        <div class="card__body" style="color:var(--text);font-size:12px;">
          <p style="margin:0;">Total tokens: 1,204,832</p>
          <p style="margin:4px 0 0;">Cache hits: 78%</p>
          <p style="margin:4px 0 0;">Avg latency: 1.4s</p>
        </div>
      </div>
    </div>
  `,
};

export const WithFooter = {
  render: () => `
    <div style="padding:16px;background:var(--bg);font-family:var(--font-mono);max-width:300px;">
      <div class="card">
        <div class="card__title">Confirm Action</div>
        <div class="card__body" style="color:var(--text);font-size:12px;">
          Are you sure you want to delete this pipeline run?
        </div>
        <div class="card__footer">
          <button class="btn btn--secondary btn--sm">Cancel</button>
          <button class="btn btn--danger btn--sm">Delete</button>
        </div>
      </div>
    </div>
  `,
};

export const Minimal = {
  render: () => `
    <div style="padding:16px;background:var(--bg);font-family:var(--font-mono);max-width:300px;">
      <div class="card">
        <div class="card__body" style="color:var(--text);font-size:12px;">
          Simple card with no title or footer.
        </div>
      </div>
    </div>
  `,
};

export const StatCards = {
  render: () => `
    <div style="padding:16px;background:var(--bg);font-family:var(--font-mono);display:grid;grid-template-columns:repeat(3,1fr);gap:12px;max-width:720px;">
      <div class="card">
        <div class="card__title">Total Steps</div>
        <div class="card__body" style="font-size:24px;font-weight:700;color:var(--text);">42</div>
      </div>
      <div class="card">
        <div class="card__title">Succeeded</div>
        <div class="card__body" style="font-size:24px;font-weight:700;color:var(--green);">38</div>
      </div>
      <div class="card">
        <div class="card__title">Failed</div>
        <div class="card__body" style="font-size:24px;font-weight:700;color:var(--red);">4</div>
      </div>
    </div>
  `,
};
