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
    コンポーネントやフック開発を高速化するための、美しい（できれば便利な）Reactフックのコレクションです。
  </p>
</div>

<div>
  <p align="center">
    <a href="https://antonioru.github.io/beautiful-react-hooks/" target="_blank">
    🌟 Live playground here 🌟
    </a>
  </p>
</div>

![Usage example](../usage_example.png)

🇬🇧 English | <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.zh-CN.md">🇨🇳 简体中文</a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.it-IT.md">🇮🇹 Italiano</a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.es-ES.md"> 🇪🇸 Español </a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.uk-UA.md">🇺🇦 Ukrainian</a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.pt-BR.md">🇧🇷 Brazilian Portuguese</a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.pl-PL.md">🇵🇱 Polski </a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.jp-JP.md">&#x1f1ef;&#x1f1f5; 日本語 </a>

## 💡 なぜ?

React custom hooksは抽象的なコンポーネントのビジネスロジックを単一な再利用可能な関数とする事が出来ます。<br />
これまでのところ、私たちが作成し、内部で共有されているhookの大半はかなりの頻度でコールバック参照、イベントとコンポーネントのライフサイクルに関して類似する点がある事が分かっています。<br />
このため、私たちはそん知見を企業や専門家が開発プロセスをスピードアップするのに役立つ（できれば）便利なReact hookのコレクションとして
`beautiful-react-hooks`にまとめました。
<br /><br />
さらに、コードの読みやすさを考慮して、簡潔かつ具体的なAPIを作成しました。 より大きなチームで使用し、共有できるように、学習曲線を可能な限り低く抑える事が可能です。

**-- hookを利用する前に、ドキュメントを確認して下さい！ --**

## ☕️ 特徴

* 簡潔なAPI
* 軽量
* 学習が容易

<div>
  <p align="center">
    <a href="https://antonioru.github.io/beautiful-react-hooks/" target="_blank">
    🌟 Live playground here 🌟
    </a>
  </p>
</div>

## 🕺 インストール

`npm`:を利用する場合:

```bash
$ npm install beautiful-react-hooks
```

`yarn`を利用する場合:

```bash
$ yarn add beautiful-react-hooks
```

## 🎨 Hooks

* [useQueryParam](useQueryParam.md)
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
    🌟 Live playground here 🌟
    </a>
  </p>
</div>

## コントリビューション

このレポへの貢献は大歓迎ですし、必要としています。

あなたのカスタムhookのPRを送るにあたり、私たちの[CONTRIBUTING](../CONTRIBUTING.md) ガイドラインを確認してください.

**PRを送る前に** 下記を確認してください:

1. package.jsonのバージョンが更新されている事そして[CHANGELOG](../CHANGELOG.md)に変更について記述を報告している事 You have updated the package.json version and reported your
   changes into the [CHANGELOG](./CHANGELOG.md) file
2. PRを送る前に、 `npm test` と `npm build`を実行し問題がない事

3. あなたのカスタムhookの`doc`フォルダに追加している事  
   (*カスタムhookのドキュメントテンプレートを用意しています [HOOK_DOCUMENTATION_TEMPLATE](../HOOK_DOCUMENTATION_TEMPLATE.md)*).

4. あたなのhookの型のため、`index.d.ts`ファイルを更新している事

### 利用しているライブラリ

* [React](https://reactjs.org/)
* [Mocha](https://mochajs.org/)
* [Chai](https://www.chaijs.com/)
* [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro)
* [@testing-library/react-hooks](https://react-hooks-testing-library.com/)

---

Icon made by [Freepik](https://www.flaticon.com/authors/freepik) from [www.flaticon.com](https://www.flaticon.com/free-icon/hook_1081812)
