import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import reducers from './reducers'

export default function configureStore () {
  const logger = createLogger()

  const store = createStore(
    reducers,
    applyMiddleware(logger)
  )

  return store
}
