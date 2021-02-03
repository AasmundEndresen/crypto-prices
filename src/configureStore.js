import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import loggerMiddleware from './middleware/logger'
import assetReducer from './features/assets/asset.slice'

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: {
      asset: assetReducer,
    },
    middleware: [loggerMiddleware, ...getDefaultMiddleware()],
    preloadedState,
  })

  return store
}