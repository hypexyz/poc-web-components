/* eslint-disable */
import {
    defineCustomElements as defineComponentLibrary,
    JSX as LocalJSX
} from '@marsicdev/component-library/loader'
import { HTMLAttributes } from 'react'

type StencilToReact<T> = {
    [P in keyof T]?: T[P] &
        Omit<HTMLAttributes<Element>, 'className'> & {
            class?: string
        }
}

declare global {
    export namespace JSX {
        interface IntrinsicElements extends StencilToReact<LocalJSX.IntrinsicElements> {}
    }
}

defineComponentLibrary(window)
