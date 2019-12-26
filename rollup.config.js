import pkg from "./package.json"
import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
export default [
  {
    input: pkg.source,
    output: {
      file: pkg.module,
      format: "esm"
    },
    plugins: [typescript()]
  },
  {
    input: pkg.source,
    output: {
      file: pkg.umd,
      format: "umd",
      name: pkg.name
    },
    plugins: [resolve(), typescript(), terser()]
  }
];