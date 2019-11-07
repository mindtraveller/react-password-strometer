# react-password-strometer

![npm](https://img.shields.io/npm/v/react-password-strometer?color=limegreen) 
[![Build Status](https://travis-ci.org/Mindtraveller/react-password-strometer.svg?branch=master)](https://travis-ci.org/Mindtraveller/react-password-strometer)
[![Greenkeeper badge](https://badges.greenkeeper.io/Mindtraveller/react-password-strometer.svg)](https://greenkeeper.io/)

![npm bundle size](https://img.shields.io/bundlephobia/min/react-password-strometer)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-password-strometer)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/react-password-strometer/peer/react)
![npm dependency version](https://img.shields.io/npm/dependency-version/react-password-strometer/zxcvbn)

## React password strength meter component

This library provides a React wrapper around [zxcvbn][https://github.com/dropbox/zxcvbn].
Password strength calculations are performed in separate Web Worker, since it may take relatively big time. 

## [Demo][https://codesandbox.io/s/quizzical-maxwell-9kvc2?fontsize=14]

## Examples

### Strometer
The component accepts a password and a render function, which you can use to render whatever password strength representation you want. 
The function will be given with a password information as an argument which includes all properties `zxcvbn` provides.

```jsx harmony
import Strometer from 'react-password-strometer';

const password = 'some password';

<Strometer password={password}>
  {({ passwordInfo }) => (
    <span>{passwordInfo && passwordInfo.score}</span>
  )}
</Strometer>
````

### Prop Types
````typescript
{
    password: string,
    children: ({ passwordInfo: object | null }) => ReactElement,
}
````
- `password` - the password to be processed.
- `children` - the function which accepts `passwordInfo` and renders content. 
`passwordInfo` has all properties which `zxcvbn` provides (e.g. `score`). 
Please note that `passwordInfo` is `null` if the `password` is an empty string, because usually empty password is considered invalid, whereas `zxcvbn` gives 0 score to it. 


[https://codesandbox.io/s/quizzical-maxwell-9kvc2?fontsize=14]: https://codesandbox.io/s/quizzical-maxwell-9kvc2?fontsize=14

[https://github.com/dropbox/zxcvbn]: https://github.com/dropbox/zxcvbn
