# 模板说明

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### eslint 说明

- package.json 中 rules 说明

```
// 声明类
"no-console": "error",
"no-const-assign":"error",
"no-var": "error",
"require-yield":0,
"no-shadow": 0,
"init-declarations":"error",
// 风格类
"comma-dangle": [1,"always-multiline"],
"no-dupe-keys": 2,
"semi": ["error","never"],
"no-extra-semi": "error",
"array-bracket-spacing": [2,"never"],
"comma-spacing": [2,{"before": false,"after": true}],
"no-multiple-empty-lines": [1,{"max": 1}],
"space-infix-ops": 2,
"no-empty-function": "error",
"eqeqeq": ["error","allow-null"],
"space-before-blocks": ["error","always"],
"space-in-parens": ["error","never"],
"object-curly-spacing": [1,"always"],
"no-use-before-define": "error",
"generator-star-spacing": [2, { "before": true, "after": true }]
```
- 关于更多eslint配置请参考  https://eslint.org/
