import { defineConfig } from 'vitest/config';

// https://vitest.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './lib/test-setup.ts',
    coverage: {
      reporter: ['text', 'html'],
    },
  },
});
