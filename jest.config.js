module.exports = {
  setupFilesAfterEnv: [
    './jest.setup',
  ],
  setupFiles: [
    'jest-plugin-context/setup',
    'given2/setup',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
