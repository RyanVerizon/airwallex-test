module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/test/config.js'],
  moduleNameMapper: {
    '^~app(.*)$': "<rootDir>/src/app$1",
    '^~components(.*)$': "<rootDir>/src/app/components$1",
    '^~containers(.*)$': "<rootDir>/src/app/containers$1",
    '^~helpers(.*)$': "<rootDir>/src/app/helpers$1",
    '^~pages(.*)$': "<rootDir>/src/app/pages$1",
    '^~settings(.*)$': "<rootDir>/src/app/settings$1",
  },
};