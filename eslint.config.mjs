import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";


const { dirname } = require("path");
const { FlatCompat } = require("@eslint/eslintrc");

const __dirname = dirname(__filename); // Use __dirname directly in CommonJS

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = {
  extends: ["next/core-web-vitals"],
  ...compat.config(),
};
