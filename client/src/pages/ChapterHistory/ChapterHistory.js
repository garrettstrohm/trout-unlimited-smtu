import React from 'react'
import { 
    chapterHistoryHeader,
    chapterEventOne,
    chapterEventTwo,
    chapterEventThree,
    chapterHistoryObj,
    tuHistoryObj,
    connectionToTuObj
} from './Data'
import {
    EventSection,
    HeaderInfoSection,
    WritingSection
} from '../../components'

const ChapterHistory = () => {
  return (
    <>
        <HeaderInfoSection {...chapterHistoryHeader} />
        <EventSection {...chapterEventOne} />
        <EventSection {...chapterEventTwo} />
        <EventSection {...chapterEventThree} />
        <WritingSection {...chapterHistoryObj} />
        <WritingSection {...tuHistoryObj} />
        <WritingSection {...connectionToTuObj} />
    </>
  )
}

export default ChapterHistory