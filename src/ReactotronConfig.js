import Reactotron from 'reactotron-react-native'
import { reactotronRedux as reduxPlugin } from 'reactotron-redux'

console.disableYellowBox = true
console.ignoredYellowBox = ['Warning: `flexWrap: `wrap``'];

Reactotron.configure({name: 'RNBase'})

Reactotron.useReactNative({
    asyncStorage: { ignore: ['secret'] }
})

Reactotron.use(reduxPlugin())

if (__DEV__) {
    Reactotron.connect()
    // Reactotron.clear()
}

console.tron = Reactotron
