# Introduction

[![Build Status](https://travis-ci.org/beautifulinteractions/beautiful-react-hooks.svg?branch=master)](https://travis-ci.org/beautifulinteractions/beautiful-react-hooks)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![npm](https://img.shields.io/npm/v/beautiful-react-hooks)
![GitHub stars](https://img.shields.io/github/stars/beautifulinteractions/beautiful-react-hooks?style=social)

Beautiful React Hooks is a collection of beautiful (and hopefully useful) React hooks to speed-up your components and hooks development.

## 💡 Why?

React custom hooks allow abstracting components' business logic into single reusable functions.<br />
So far, I've found that most of the hooks I've created and therefore shared between my projects have quite often a similar gist that
involves callback references, events and components' lifecycle. <br />
For this reason I've tried to sum up that gist into `beautiful-react-hooks`: a collection of (*hopefully*) useful React hooks to possibly
help other developers to speed up their development process.<br /><br />
Furthermore, I've tried to create a concise yet concrete API having in mind the code readability, focusing to keep the learning curve as
lower as possible so that the it can be used and shared in bigger teams.

## ☕️ Features

* Concise API
* Small and lightweight
* Easy to learn
* Functional approach
* Fully written in JS (although TS types are supported)

## Peer dependencies

Some hooks are built on top of third-party libraries (rxjs, react-router-dom, redux), therefore you will notice those libraries listed as
peer dependencies. You don't have to install these dependencies unless you directly use those hooks.

## Imports

Despite having an `index.ts` file, it's recommended importing the hooks from the library in the following fashion to avoid importing
unnecessary hooks and therefore unnecessary dependencies

```ts static
import useSomeHook from 'beautiful-react-hoks/useSomeHook'
```
