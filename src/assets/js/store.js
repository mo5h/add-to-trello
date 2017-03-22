import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers'

export default function configureStore () {
  const logger = createLogger()

  const store = createStore(
    reducers,
    applyMiddleware(logger, thunk)
  )

  return store
}
