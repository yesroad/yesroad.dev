'use client'

import styled from '@emotion/styled'
import * as Dialog from '@radix-ui/react-dialog'
import { colors } from '@/styles/tokens'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 1000;

  &[data-state='open'] {
    animation: overlayIn 0.2s ease;
  }
  &[data-state='closed'] {
    animation: overlayOut 0.15s ease;
  }

  @keyframes overlayIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes overlayOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${colors.surface};
  border: 1px solid ${colors.border};
  border-radius: 12px;
  padding: 2rem 2.2rem;
  max-width: 560px;
  width: calc(100% - 3rem);
  max-height: 80vh;
  overflow-y: auto;
  z-index: 1001;

  &[data-state='open'] {
    animation: contentIn 0.2s ease;
  }
  &[data-state='closed'] {
    animation: contentOut 0.15s ease;
  }

  @keyframes contentIn {
    from { opacity: 0; transform: translate(-50%, -48%) scale(0.97); }
    to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  }
  @keyframes contentOut {
    from { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    to { opacity: 0; transform: translate(-50%, -48%) scale(0.97); }
  }

  &:focus { outline: none; }

  scrollbar-width: thin;
  scrollbar-color: ${colors.border} transparent;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.border};
    border-radius: 999px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${colors.accent};
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1rem;
  right: 1.2rem;
  background: none;
  border: none;
  color: ${colors.textMuted};
  font-size: 1.3rem;
  cursor: pointer;
  line-height: 1;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  transition: color 0.2s;

  &:hover { color: ${colors.textStrong}; }
`

export const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.8rem;
`

export const ModalTitle = styled(Dialog.Title)`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${colors.textStrong};
  margin-bottom: 1.4rem;
  padding-right: 2rem;
`

export const StorySection = styled.div`
  margin-bottom: 1.4rem;

  h2 {
    font-family: var(--mono);
    font-size: 0.65rem;
    font-weight: 700;
    color: ${colors.accent};
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-top: 1.4rem;
    margin-bottom: 0.45rem;

    &:first-child {
      margin-top: 0;
    }
  }

  p {
    font-size: 0.88rem;
    color: ${colors.text};
    line-height: 1.65;
    margin: 0;
  }

  ul {
    padding-left: 1.1rem;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  li {
    font-size: 0.88rem;
    color: ${colors.text};
    line-height: 1.6;
  }

  a {
    color: ${colors.accent};
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-color: color-mix(in srgb, var(--accent) 35%, transparent);
    transition: text-decoration-color 0.15s;

    &:hover {
      text-decoration-color: ${colors.accent};
    }
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
    border: 1px solid ${colors.border};
  }

  & .screenshots {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.6rem;
    margin: 1rem 0 1.5rem;
  }
`

export const ResultsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
`

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`
