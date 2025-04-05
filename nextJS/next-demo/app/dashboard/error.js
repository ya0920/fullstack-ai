'use client'

import { useEffect } from "react"

export default function Error({error, reset}) {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <h1>Error...</h1>
  )
}