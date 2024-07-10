import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import Hero from '@/components/hero'
import Features from '@/components/features'
import CTA from '@/components/cta'
import ToolKit from '@/components/toolkit'
import Contacts from '@/components/contacts'
import FooterCTA from '@/components/footer-cta'

export default async function Page() {
  return (
    <>
      <Hero />
      <Features />
      <CTA />
      <ToolKit />
      <Contacts />
      <FooterCTA />
    </>
  )
}
