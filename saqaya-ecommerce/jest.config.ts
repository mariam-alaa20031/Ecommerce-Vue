import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.[tj]s$': 'ts-jest',
    '^.+\\.mjs$': 'babel-jest', 
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(axios|@vueuse/core|@vueuse/shared)/)', 
  ],
  moduleFileExtensions: ['ts', 'js', 'vue', 'json', 'mjs'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(png|jpe?g|gif|webp|svg)$': '<rootDir>/tests/__mocks__/fileMock.ts',
    '^axios$': 'axios/dist/node/axios.cjs',
  },
};

export default config;
