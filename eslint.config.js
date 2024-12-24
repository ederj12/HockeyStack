import preferArrow from 'eslint-plugin-prefer-arrow';
import babelParser from '@babel/eslint-parser';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 11,
      sourceType: 'module',
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false
      }
    },
    plugins: {
      'prefer-arrow': preferArrow
    },
    rules: {
      semi: ['error', 'always'],
      'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx', 'debug'], location: 'start' }],
      'prefer-arrow/prefer-arrow-functions': ['error', { singleReturnOnly: true, disallowPrototype: true }],
      'object-curly-newline': ['error', { multiline: true }],
      'arrow-parens': ['error', 'as-needed'],
      'arrow-body-style': ['error', 'as-needed'],
      'operator-linebreak': ['error', 'after'],
      indent: ['error', 2, { ignoredNodes: ['TemplateLiteral > *'], SwitchCase: 1 }],
      'no-unused-expressions': 'off'
    },
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
      _logger: 'readonly'
    }
  },
  {
    files: ['**/*.js'],
    environment: {
      browser: true,
      commonjs: true,
      es6: true,
      node: true,
      mocha: true
    }
  }
];