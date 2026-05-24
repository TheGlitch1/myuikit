import '../../src/styles/data-table.css';
import '../../src/styles/badge.css';

export default {
  title: 'Data/DataTable',
};

export const Default = {
  render: () => `
    <div style="padding:16px;background:var(--bg);font-family:var(--font-mono);">
      <table class="data-table">
        <thead>
          <tr>
            <th>Step</th>
            <th>Status</th>
            <th>Duration</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr class="data-table__section-header">
            <td colspan="4">Phase A — Analysis</td>
          </tr>
          <tr>
            <td>metrics</td>
            <td><span class="badge badge--success">✓ SUCCESS</span></td>
            <td>3.8s</td>
            <td>12 metrics collected</td>
          </tr>
          <tr>
            <td>schema</td>
            <td><span class="badge badge--success">✓ SUCCESS</span></td>
            <td>1.2s</td>
            <td>8 tables analysed</td>
          </tr>
          <tr class="data-table__section-header">
            <td colspan="4">Phase B — Transform</td>
          </tr>
          <tr>
            <td>normalise</td>
            <td><span class="badge badge--warning">⚠ SKIPPED</span></td>
            <td>—</td>
            <td>No action needed</td>
          </tr>
          <tr>
            <td>enrich</td>
            <td><span class="badge badge--error">✗ FAILED</span></td>
            <td>0.4s</td>
            <td>API timeout</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
};

export const Simple = {
  render: () => `
    <div style="padding:16px;background:var(--bg);font-family:var(--font-mono);">
      <table class="data-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Phase</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Template Audit</td>
            <td>1 — Foundation</td>
            <td><span class="badge badge--success">DONE</span></td>
          </tr>
          <tr>
            <td>Design Tokens</td>
            <td>1 — Foundation</td>
            <td><span class="badge badge--success">DONE</span></td>
          </tr>
          <tr>
            <td>AppLayout</td>
            <td>2 — Layout</td>
            <td><span class="badge badge--info">IN PROGRESS</span></td>
          </tr>
          <tr>
            <td>Button</td>
            <td>3 — Forms</td>
            <td><span class="badge badge--neutral">TODO</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
};

export const Empty = {
  render: () => `
    <div style="padding:16px;background:var(--bg);font-family:var(--font-mono);">
      <table class="data-table">
        <thead>
          <tr>
            <th>Step</th>
            <th>Status</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="3" style="color:var(--muted);text-align:center;padding:24px 10px;">No data available</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
};
