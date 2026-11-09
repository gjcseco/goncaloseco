import type { Metadata } from 'next'
import { CaseStudyPage } from '@/app/_components/case-study/case-study-page'
import { caseStudyMetadata } from '@/app/_components/case-study/metadata'
import { caseStudyPt } from '@/lib/content/case-study.pt'

export const metadata: Metadata = caseStudyMetadata(caseStudyPt)

export default function OosferaCaseStudyPt() {
  return <CaseStudyPage content={caseStudyPt} />
}
