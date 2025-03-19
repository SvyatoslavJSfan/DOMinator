import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from '../../../../../src/entities/User';
import { counterReducer } from '../../../../../src/entities/Counter';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';




export function createReduxStore(initialState: StateSchema) {

    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

