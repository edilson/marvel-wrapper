require('dotenv/config')

module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: [
    'text-summary',
    'lcov'
  ],
  setupFiles: ['dotenv/config'],
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)"
  ],
  testTimeout: 10000
};
