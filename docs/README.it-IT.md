![CI/CD](https://github.com/beautifulinteractions/beautiful-react-hooks/workflows/CI/CD/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/beautifulinteractions/beautiful-react-hooks/badge.svg?branch=master)](https://coveralls.io/github/beautifulinteractions/beautiful-react-hooks?branch=master)[![License:
MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
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
    Una collezione di hooks leggeri (e si spera utili) per velocizzare lo sviluppo di hooks personalizzati e
    componenti React
  </p>
</div>

<div>
  <p align="center">
    <a href="https://antonioru.github.io/beautiful-react-hooks/" target="_blank">
    🌟 Provali in azione qui 🌟
    </a>
  </p>
</div>

![Usage example](../usage_example.png)

<a href="https://github.com/beautifulinteractions/beautiful-react-hooks/">🇬🇧 English</a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.zh-CN.md">🇨🇳 简体中文</a> | 🇮🇹 Italiano
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.es-ES.md"> 🇪🇸 Español </a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.uk-UA.md">🇺🇦 Ukrainian</a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.pt-BR.md">🇧🇷 Brazilian Portuguese</a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.pl-PL.md">🇵🇱 Polski </a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.jp-JP.md">&#x1f1ef;&#x1f1f5; 日本語 </a>

In un'applicazione React, gli hooks ci permettono di astrarre complesse logiche di business in singole funzioni riutilizzabili.<br />
Fino ad ora abbiamo notato che la maggior parte degli hooks che abbiamo creato e condiviso nei nostri progetti, hanno un
_core_ piuttosto simile tra loro, un _core_ che coinvolge spesso gli stessi pattern di sviluppo (callback, referenze e cicli di vita).<br />
Per queato motivo abbiamo cercato di semplificare e concentrare questo _core_ in  `beautiful-react-hooks`: una collezione di piccoli hooks
riutilizzabili per aiutare altri sviluppatori (e società) a velocizzare i loro processi di sviluppo.<br /><br />
Abbiamo cercato di creare una API che fosse sia concisa che coerente, concentrandoci sulla scalabilità e la leggibilità del codice,
mantenendo la curva d'apprendimento il più bassa possible.

**-- Prima di usare qualsiasi hook, leggi la documentazione! --**

## ☕️ Features

* API concisa e coerente
* Piccole funzioni riutilizzabili
* Facile da imparare

<div>
  <p align="center">
    <a href="https://antonioru.github.io/beautiful-react-hooks/" target="_blank">
    🌟 Provali in azione qui 🌟
    </a>
  </p>
</div>

## 🕺 Installazione

Usando `npm`:

```bash
$ npm install beautiful-react-hooks
```

oppure usando `yarn`:

```bash
$ yarn add beautiful-react-hooks
```

## 🎨 Hooks

* [useQueryParam](useQueryParam.md)
* [useQueryParams](useQueryParams.md)
* [useSearchQuery](useSearchQuery.md)
* [useInfiniteScroll](useInfiniteScroll.md)
* [useObservable](useObservable.md)
* [useEvent](useEvent.md)
* [useGlobalEvent](useGlobalEvent.md)
* [usePreviousValue](usePreviousValue.md)
* [useValueHistory](useValueHistory.md)
* [useValidatedState](useValidatedState.md)
* [useMediaQuery](useMediaQuery.md)
* [useOnlineState](useOnlineState.md)
* [useViewportSpy](useViewportSpy.md)
* [useViewportState](useViewportState.md)
* [useSpeechSynthesis](useSpeechSynthesis.md) and [useSystemVoices](useSystemVoices.md)
* [useGeolocation](useGeolocation.md), [useGeolocationState](useGeolocationState.md) and [useGeolocationEvents](useGeolocationEvents.md)
* [useDrag](useDrag.md), [useDropZone](useDropZone.md) and [useDragEvents](useDragEvents.md)
* [useMouse](useMouse.md), [useMouseState](useMouseState.md) and [useMouseEvents](useMouseEvents.md)
* [useTouch](useTouch.md), [useTouchState](useTouchState.md) and [useTouchEvents](useTouchEvents.md)
* [useLifecycle](useLifecycle.md), [useDidMount](useDidMount.md) and [useWillUnmount](useWillUnmount.md)
* [useWindowResize](useWindowResize.md)
* [useWindowScroll](useWindowScroll.md)
* [useRequestAnimationFrame](useRequestAnimationFrame.md)
* [useResizeObserver](useResizeObserver.md)
* [useTimeout](useTimeout.md)
* [useInterval](useInterval.md)
* [useDebouncedCallback](useDebouncedCallback.md)
* [useThrottledCallback](useThrottledCallback.md)
* [useLocalStorage](useLocalStorage.md)
* [useSessionStorage](useSessionStorage.md)
* [useDefaultedState](useDefaultedState.md)
* [useRenderInfo](useRenderInfo.md)
* [useSwipe](useSwipe.md), [useHorizontalSwipe](useHorizontalSwipe.md) and [useVerticalSwipe](useVerticalSwipe.md)
* [useSwipeEvents](useSwipeEvents.md)
* [useConditionalTimeout](useConditionalTimeout.md)

<div>
  <p align="center">
    <a href="https://antonioru.github.io/beautiful-react-hooks/" target="_blank">
    🌟 Provali in azione qui 🌟
    </a>
  </p>
</div>

## Contribuisci

La tua contribuzione è benvenuta!

Per inviare il tuo custom hook, leggi le nostre [linee guida](../CONTRIBUTING.md) in materia di contribuzioni.

**Prima di inviarci** la tua pull request, per favore sii sicuro che:

1. Hai aggiornato la versione nel file package.json ed hai aggiunto i cambiamenti che hai fatto nel file [CHANGELOG](../CHANGELOG.md).
2. Hai fatto partire i testi con `npm test` ed hai fatto una build locale con `npm build`.
3. Hai aggiunto la documentazione del tuo custom hook (*puoi partire dal
   template [HOOK_DOCUMENTATION_TEMPLATE](../HOOK_DOCUMENTATION_TEMPLATE.md), per scrivere la tua documentazione*).
4. Hai aggiornato il file `index.d.ts` aggiungendo i tipi Typescript del tuo hook.

### Tools utilizzati

* [React](https://reactjs.org/)
* [Mocha](https://mochajs.org/)
* [Chai](https://www.chaijs.com/)
* [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro)
* [@testing-library/react-hooks](https://react-hooks-testing-library.com/)

---

Icona fatta dall'utente [Freepik](https://www.flaticon.com/authors/freepik)
su [www.flaticon.com](https://www.flaticon.com/free-icon/hook_1081812)
