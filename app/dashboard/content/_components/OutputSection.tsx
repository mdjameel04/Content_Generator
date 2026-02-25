"use client" 
import React, { useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

const OutputSection = () => {
  const editorRef:any=useRef(null)
  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex items-center justify-between p-5' >
        <h2 className='font-bold text-lg'> Your Result </h2>
        <Button className='flex gap-2 bg-blue-700 items-center'> <Copy className='w-4 h-4 mt-1'/> Copy </Button>
      </div>
       <Editor
       ref={editorRef}
    initialValue="Your result will apear here"
    initialEditType="wyswiyg"
    height="600px"
    useCommandShortcut={true}
    onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}

  />
    </div>
  )
}

export default OutputSection