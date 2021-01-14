import React, { cloneElement } from "react"
import { CounterProvider } from "./CounterProvider"
import { AuthProvider } from "./AuthProvider"

function ProviderComposer({ contexts, children }) {
  return contexts.reduce(
    (kids, parent) =>
      cloneElement(parent, {
        children: kids
      }),
    children
  )
}
// eslint-disable-next-line react/prop-types
export default function ContextProvider({ children }) {
  return (
    <ProviderComposer
      // add providers to array of contexts
      // eslint-disable-next-line react/jsx-key
      contexts={[<CounterProvider />,<AuthProvider/>]}
    >
      {children}
    </ProviderComposer>
  )
}