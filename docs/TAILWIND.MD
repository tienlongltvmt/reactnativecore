# Tailwind React Native Classnames 🏄‍♂️

> A simple, expressive API for TailwindCSS + React Native, written in TypeScript

```jsx
import {View, Text} from 'react-native';
import tw from 'twrnc';

const MyComponent = () => (
  <View style={tw`p-4 android:pt-2 bg-white dark:bg-black`}>
    <Text style={tw`text-md text-black dark:text-white`}>Hello World</Text>
  </View>
);
```

> 👋 NB: `v4.0.0` was just released! See [migration guide](./migration-guide.md) for
> upgrading instructions.

## Installation

```bash
npm install twrnc
```

## VS Code Intellisense

Add the following to the settings of the
[official Tailwind plugin](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
for VS Code.
create file `settings.json`

```jsonc
{
  "editor.formatOnSave": true,
  "eslint.alwaysShowStatus": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "tailwindCSS.classAttributes": [
    // ...
    "style"
  ],
  "tailwindCSS.experimental.classRegex": [
    "tw\\`([^\\`]*)",
    ["tw\\.style\\(([^)]*)\\)", "'([^']*)'"],
    ["tw\\.style\\(([^)]*)\\)", "`([^`]*)`"]
  ]
}
```

More detailed instructions, including how to add snippets, are available
[here](https://github.com/jaredh159/tailwind-react-native-classnames/discussions/124).

## Add the paths to all of your template files in your tailwind.config.js file.

```jsx
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## Customization

You can use `twrnc` right out of the box if you haven't customized your
`tailwind.config.js` file at all. But more likely you've got some important app-specific
tailwind customizations you'd like to use. For that reason, we expose the ability to
create a **custom configured version** of the `tw` function object.

```js
// lib/tailwind.js
import {create} from 'twrnc';

// create the customized version...
const tw = create(require(`../../tailwind.config.js`)); // <- your path may differ

// ... and then this becomes the main function your app uses
export default tw;
```

...and in your component files import your own customized version of the function instead:

```jsx
// SomeComponent.js
import tw from './lib/tailwind';
```

> ⚠️ Make sure to use `module.exports = {}` instead of `export default {}` in your
> `tailwind.config.js` file, as the latter is not supported.

## Enabling Device-Context Prefixes

To enable prefixes that require runtime device data, like _dark mode_, and _screen size
breakpoints_, etc., you need to connect the `tw` function with a dynamic source of device
context information. The library exports a React hook called `useDeviceContext` that takes
care of this for you. It should be included **one time**, at the _root of your component
hierarchy,_ as shown below:

```js
import tw from './lib/tailwind'; // or, if no custom config: `from 'twrnc'`
import {useDeviceContext} from 'twrnc';

export default function App() {
  useDeviceContext(tw); // <- 👋
  return (
    <View style={tw`bg-white dark:bg-black`}>
      <Text style={tw`text-black dark:text-white`}>Hello</Text>
    </View>
  );
}
```

> ⚠️ If you're using Expo, make sure to make the following change in `app.json` to use the
> `dark:` prefix as Expo by default locks your app to light mode only.

```json
{
  "expo": {
    "userInterfaceStyle": "automatic"
  }
}
```
