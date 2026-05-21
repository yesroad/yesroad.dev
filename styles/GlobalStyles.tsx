'use client'

import { Global, css } from '@emotion/react'

const globalStyles = css`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* teal (기본) */
  :root {
    --bg: #0f172a;
    --surface: #1e293b;
    --surface2: #263348;
    --text: #cbd5e1;
    --text-strong: #f1f5f9;
    --text-muted: #64748b;
    --accent: #2dd4bf;
    --accent-hover: #99f6e4;
    --border: #334155;
    --spotlight: rgba(45, 212, 191, 0.07);
    --font: var(--font-inter), 'Inter', sans-serif;
    --mono: var(--font-jetbrains), 'JetBrains Mono', monospace;
    --cx: 50%;
    --cy: 50%;
  }

  [data-theme='amber'] {
    --bg: #0c0a09;
    --surface: #1c1917;
    --surface2: #292524;
    --text: #d6d3d1;
    --text-strong: #fafaf9;
    --text-muted: #78716c;
    --accent: #f59e0b;
    --accent-hover: #fcd34d;
    --border: #292524;
    --spotlight: rgba(245, 158, 11, 0.07);
  }

  [data-theme='indigo'] {
    --bg: #f8fafc;
    --surface: #ffffff;
    --surface2: #f1f5f9;
    --text: #334155;
    --text-strong: #0f172a;
    --text-muted: #94a3b8;
    --accent: #6366f1;
    --accent-hover: #4f46e5;
    --border: #e2e8f0;
    --spotlight: rgba(99, 102, 241, 0.07);
  }

  [data-theme='rose'] {
    --bg: #0f0a0a;
    --surface: #1a1010;
    --surface2: #241515;
    --text: #e7d5d5;
    --text-strong: #fdf2f2;
    --text-muted: #9a6a6a;
    --accent: #fb7185;
    --accent-hover: #fda4af;
    --border: #3b1f1f;
    --spotlight: rgba(251, 113, 133, 0.07);
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font);
    font-size: 15px;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
  }

  /* cursor spotlight */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    background: radial-gradient(600px at var(--cx) var(--cy), var(--spotlight) 0%, transparent 60%);
    transition: background 0.3s ease;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    display: block;
    max-width: 100%;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: var(--border) transparent;
  }

  *::-webkit-scrollbar {
    width: 4px;
  }
  *::-webkit-scrollbar-track {
    background: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background: var(--border);
    border-radius: 999px;
  }
  *::-webkit-scrollbar-thumb:hover {
    background: var(--accent);
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`

export function GlobalStyles() {
  return <Global styles={globalStyles} />
}
