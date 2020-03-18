[![Build Status](https://travis-ci.org/beautifulinteractions/beautiful-react-hooks.svg?branch=master)](https://travis-ci.org/beautifulinteractions/beautiful-react-hooks)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![npm](https://img.shields.io/npm/v/beautiful-react-hooks)
![GitHub stars](https://img.shields.io/github/stars/beautifulinteractions/beautiful-react-hooks?style=social)


<div align="center">
  <p align="center">
     <img src="../logo.png" alt="Beautiful React Hooks" width="750px" />
  </p>
</div>
<br />
<div>
  <p align="center">
    Una colección de hermosos (y ojalá que útiles) hooks de React para acelerar tu desarrollo de componentes y hooks
  </p>
</div>

<div>
  <p align="center">
    <a href="https://beautifulinteractions.github.io/beautiful-react-hooks/" target="_blank">
    🌟Para probar clic aquí🌟
    </a>
  </p>
</div>

![Usage example](../usage_example.png)

<a href="https://github.com/beautifulinteractions/beautiful-react-hooks/">🇬🇧 English</a> | <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.zh-CN.md">🇨🇳 简体中文</a> | <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.it-IT.md">🇮🇹 Italiano</a> | 🇪🇸 Español | <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.uk-UA.md">🇺🇦 Ukrainian</a> | <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.pt-BR.md">🇧🇷 Brazilian Portuguese</a> | <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.pl-PL.md">🇵🇱 Polski </a>


## 💡 Por qué? 

React custom hooks permite abstraer la lógica de negocio de los componentes en funciones únicas reutilizables.<br />
Hasta ahora hemos notado que la mayoría de los  hooks que hemos creado y compartido en nuestros proyectos tienen un núcleo bastante similar, un núcleo que a menudo implica los mismos patrones de desarrollo (llamadas, referencias y ciclos de vida). <br />
Por esta razón hemos tratado de resumir esa esencia en  `beautiful-react-hooks`:una colección de (*esperamos*) útiles 
Para que React hooks sirva otras empresas y profesionales ayudando a acelerar su proceso de desarrollo.<br /><br />
Además, creamos un API conciso pero concreto teniendo en cuenta la legibilidad del código, centrándonos en mantener la curva de aprendizaje lo más baja posible para que pueda ser usada y compartida en equipos más grandes.



**-- Por favor, antes de utilizar un hook, leer su documentación! --**

## ☕️ Características

* API Consistente.
* Pequeña y ligera.
* Fácil de aprender.
* Enfoque funcional.
* Completamente escrito en JS (aunque se admiten los tipos de TS).

<div>
  <p align="center">
    <a href="https://beautifulinteractions.github.io/beautiful-react-hooks/" target="_blank">
    🌟 Para probar clic aquí 🌟
    </a>
  </p>
</div>

## 🕺 Instalar

Usando `npm`:
```bash
$ npm install beautiful-react-hooks
```

Usando `yarn`:

```bash
$ yarn add beautiful-react-hooks
```

## 🎨 Hooks

* [useGlobalEvent](useGlobalEvent.md)
* [usePreviousValue](usePreviousValue.md)
* [useValueHistory](useValueHistory.md)
* [useValidatedState](useValidatedState.md)
* [useMediaQuery](useMediaQuery.md)
* [useOnlineState](useOnlineState.md)
* [useViewportSpy](useViewportSpy.md)
* [useGeolocation](useGeolocation.md), [useGeolocationState](useGeolocationState.md) and [useGeolocationEvents](useGeolocationEvents.md)
* [useDrag](useDrag.md), [useDropZone](useDropZone.md) y [useDragEvents](useDragEvents.md)
* [useMouse](useMouse.md), [useMouseState](useMouseState.md) y [useMouseEvents](useMouseEvents.md)
* [useLifecycle](useLifecycle.md), [useDidMount](useDidMount.md) y [useWillUnmount](useWillUnmount.md)
* [useWindowResize](useWindowResize.md)
* [useWindowScroll](useWindowScroll.md)
* [useRequestAnimationFrame](useRequestAnimationFrame.md)
* [useTimeout](useTimeout.md)
* [useConditionalTimeout](useConditionalTimeout.md)
* [useInterval](useInterval.md)
* [useDebouncedFn](useDebouncedFn.md)
* [useThrottledFn](useThrottledFn.md)
* [useLocalStorage](useLocalStorage.md)

<div>
  <p align="center">
    <a href="https://beautifulinteractions.github.io/beautiful-react-hooks/" target="_blank">
    🌟 Para probar clic aquí🌟
    </a>
  </p>
</div>

## Contribuir

Las contribuciones son muy bienvenidas y deseadas. 

Para presentar su custom hook, por favor asegúrese de leer nuestro [CONTRIBUTING](../CONTRIBUTING.md) guidelines.

**Antes de enviar** un nuevo merge request, por favor asegúrese:

1. Ha actualizado el package.json version e informó de sus cambios en el archivo [CHANGELOG](../CHANGELOG.md)
2. Asegúrate de ejecutar `npm test` y `npm build` antes de enviar el merge request.
3. Asegúrate de que has añadido la documentación de tu custom hook (* puedes usar el [HOOK_DOCUMENTATION_TEMPLATE](../HOOK_DOCUMENTATION_TEMPLATE.md)  para documentar tu custom hook*).
4. Asegúrate de que has actualizado el  `index.d.ts` el archivo de tus tipo de hook.

### Herramientas utilizadas

* [React](https://reactjs.org/)
* [Mocha](https://mochajs.org/)
* [Chai](https://www.chaijs.com/)
* [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro)
* [@testing-library/react-hooks](https://react-hooks-testing-library.com/) 


### Creditos

Esta biblioteca es proporcionada y patrocinada por: 

<div>
  <p>
    <a href="https://beautifulinteractions.com/">
      <img src="https://beautifulinteractions.com/img/logo-colorful.svg" alt="Beautiful interactions" width="140px" />
    </a>
  </p>
</div>

Como parte de nuestro compromiso de apoyar y contribuir a la comunidad de código abierto.

---

Icon desde [Freepik](https://www.flaticon.com/authors/freepik) y [www.flaticon.com](https://www.flaticon.com/free-icon/hook_1081812)
