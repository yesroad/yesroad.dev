'use client'

import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FiCopy, FiCheck } from 'react-icons/fi'
import { SectionLabel } from '@/components/ui/SectionLabel'
import {
  ContactGrid,
  ContactItem,
  IconWrap,
  ItemLabel,
  ItemValue,
} from './styled'

const GITHUB_USERNAME = 'yesroad'
const EMAIL = 'yesroad.dev@gmail.com'

export function ContactSection() {
  const [copied, setCopied] = useState<'github' | 'email' | null>(null)

  const handleCopy = async (text: string, key: 'github' | 'email') => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(key)
      setTimeout(() => setCopied(null), 1500)
    } catch {
      // ignore
    }
  }

  return (
    <section id="contact">
      <SectionLabel>Contact</SectionLabel>
      <ContactGrid>
        <ContactItem>
          <IconWrap href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer">
            <FaGithub />
          </IconWrap>
          <ItemLabel>GitHub</ItemLabel>
          <ItemValue onClick={() => handleCopy(GITHUB_USERNAME, 'github')}>
            {copied === 'github' ? <FiCheck /> : <FiCopy />}
            {GITHUB_USERNAME}
          </ItemValue>
        </ContactItem>

        <ContactItem>
          <IconWrap href={`mailto:${EMAIL}`}>
            <MdEmail />
          </IconWrap>
          <ItemLabel>Email</ItemLabel>
          <ItemValue onClick={() => handleCopy(EMAIL, 'email')}>
            {copied === 'email' ? <FiCheck /> : <FiCopy />}
            {EMAIL}
          </ItemValue>
        </ContactItem>
      </ContactGrid>
    </section>
  )
}
