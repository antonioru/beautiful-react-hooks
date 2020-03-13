[![Build Status](https://travis-ci.org/beautifulinteractions/beautiful-react-hooks.svg?branch=master)](https://travis-ci.org/beautifulinteractions/beautiful-react-hooks)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![npm](https://img.shields.io/npm/v/beautiful-react-hooks)
![GitHub stars](https://img.shields.io/github/stars/beautifulinteractions/beautiful-react-hooks?style=social)


<div align="center">
  <p align="center">
    <img src="./logo.png" alt="Beautiful React Hooks" width="750px" />
  </p>
</div>
<br />
<div>
  <p align="center">
    Una colección de magníficos (y con suerte útiles) React hooks para acelerar 
    el desarrollo de componentes.
  </p>
</div>

<div>
  <p align="center">
    <a href="https://beautifulinteractions.github.io/beautiful-react-hooks/" target="_blank">
    🌟 Mira la documentación aquí 🌟
    </a>
  </p>
</div>

![Usage example](./usage_example.png)

🇬🇧 English | <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.zh-CN.md">🇨🇳 简体中文</a> | <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.it-IT.md">🇮🇹 Italiano</a> | 🇪🇦 Español</a>

## 💡 Por qué? 

React hooks personalizados permiten abstraer la lógica de negocio de los componentes, dentro de
funciones reutilizables individuales. <br />

Hasta ahora, hemos encontrado que la mayoría de los hooks que hemos creado y compartido
dentro de nuestros proyectos internos,  a menudo tienen una funcionalidad similar que abarcan 
callbacks, eventos y ciclo de vida de los componentes.  <br />

Por esta razón, hemos tratado de resumir esas funcionalidades dentro de `beautiful-react-hooks`: una
colección de (*por suerte*) útiles React hooks que posibilitan ayudar a otras compañías y profesionales a acelerar sus procesos de
desarrollo.<br /><br />

Además, creamos una concisa pero concreta API teniendo en cuenta la legibilidad del código,
centrándose en mantener la curva de aprendizaje lo más baja como sea posible, para que 
pueda ser usada y compartida en equipos más grandes.

**-- Por favor, antes de usar algún hook leer su documentación! --**

## ☕️ Caraterísticas

* API concisa API
* Pequeña y ligera
* Fácil de aprender
* Enfoque funcional
* Completamente escrita en JS (aunque los typos (types) de TS son compatibles)

<div>
  <p align="center">
    <a href="https://beautifulinteractions.github.io/beautiful-react-hooks/" target="_blank">
    🌟 Mira la documentación aquí 🌟
    </a>
  </p>
</div>

## 🕺 Instalación

Usando `npm`:
```bash
$ npm install beautiful-react-hooks
```

Usando `yarn`:

```bash
$ yarn add beautiful-react-hooks
```

## 🎨 Hooks

* [useGlobalEvent](docs/useGlobalEvent.md)
* [usePreviousValue](docs/usePreviousValue.md)
* [useValueHistory](docs/useValueHistory.md)
* [useValidatedState](docs/useValidatedState.md)
* [useMediaQuery](docs/useMediaQuery.md)
* [useOnlineState](docs/useOnlineState.md)
* [useViewportSpy](docs/useViewportSpy.md)
* [useGeolocation](docs/useGeolocation.md), [useGeolocationState](docs/useGeolocationState.md) and [useGeolocationEvents](docs/useGeolocationEvents.md)
* [useDrag](docs/useDrag.md), [useDragEvents](docs/useDragEvents.md)
* [useMouse](docs/useMouse.md), [useMouseState](docs/useMouseState.md) and [useMouseEvents](docs/useMouseEvents.md)
* [useLifecycle](docs/useLifecycle.md), [useDidMount](docs/useDidMount.md) and [useWillUnmount](docs/useWillUnmount.md)
* [useWindowResize](docs/useWindowResize.md)
* [useWindowScroll](docs/useWindowScroll.md)
* [useRequestAnimationFrame](docs/useRequestAnimationFrame.md)
* [useTimeout](docs/useTimeout.md)
* [useConditionalTimeout](docs/useConditionalTimeout.md)
* [useInterval](docs/useInterval.md)
* [useDebouncedFn](docs/useDebouncedFn.md)
* [useThrottledFn](docs/useThrottledFn.md)
* [useLocalStorage](docs/useLocalStorage.md)

<div>
  <p align="center">
    <a href="https://beautifulinteractions.github.io/beautiful-react-hooks/" target="_blank">
    🌟 Mira la documentación aquí 🌟
    </a>
  </p>
</div>

## Contribuir

Las contribuciones son muy bienvenidas y deseadas.

Para enviar tu propio hook personalizado, por favor este seguro de leer nuestras instrucciones [CONTRIBUTING](./CONTRIBUTING.md)

**Antes de enviar** una nueva solicitud de mezcla (merge), por favor este seguro de:

1. Haber actualizado la version del package.json y reportado sus cambios dentro del archivo 
[CHANGELOG](./CHANGELOG.md)
2. Correr `npm test` y `npm build` antes de enviar su solicitud de mezcla (merge).
3. Haber añadido la documentación de su hook personalizado (*posiblement puedes usar el [HOOK_DOCUMENTATION_TEMPLATE](./HOOK_DOCUMENTATION_TEMPLATE.md) para documentarlo*).
4. Haber actualizado el archivo `index.d.ts` con los tipos (types) de su hook.

### Realizado con

* [React](https://reactjs.org/)
* [Mocha](https://mochajs.org/)
* [Chai](https://www.chaijs.com/)
* [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro)
* [@testing-library/react-hooks](https://react-hooks-testing-library.com/) 


### Creditos

Esta librería is proporcionada y patrocinada por:

<div>
  <p>
    <a href="https://beautifulinteractions.com/">
      <img src="https://beautifulinteractions.com/img/logo-colorful.svg" alt="Beautiful interactions" width="140px" />
    </a>
  </p>
</div>

Como parte de nuestro compromiso de apoyar y contribuir con la comunidad de código abierto.

---

Icono realizado por [Freepik](https://www.flaticon.com/authors/freepik) from [www.flaticon.com](https://www.flaticon.com/free-icon/hook_1081812)
