/** @type {import('jest').Config} */
module.exports = {
  testMatch: ['**/?(*.)+(test).ts?(x)'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/report-web-vitals.ts',
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  transformIgnorePatterns: [
    '/node_modules/(axios|react-router-dom|react-router|react-redux)',
  ],
  setupFileAfterEnv: ['<rootDir>/src/test-utils/setup-tests.ts'],
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
  },
}