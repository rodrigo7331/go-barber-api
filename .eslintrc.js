module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base'],
  
  
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    
    "class-methods-use-this" : "off",
    //PERMITIR FAZER ALTERAÇÃO DE PARAMETRO RECEBIDO
    "no-param-reassign" : "off",
    //por padrão ele quer que sigam o padrao nomeSobrenome, mas as x nao tem como evitar
    "camelcase" : "off",
    //REGRA QUE NAO DEIXA DECLARAR VARIAVEIS QUE NAO USA, MAS AS X A GENTE PRECISA DECLARAR
    // A NEXT SEM ULTILIZAR, A VARIAVEL NEXT É A DOS MIDDLEWARES
    "no-unused-vars" : ["error", {"argsIgnorPattern" : "next"}],
    
  },
};
