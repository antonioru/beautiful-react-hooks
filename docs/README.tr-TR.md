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
    Geliştirme sürecinizi hızlandırmak ve daha verimli hale getirmek için özel olarak hazırlanmış React hooklar koleksiyonu.
  </p>
</div>

<div>
  <p align="center">
    <a href="https://antonioru.github.io/beautiful-react-hooks/" target="_blank">
    🌟 Bütün Özel React Hookları 🌟
    </a>
  </p>
</div>

![Usage example](../usage_example.png)

<a href="https://github.com/beautifulinteractions/beautiful-react-hooks/">🇬🇧 English</a> | <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.zh-CN.md">🇨🇳 简体中文</a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.it-IT.md">🇮🇹 Italiano</a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.es-ES.md"> 🇪🇸 Español </a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.uk-UA.md">🇺🇦 Ukrainian</a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.pt-BR.md">🇧🇷 Brazilian Portuguese</a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.pl-PL.md">🇵🇱 Polski </a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.jp-JP.md">🇯🇵 日本語 </a>
| 🇹🇷 Türkçe

## 💡 Neden?

Özel React hooklar, geliştiricilere bileşenlerin iş mantığını tek, yeniden kullanılabilir işlevlere soyutlama imkanı sağlar.
Oluşturduğum ve projeler arasında paylaştığım birçok hookun geri çağrıları, referansları, etkinlikleri ve bileşen yaşam döngüsü ile ilgili olduğunu fark ettim.\
Bu nedenle `beautiful-react-hooks`, adlı, diğer geliştiricilerin geliştirme süreçlerini hızlandırmalarına yardımcı olabilecek kullanışlı [React hooks](https://beta.reactjs.org/reference/react) koleksiyonunu oluşturdum.
Ayrıca, kod okunabilirliğini vurgulayan, öğrenme eğrisini mümkün olduğunca düşük tutarak daha büyük ekiplerin kullanımı ve paylaşımı için uygun hale getiren özlü ve pratik bir API oluşturmayı amaçladım.

**-- Lütfen herhangi bir hook'u kullanmadan önce belgesini okuyun! --**

## ☕️ Özellikler

- Sade API
- Hafif ve küçük
- Öğrenmesi kolay

<div>
  <p align="center">
    <a href="https://antonioru.github.io/beautiful-react-hooks/" target="_blank">
    🌟 Bütün Özel React Hookları 🌟
    </a>
  </p>
</div>

## 🕺 Kurulumu

`npm` kullanıyorsanız:

```bash
$ npm install beautiful-react-hooks
```

`yarn` kullanıyorsanız:

```bash
$ yarn add beautiful-react-hooks
```

## Temel kullanımı

İstediğiniz özel hook'u aşağıdaki şekilde import ederek kolayca kullanabilirsin.:

```ts static
import useSomeHook from "beautiful-react-hooks/useSomeHook";
```

## 🎨 Hooks

- [useMutableState](docs/useMutableState.md)
- [useInfiniteScroll](docs/useInfiniteScroll.md)
- [useObservable](docs/useObservable.md)
- [useEvent](docs/useEvent.md)
- [useGlobalEvent](docs/useGlobalEvent.md)
- [usePreviousValue](docs/usePreviousValue.md)
- [useValueHistory](docs/useValueHistory.md)
- [useValidatedState](docs/useValidatedState.md)
- [useMediaQuery](docs/useMediaQuery.md)
- [useOnlineState](docs/useOnlineState.md)
- [useViewportSpy](docs/useViewportSpy.md)
- [useViewportState](docs/useViewportState.md)
- [useSpeechRecognition](docs/useSpeechRecognition.md) and [useSpeechSynthesis](docs/useSpeechSynthesis.md)
- [useGeolocation](docs/useGeolocation.md), [useGeolocationState](docs/useGeolocationState.md)
  and [useGeolocationEvents](docs/useGeolocationEvents.md)
- [useDrag](docs/useDrag.md), [useDropZone](docs/useDropZone.md) and [useDragEvents](docs/useDragEvents.md)
- [useMouse](docs/useMouse.md), [useMouseState](docs/useMouseState.md) and [useMouseEvents](docs/useMouseEvents.md)
- [useTouch](docs/useTouch.md), [useTouchState](docs/useTouchState.md) and [useTouchEvents](docs/useTouchEvents.md)
- [useLifecycle](docs/useLifecycle.md), [useDidMount](docs/useDidMount.md) and [useWillUnmount](docs/useWillUnmount.md)
- [useWindowResize](docs/useWindowResize.md)
- [useWindowScroll](docs/useWindowScroll.md)
- [useRequestAnimationFrame](docs/useRequestAnimationFrame.md)
- [useResizeObserver](docs/useResizeObserver.md)
- [useTimeout](docs/useTimeout.md)
- [useInterval](docs/useInterval.md)
- [useDebouncedCallback](docs/useDebouncedCallback.md)
- [useThrottledCallback](docs/useThrottledCallback.md)
- [useLocalStorage](docs/useLocalStorage.md)
- [useSessionStorage](docs/useSessionStorage.md)
- [useDefaultedState](docs/useDefaultedState.md)
- [useRenderInfo](docs/useRenderInfo.md)
- [useSwipe](docs/useSwipe.md), [useHorizontalSwipe](docs/useHorizontalSwipe.md) and [useVerticalSwipe](docs/useVerticalSwipe.md)
- [useSwipeEvents](docs/useSwipeEvents.md)
- [useConditionalTimeout](docs/useConditionalTimeout.md)
- [useCookie](docs/useCookie.md)
- [useDarkMode](docs/useDarkMode.md)
- [useUnmount](docs/useUnmount.md)
- [useUpdateEffect](docs/useUpdateEffect.md)
- [useIsFirstRender](docs/useIsFirstRender.md)
- [useMutationObserver](docs/useMutationObserver.md)
- [useAudio](docs/useAudio.md)
- [useObjectState](docs/useObjectState.md)
- [useToggle](docs/useToggle.md)
- [useQueryParam](docs/useQueryParam.md)
- [useQueryParams](docs/useQueryParams.md)
- [useSearchQuery](docs/useSearchQuery.md)
- [useURLSearchParams](docs/useURLSearchParams.md)

<div>
  <p align="center">
    <a href="https://antonioru.github.io/beautiful-react-hooks/" target="_blank">
    🌟 Bütün Özel React Hookları🌟
    </a>
  </p>
</div>

## Eş Bağımlılıklar

Bazı hooklar üçüncü taraf kütüphaneleri kullanarak oluşturulur (örneğin rxjs, react-router-dom, redux gibi). Bu nedenle, bu kütüphaneleri eş bağımlılıklar olarak listelenmiş olarak göreceksiniz.\
Eğer bu hookları doğrudan kullanmıyorsanız, bu bağımlılıkları yüklemeniz gerekmez

## Katkıda Bulunma

Katkıda bulunmak hoş görülür ve istenir.

Özel hook'unuzu göndermeden önce [CONTRIBUTING](./CONTRIBUTING.md) yönergelerini tamamen okuduğunuzdan ve anladığınızdan emin olun.

**Pull isteğini göndermeden önce**: Lütfen aşağıdakilere dikkat edin

1. Kodunuz için testler yazmayı unutmayın ve çekme isteğinizi göndermeden önce `npm test` ve `npm build` komutlarını çalıştırın.
2. Eğer özel bir hook oluşturuyorsanız, lütfen özel hook'unuzu belgelediğinizden emin olun (_Özel hook'unuzu belgelemek için [HOOK_DOCUMENTATION_TEMPLATE](./HOOK_DOCUMENTATION_TEMPLATE.md) bu dökümanı kullanabilirsiniz._).

## Katkılar

Simge [Freepik](https://www.flaticon.com/authors/freepik) tarafından [www.flaticon.com](https://www.flaticon.com/free-icon/hook_1081812) adresinden oluşturuldu.
