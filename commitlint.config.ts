import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: "conventional-changelog-atom",
  formatter: "@commitlint/format",
  rules: {
    "header-max-length": [2, "always", 50],
    "body-max-length": [2, "always", 72],
  },
};

export default Configuration;
