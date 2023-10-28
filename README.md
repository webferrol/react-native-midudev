# REACT NATIVE with Midu

- [Curso React Native desde cero](https://www.youtube.com/watch?v=qi87b6VcIHY)
- [Transcripción del vídeo](#transcripción-del-vídeo)

__Tabla de contenidos__

- Linter
  - [Instalación](#instalación)
  - [Configuración](#configuración)
  - [Transcripción del vídeo](#transcripción-del-vídeo)

## Linter

### Instalación

```sh
npm install --save-dev eslint babel-eslint eslint-config-standard eslint-config-standard-jsx eslint-config-standard-react eslint-plugin-promise eslint-plugin-import eslint-plugin-node eslint-plugin-react
```


### Configuración

Correr comando y seguir las instrucciones

```sh
npm init @eslint/config
```

El comando genera un fichero __eslintrc.js__ :

```js
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
  }
}
```

[Inicio](#react-native-with-midu)

## Transcripción del vídeo

00:00 Intro React-Native

03:10 Expo

05:10 Creando la app

10:07 Configurando iOS simulator

12:26 react-native-debugger

15:40 Linter

17:30 Text, View, Touchable

25:00 StatusBar y expo-constants

29:30 Mostrando los repositorios

32:37 ScrollView y FlatList

40:15 Desactivando reglas linter

41:00 StyleSheet, theme y estilos

54:38 FlexBox. Alineando texto y stats

01:02:00 ParseThousands

01:04:19 Estilando language

01:07:05 alignSelf: flex-start

01:08:10 BorderRadius y overflow

01:08:40 Image. Mostrando repo image

01:11:00 FlexBox. Mostrando image side by side

01:18:20 MarginHorizontal y MarginVertical

01:19:20 AppBar

01:25:00 react-router-native

01:28:30 Problemas con react-router-native

01:29:30 Solucion: webpack-config

01:34:50 Ruteando

01:40:50 Scroll para las tabs

01:49:00 Preguntas

02:07:40 Inicio clase 2

02:11:30 StatusBar

02:14:25 Plarform.select

02:26:00 Sign in con Formik

02:40:25 Formik: useField

02:45:15 Masking the password

02:46:15 Preguntas

02:50:30 Validacion de formulario

02:57:40 Validación con yup

03:04:00 Configurando el backend

03:09:15 Queries a la REST API

03:13:30 global.fetch y globalThis

03:14:30 custom hook useRepositories

03:17:50 Arreglando errores por localhost

03:20:20 ApolloClient

03:23:35 GraphQL

03:26:45 Usando graphQL en el custom hook

03:30:00 Preguntas

[Inicio](#react-native-with-midu)
