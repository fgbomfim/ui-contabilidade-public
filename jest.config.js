/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  testMatch: ['**/?(*.)+(test).ts?(x)'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}'],
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