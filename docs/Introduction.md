# Introduction

[![Build Status](https://travis-ci.org/beautifulinteractions/beautiful-react-hooks.svg?branch=master)](https://travis-ci.org/beautifulinteractions/beautiful-react-hooks)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![npm](https://img.shields.io/npm/v/beautiful-react-hooks)
![GitHub stars](https://img.shields.io/github/stars/beautifulinteractions/beautiful-react-hooks?style=social)

`beautiful-react-hooks` is a collection of tailor-made [React hooks](https://beta.reactjs.org/reference/react) to enhance your development
process and make it faster.

## 💡 Why?

Custom React hooks allow developers to abstract the business logic of components into single, reusable functions.<br />
I have noticed that many of the hooks I have created and shared across projects involve callbacks, references, events, and dealing with the
component lifecycle. <br />
Therefore, I have created `beautiful-react-hooks`, a collection of useful [React hooks](https://beta.reactjs.org/reference/react) that may
help other developers speed up their development process.<br/>
Moreover, I have strived to create a concise and practical API that emphasizes code readability, while keeping the learning curve as low as
possible, making it suitable for larger teams to use and share

## ☕️ Features

* Concise API
* Small and lightweight
* Easy to learn

## Basic usage

importing a hooks is as easy as the following straightforward line:

```ts static
import useSomeHook from 'beautiful-react-hooks/useSomeHook'
```

## Peer dependencies

Some hooks are built using third-party libraries (such as rxjs, react-router-dom, redux). As a result, you will see these libraries listed
as peer dependencies.\
Unless you are using these hooks directly, you need not install these dependencies.
