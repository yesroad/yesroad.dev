import type { CSSObject } from '@emotion/react'

export const typography = {
  name: {
    fontSize: '2.6rem',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    lineHeight: 1.1,
  } as CSSObject,
  title: {
    fontSize: '1rem',
    fontWeight: 500,
  } as CSSObject,
  tagline: {
    fontSize: '0.9rem',
    lineHeight: 1.65,
  } as CSSObject,
  navItem: {
    fontSize: '0.75rem',
    fontWeight: 600,
    letterSpacing: '0.12em',
  } as CSSObject,
  sectionLabel: {
    fontSize: '0.7rem',
    fontWeight: 700,
    letterSpacing: '0.15em',
  } as CSSObject,
  body: {
    fontSize: '0.95rem',
    lineHeight: 1.7,
  } as CSSObject,
  small: {
    fontSize: '0.82rem',
  } as CSSObject,
  tag: {
    fontSize: '0.75rem',
    fontWeight: 600,
    letterSpacing: '0.08em',
  } as CSSObject,
  mono: {
    fontFamily: 'var(--mono)',
  } as CSSObject,
}
