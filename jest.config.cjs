module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.(ts|tsx)', '**/?(*.)+(spec|test).(ts|tsx)'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.jest.json" }],
    "^.+\\.jsx?$": "babel-jest",
  },
};