import { Reducer } from '@reduxjs/toolkit'
import React, { FC, ReactNode, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { ReduxStoreWithManager } from '@/app/providers/StoreProvider'
import { StateSchemaKey } from '@/app/providers/StoreProvider/config/StateSchema'

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
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

        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKey]
            if(!mounted) {
                store.reducerManager.add(name as StateSchemaKey, reducer)
                dispath({ type: `@INIT ${name} reducer` })
            }

        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]) => {
                    store.reducerManager.remove(name as StateSchemaKey)
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