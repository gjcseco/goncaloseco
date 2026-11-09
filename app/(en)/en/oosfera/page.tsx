import type { Metadata } from 'next'
import { CaseStudyPage } from '@/app/_components/case-study/case-study-page'
import { caseStudyMetadata } from '@/app/_components/case-study/metadata'
import { caseStudyEn } from '@/lib/content/case-study.en'

export const metadata: Metadata = caseStudyMetadata(caseStudyEn)

export default function OosferaCaseStudyEn() {
  return <CaseStudyPage content={caseStudyEn} />
}
