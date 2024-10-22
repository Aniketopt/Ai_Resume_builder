import { ResumeInfoContext } from '@/context/ResumeinfoContext'
import React, { useContext } from 'react'
import PresonalDetailPreview from './preview/PresonalDetailPreview'
import SummaryPreview from './preview/SummaryPreview'
import ExperiencePreview from './preview/ExperiencePreview'
import EducatinalPreview from './preview/EducatinalPreview'
import SkillsPreview from './preview/SkillsPreview'

function ResumePreview() {
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)

    return (
        <div className='shadow-lg h-full p-14 border-t-[20px]'
            style={{
           borderColor:resumeInfo?.themeColor
            }}>
            {/*Personal Detail*/}
             <PresonalDetailPreview resumeInfo={resumeInfo}/>
            {/*Summery*/}
             <SummaryPreview resumeInfo={resumeInfo}/>
            {/*Profesional Experience*/}
            <ExperiencePreview resumeInfo={resumeInfo}/>
            {/*Educational*/}
            <EducatinalPreview resumeInfo={resumeInfo}/>
            {/*Skills*/}
            <SkillsPreview resumeInfo={resumeInfo}/>


        </div>
    )
}

export default ResumePreview