"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateList from './_components/TemplateList'

const Dashboard = () => {
  const [useSearchInput, setUseSearchInput] = useState<string>();
  return (
    <div>
      {/* search Section  */}
      <SearchSection onSearchInput={setUseSearchInput}/>

      {/* template sectio */}
      <TemplateList useSearchInput={useSearchInput} />
    </div>
  )
}

export default Dashboard