'use client'

import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'

export function EmotionRegistry({ children }: { children: React.ReactNode }) {
  const [{ cache, flush }] = useState(() => {
    const cache = createCache({ key: 'css' })
    cache.compat = true
    const prevInsert = cache.insert
    let inserted: { name: string; isGlobal: boolean }[] = []
    cache.insert = (...args) => {
      const [selector, serialized] = args
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push({ name: serialized.name, isGlobal: !selector })
      }
      return prevInsert(...args)
    }
    const flush = () => {
      const prev = inserted
      inserted = []
      return prev
    }
    return { cache, flush }
  })

  useServerInsertedHTML(() => {
    const inserted = flush()
    if (inserted.length === 0) return null

    let styles = ''
    let dataAttr = cache.key
    const globals: { name: string; style: string }[] = []

    for (const { name, isGlobal } of inserted) {
      const style = cache.inserted[name]
      if (typeof style === 'string') {
        if (isGlobal) {
          globals.push({ name, style })
        } else {
          styles += style
          dataAttr += ` ${name}`
        }
      }
    }

    return (
      <React.Fragment>
        {globals.map(({ name, style }) => (
          <style
            key={name}
            data-emotion={`${cache.key}-global ${name}`}
            dangerouslySetInnerHTML={{ __html: style }}
          />
        ))}
        {styles && (
          <style
            data-emotion={dataAttr}
            dangerouslySetInnerHTML={{ __html: styles }}
          />
        )}
      </React.Fragment>
    )
  })

  return <CacheProvider value={cache}>{children}</CacheProvider>
}
