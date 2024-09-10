import Reactotron from 'reactotron-react-native';
import {NativeModules} from 'react-native';

let scriptHostname;
const {scriptURL} = NativeModules.SourceCode;
scriptHostname = scriptURL.split('://')[1].split(':')[0];

console.log('scriptHostname', scriptHostname);
const reactotron = Reactotron.configure({
  name: 'reactnativecore',
  host: scriptHostname,
})
  .useReactNative({
    asyncStorage: false, // there are more options to the async storage.
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/,
    },
    errors: {veto: stackFrame => false}, // or turn it off with false
    editor: false, // there are more options to editor
    overlay: false, // just turning off overlay
  })
  .connect();
// swizzle the old one
const yeOldeConsoleLog = console.log;
if (__DEV__) {
  // make a new one
  console.log = (...args) => {
    // always call the old one, because React Native does magic swizzling too
    yeOldeConsoleLog(...args);

    // send this off to Reactotron.
    Reactotron.display({
      name: 'CONSOLE.LOG',
      value: args,
      preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null,
    });
  };
}
export default reactotron;
