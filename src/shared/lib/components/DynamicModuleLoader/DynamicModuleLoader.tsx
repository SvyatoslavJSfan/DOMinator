import { Reducer } from '@reduxjs/toolkit'
import React, { ReactNode, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from '@/app/providers/StoreProvider'


export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

interface DynamicModuleLoaderProps {
    reducers: ReducersList
    removeAfterUnmount?: boolean
    children: ReactNode
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const { children, reducers, removeAfterUnmount = true } = props

    const store = useStore() as ReduxStoreWithManager
    const dispath = useDispatch()

    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers()

        ;(Object.keys(reducers) as StateSchemaKey[]).forEach((name: StateSchemaKey) => {
            const reducer = reducers[name]
            const mounted = mountedReducers[name]
            if (!mounted) {
                if (reducer) {
                    store.reducerManager.add(name, reducer)
                }
                dispath({ type: `@INIT ${name} reducer` })
            }
        })

        return () => {
            if (removeAfterUnmount) {
                ;(Object.keys(reducers) as StateSchemaKey[]).forEach((name: StateSchemaKey) => {
                    store.reducerManager.remove(name)
                    dispath({ type: `@DESTROY ${name} reducer` })
                })
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
}