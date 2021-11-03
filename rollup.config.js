import { uglify } from 'rollup-plugin-uglify';
import typescript from 'rollup-plugin-typescript2';
import tslint from 'rollup-plugin-tslint';
import pkg from './package.json';

export default {
    input: 'src/index.ts',
    output: {
        file: pkg.main,
        format: 'cjs',
    },
    plugins: [
        typescript(),
        tslint(),
        uglify(),
    ],
}
