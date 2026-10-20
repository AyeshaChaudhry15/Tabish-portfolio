import AppDevelopment from '@/components/skills/app-development'
import SkillCategories from '@/components/skills/skill-catagories'
import SkillsHero from '@/components/skills/skill-hero'
import SkillsCta from '@/components/skills/skills-cta'
import ToolsStack from '@/components/skills/tools-stack'
import React from 'react'

const page = () => {
  return (
    <div>
      <SkillsHero/>
      <SkillCategories/>
      <AppDevelopment/>
      <ToolsStack/>
      <SkillsCta/>
    </div>
  )
}

export default page
