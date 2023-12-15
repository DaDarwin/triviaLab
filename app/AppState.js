import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  questions = []
}

export const AppState = createObservableProxy(new ObservableAppState())