import { useState } from 'react'

export function useWindowScroll() {
  const [y, setY] = useState(0)

  window.addEventListener('scroll', () => {
    setY(window.scrollY)
  })

  return [y]
}

export function useDebounce(fn, dely=1000) {
  let timer = null
  return function(...args) {
    
    clearTimeout(timer)

    timer = setTimeout(() => {
      fn.call(this, ...args)
    }, dely)
  }
}