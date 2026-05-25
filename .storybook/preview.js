import '../src/tokens/tokens.css';
import './preview.css';

export default {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0d1117' },
        { name: 'panel', value: '#161b22' },
      ],
    },
    docs: {
      codePanel: true,
      source: {
        type: 'dynamic',
      },
    },
  },
};
