module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/essential",
    "@vue/airbnb"
  ],
  "rules": {
    "no-console": "off",
    "no-debugger": "off",
    "vue/valid-template-root": 0,
    "consistent-return": 0,
    "func-names": 0,
    "no-param-reassign": 0,
    "max-len": 0,
    "array-callback-return": 0,
    "radix": 0,
    "no-plusplus": 0,
    "no-restricted-properties": 0,
    "object-curly-newline": 0,
    "no-underscore-dangle": 0,
    "linebreak-style": "off"
  },
  "parserOptions": {
    "parser": "babel-eslint"
  }
}
