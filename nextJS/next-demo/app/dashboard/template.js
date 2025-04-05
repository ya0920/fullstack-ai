'use client'

import { Suspense, useState } from "react";

export default function Template({ children }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Template {count}</h1>
      <button onClick={() => setCount(count + 1)}>add</button>
      {children}
      {/* <Suspense fallback={<loading/>}>
        <Page></Page>
      </Suspense> */}
    </>
  )
}