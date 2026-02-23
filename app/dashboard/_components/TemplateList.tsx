import Templates from '@/Data/Templates'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard';

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}


const TemplateList = ({useSearchInput}:any) => {

  const [templateList, setTemplateList] = useState(Templates);

  useEffect(()=>{
    if(useSearchInput){
      const filterData = Templates.filter(item =>
        item.name.toLowerCase().includes(useSearchInput.toLowerCase())
      )
      setTemplateList(filterData)
    } else {
      setTemplateList(Templates)
    }
  },[useSearchInput])

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10 '>
      {templateList.map((item:TEMPLATE,index:number)=>(
        <TemplateCard key={item.slug} {...item}/>
      ))}
    </div>
  )
}

export default TemplateList