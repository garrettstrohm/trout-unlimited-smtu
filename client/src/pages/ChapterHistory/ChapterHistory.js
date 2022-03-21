import React from 'react'
import { 
    chapterHistoryHeader
} from './Data'
import {
    HeaderInfoSection
} from '../../components'

const ChapterHistory = () => {
  return (
    <>
        <HeaderInfoSection {...chapterHistoryHeader}/>
    </>
  )
}

export default ChapterHistory