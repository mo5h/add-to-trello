import { compose, createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage'
import reducers from './reducers'

export default function configureStore () {
  const logger = createLogger()

  const enhancer = compose(
    applyMiddleware(logger, thunk),
    persistState()
  )

  const store = createStore(reducers, enhancer)

  return store
}
