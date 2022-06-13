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
import { useSomeHook } from 'beautiful-react-hooks'
import useSomeHook from 'beautiful-react-hoks/useSomeHook'
```

## Working with Refs in TypeScript

The documentation of this module is written in JavaScript, so you will see a lot of this:

```javascript
import { ref } from 'react';

const ref = useRef()
```

If you are in a TypeScript project, you should declare your ref as a `RefObject<T extends HTMLElement>`. For example:

```ts
import { ref } from 'react';

const ref = useRef<HTMLDivElement>(null);
```

See [here](https://dev.to/wojciechmatuszewski/mutable-and-immutable-useref-semantics-with-react-typescript-30c9) for information on the
difference between a `MutableRefObject` and a `RefObject`.

### Peer dependencies

Some hooks are built on top of third-party libraries (rxjs, react-router-dom, redux), therefore you will notice those libraries listed as
peer dependencies. You don't have to install these dependencies unless you directly use those hooks.
