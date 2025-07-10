/** @type {import('jest').Config} */
module.exports = {
  // Use ts-jest preset for TypeScript transformation
  preset: 'ts-jest',

  "clearMocks": true,
  
  // Define the test environment
  testEnvironment: 'node',

  // Specify the directories where Jest should look for test files
  roots: ['<rootDir>/tests'],

  // Define how Jest should transform files, specifically for TypeScript
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },

  // Ensure Jest processes .ts files and other common test file extensions
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],

  // Ignore node_modules for transformation to improve performance, unless specific modules need transformation
  transformIgnorePatterns: ['/node_modules/'],
};