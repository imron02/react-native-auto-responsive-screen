
# react-native-auto-responsive-screen

This dependency is used to make responsive appearance in accordance with the dimensions of the design.

### Installation

```sh
$ cd project_name
$ yarn add react-native-auto-responsive-screen
```
or
```sh
$ cd project_name
$ npm install react-native-auto-responsive-screen
```
### before
![alt text](https://github.com/UADACID/react-native-auto-responsive-screen/blob/master/before.png)

### after
![alt text](https://github.com/UADACID/react-native-auto-responsive-screen/blob/master/after.png)


```js
// file on root directory

import ResponsiveScreen from 'react-native-auto-responsive-screen'

/**
 * WIDTH AND HEIGHT BASE ON MOCKUP
 */
ResponsiveScreen.init(414, 852)

const App = () => {
  ...
};
```