![CI/CD](https://github.com/beautifulinteractions/beautiful-react-hooks/workflows/CI/CD/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/beautifulinteractions/beautiful-react-hooks/badge.svg?branch=master)](https://coveralls.io/github/beautifulinteractions/beautiful-react-hooks?branch=master)[![License:
MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
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
    A collection of tailor-made React hooks to enhance your development process and make it faster.
  </p>
</div>

<div>
  <p align="center">
    <a href="https://antonioru.github.io/beautiful-react-hooks/" target="_blank">
    🌟 Hooks Playground 🌟
    </a>
  </p>
</div>

![Usage example](./usage_example.png)

🇬🇧 English | <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.zh-CN.md">🇨🇳 简体中文</a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.it-IT.md">🇮🇹 Italiano</a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.es-ES.md"> 🇪🇸 Español </a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.uk-UA.md">🇺🇦 Ukrainian</a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.pt-BR.md">🇧🇷 Brazilian Portuguese</a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.pl-PL.md">🇵🇱 Polski </a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.jp-JP.md">🇯🇵 日本語 </a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.tr-TR.md">🇹🇷 Türkçe</a>

## 💡 Why?

Custom React hooks allow developers to abstract the business logic of components into single, reusable functions.\
I have noticed that many of the hooks I have created and shared across projects involve callbacks, references, events, and dealing with the
component lifecycle.\
Therefore, I have created `beautiful-react-hooks`, a collection of useful [React hooks](https://beta.reactjs.org/reference/react) that may
help other developers speed up their development process.\
Moreover, I have strived to create a concise and practical API that emphasizes code readability, while keeping the learning curve as low as
possible, making it suitable for larger teams to use and share
t
**-- Please before using any hook, read its documentation! --**

## ☕️ Features

* Concise API
* Small and lightweight
* Easy to learn

<div>
  <p align="center">
    <a href="https://antonioru.github.io/beautiful-react-hooks/" target="_blank">
    🌟 Hooks Playground 🌟
    </a>
  </p>
</div>

## 🕺 Install

by using `npm`:

```bash
$ npm install beautiful-react-hooks
```

by using `yarn`:

```bash
$ yarn add beautiful-react-hooks
```

## Basic usage

importing a hooks is as easy as the following straightforward line:

```ts static
import useSomeHook from 'beautiful-react-hooks/useSomeHook'
```

## 🎨 Hooks

* [useMutableState](docs/useMutableState.md)
* [useInfiniteScroll](docs/useInfiniteScroll.md)
* [useObservable](docs/useObservable.md)
* [useEvent](docs/useEvent.md)
* [useGlobalEvent](docs/useGlobalEvent.md)
* [usePreviousValue](docs/usePreviousValue.md)
* [useValueHistory](docs/useValueHistory.md)
* [useValidatedState](docs/useValidatedState.md)
* [useMediaQuery](docs/useMediaQuery.md)
* [useOnlineState](docs/useOnlineState.md)
* [useViewportSpy](docs/useViewportSpy.md)
* [useViewportState](docs/useViewportState.md)
* [useSpeechRecognition](docs/useSpeechRecognition.md) and [useSpeechSynthesis](docs/useSpeechSynthesis.md)
* [useGeolocation](docs/useGeolocation.md), [useGeolocationState](docs/useGeolocationState.md)
  and [useGeolocationEvents](docs/useGeolocationEvents.md)
* [useDrag](docs/useDrag.md), [useDropZone](docs/useDropZone.md) and [useDragEvents](docs/useDragEvents.md)
* [useMouse](docs/useMouse.md), [useMouseState](docs/useMouseState.md) and [useMouseEvents](docs/useMouseEvents.md)
* [useTouch](docs/useTouch.md), [useTouchState](docs/useTouchState.md) and [useTouchEvents](docs/useTouchEvents.md)
* [useLifecycle](docs/useLifecycle.md), [useDidMount](docs/useDidMount.md) and [useWillUnmount](docs/useWillUnmount.md)
* [useWindowResize](docs/useWindowResize.md)
* [useWindowScroll](docs/useWindowScroll.md)
* [useRequestAnimationFrame](docs/useRequestAnimationFrame.md)
* [useResizeObserver](docs/useResizeObserver.md)
* [useTimeout](docs/useTimeout.md)
* [useInterval](docs/useInterval.md)
* [useDebouncedCallback](docs/useDebouncedCallback.md)
* [useThrottledCallback](docs/useThrottledCallback.md)
* [useLocalStorage](docs/useLocalStorage.md)
* [useSessionStorage](docs/useSessionStorage.md)
* [useDefaultedState](docs/useDefaultedState.md)
* [useRenderInfo](docs/useRenderInfo.md)
* [useSwipe](docs/useSwipe.md), [useHorizontalSwipe](docs/useHorizontalSwipe.md) and [useVerticalSwipe](docs/useVerticalSwipe.md)
* [useSwipeEvents](docs/useSwipeEvents.md)
* [useConditionalTimeout](docs/useConditionalTimeout.md)
* [useCookie](docs/useCookie.md)
* [useDarkMode](docs/useDarkMode.md)
* [useUnmount](docs/useUnmount.md)
* [useUpdateEffect](docs/useUpdateEffect.md)
* [useIsFirstRender](docs/useIsFirstRender.md)
* [useMutationObserver](docs/useMutationObserver.md)
* [useAudio](docs/useAudio.md)
* [useObjectState](docs/useObjectState.md)
* [useToggle](docs/useToggle.md)
* [useQueryParam](docs/useQueryParam.md)
* [useQueryParams](docs/useQueryParams.md)
* [useSearchQuery](docs/useSearchQuery.md)
* [useURLSearchParams](docs/useURLSearchParams.md)

<div>
  <p align="center">
    <a href="https://antonioru.github.io/beautiful-react-hooks/" target="_blank">
    🌟 Hooks Playground 🌟
    </a>
  </p>
</div>

## Peer dependencies

Some hooks are built using third-party libraries (such as rxjs, react-router-dom, redux). As a result, you will see these libraries listed
as peer dependencies.\
Unless you are using these hooks directly, you need not install these dependencies.

## Contributing

Contributions are very welcome and wanted.

To submit your custom hook, make sure you have thoroughly read and understood the [CONTRIBUTING](./CONTRIBUTING.md) guidelines.

**Prior to submitting your pull request**: please take note of the following

1. make sure to write tests for your code, run `npm test` and `npm build` before submitting your merge request.
2. in case you're creating a custom hook, make sure you've added the documentation (*you may use
   the [HOOK_DOCUMENTATION_TEMPLATE](./HOOK_DOCUMENTATION_TEMPLATE.md) to document your custom hook*).

## Credits

Icon made by [Freepik](https://www.flaticon.com/authors/freepik) from [www.flaticon.com](https://www.flaticon.com/free-icon/hook_1081812)
