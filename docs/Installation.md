# Getting started

Using `npm`:

```bash
$ npm i --save beautiful-react-hooks
```

Using `yarn`:

```bash 
$ yarn add beautiful-react-hooks
```

then just import any hook described by the documentation in your React component file:

```ts static
import useSomeHook from 'beautiful-react-hoks/useSomeHook'
```

**Please note**: always import your hook from the library as a single module to avoid importing unnecessary hooks and therefore unnecessary
dependencies

## Peer dependencies

Some hooks are built on top of third-party libraries (rxjs, react-router-dom, redux), therefore you will notice those libraries listed as
peer dependencies. You don't have to install these dependencies unless you directly use those hooks.

## Working with Refs in TypeScript

The documentation of this module is written in JavaScript, so you will see a lot of this:

```jsx static
import { ref } from 'react';

const myCustomHook = () => {
  const ref = useRef()

  /* your code */

  return ref;
}
```

If you are in a TypeScript project, you should declare your ref as a `RefObject<T extends HTMLElement>`. For example:

```ts static
import { ref } from 'react';

const myCustomHook = () => {
  const ref = useRef<HTMLDivElement>(null);

  /* your code */

  return ref;
}
```

See [here](https://dev.to/wojciechmatuszewski/mutable-and-immutable-useref-semantics-with-react-typescript-30c9) for information on the
difference between a `MutableRefObject` and a `RefObject`.
