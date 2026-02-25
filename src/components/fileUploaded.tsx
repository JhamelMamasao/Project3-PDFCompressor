import React from 'react'
import { File } from "lucide-react";


type FileUploadedProps = {
    file: File | null;
}
const FileUploaded = ({file}: FileUploadedProps) => {
    if (!file) 
        return;


  return (
     <div className='w-full flex items-start justify-start max-w-sm md:max-w-2xl h-20 md:h-38 mt-3 rounded-2xl bg-[#242525] border-2 border-[#292e31]'>
        <div className='flex flex-col items-start p-5 justify-center'>
            <h1 className='text-white font-poppins'>File Information</h1>
        <div className='flex flex-row mt-3 space-x-5 '>
            <div className='w-18 h-18 bg-red-900 rounded-lg flex items-center justify-center'><File size={25} color='white' /> </div>
            <div className='flex flex-col'>
                <h1 className='text-xl text-white'>{file.name}</h1>
            </div>
        </div>
        </div>
    </div>
  )
}

export default FileUploaded