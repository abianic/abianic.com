import React, { ReactNode, HTMLProps } from 'react'

interface SectionWrapperProps extends HTMLProps<HTMLElement> {
  children: ReactNode
}

const SectionWrapper = ({ children, ...props }: SectionWrapperProps) => (
  <section {...props} className={`py-16 ${props.className || ''}`}>
    {children}
  </section>
)

export default SectionWrapper
