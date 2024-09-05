module.exports = {
    default: {
      require: ['tests/**/*.ts'], // Recursively find all TypeScript step definitions
      format: ['@cucumber/pretty-formatter'], // Use the pretty formatter
      paths: ['tests/**/*.feature'], // Recursively find all feature files
      parallel: 0, // Number of parallel executions (0 = no parallel)
      requireModule: ['ts-node/register'], // Supports TypeScript
    },
  };
  