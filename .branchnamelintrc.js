const fs = require("node:fs");

/**
 * @param {string} path
 * @returns {string[]}
 */
const readDirectories = (path) =>
  fs
    .readdirSync(path, { withFileTypes: true })
    .filter((file) => file.isDirectory())
    .map(({ name }) => name);

/**
 * Configuration object for branch naming rules.
 *
 * @typedef {Object} Config
 * @property {string} pattern - Branch name pattern.
 * @property {Record<string, string[]>} params - Allowed values for pattern params.
 * @property {string[]} prohibited - Prohibited branch names.
 */

/**
 * @type {Config}
 */
module.exports = {
  pattern: ":type/:scope/:description",
  params: {
    type: [
      "develop",
      "fix",
      "bugfix",
      "hotfix",
      "feat",
      "feature",
      "release",
      "chore",
    ],
    scope: [...readDirectories("./apps"), "setup"],
  },
  prohibited: ["master", "main", "build", "test", "wip", "ci", "release"],
};
