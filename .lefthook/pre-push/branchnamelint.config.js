import fs from "node:fs";

const readDirectories = (path) =>
  fs
    .readdirSync(path, { withFileTypes: true })
    .filter((file) => file.isDirectory())
    .map(({ name }) => name);

export default {
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
    scope: readDirectories("./apps"),
  },
  prohibited: ["master", "main", "build", "test", "wip", "ci", "release"],
};
