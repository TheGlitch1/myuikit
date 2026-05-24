import '../../src/styles/badge.css';

export default {
  title: 'Feedback/Badge',
};

export const AllVariants = {
  render: () => `
    <div style="display:flex;gap:8px;flex-wrap:wrap;padding:16px;background:var(--bg);font-family:var(--font-mono);">
      <span class="badge badge--success">✓ SUCCESS</span>
      <span class="badge badge--warning">⚠ WARNING</span>
      <span class="badge badge--error">✗ ERROR</span>
      <span class="badge badge--info">INFO</span>
      <span class="badge badge--neutral">PENDING</span>
    </div>
  `,
};

export const InTable = {
  render: () => `
    <div style="padding:16px;background:var(--bg);font-family:var(--font-mono);">
      <table style="border-collapse:collapse;width:100%;">
        <thead>
          <tr>
            <th style="text-align:left;padding:6px 10px;color:var(--muted);font-size:11px;border-bottom:1px solid var(--border);">Step</th>
            <th style="text-align:left;padding:6px 10px;color:var(--muted);font-size:11px;border-bottom:1px solid var(--border);">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding:5px 10px;">metrics</td><td style="padding:5px 10px;"><span class="badge badge--success">✓ SUCCESS</span></td></tr>
          <tr><td style="padding:5px 10px;">schema</td><td style="padding:5px 10px;"><span class="badge badge--warning">⚠ SKIPPED</span></td></tr>
          <tr><td style="padding:5px 10px;">enrich</td><td style="padding:5px 10px;"><span class="badge badge--error">✗ FAILED</span></td></tr>
          <tr><td style="padding:5px 10px;">export</td><td style="padding:5px 10px;"><span class="badge badge--neutral">PENDING</span></td></tr>
        </tbody>
      </table>
    </div>
  `,
};

export const InText = {
  render: () => `
    <div style="padding:16px;background:var(--bg);font-family:var(--font-mono);color:var(--text);font-size:12px;line-height:2;">
      <p>The pipeline completed with status <span class="badge badge--success">SUCCESS</span> after 4.2s.</p>
      <p>Feature complexity is rated <span class="badge badge--warning">MEDIUM</span>.</p>
      <p>Last deployment <span class="badge badge--error">FAILED</span> due to timeout.</p>
    </div>
  `,
};
