import React from 'react'
import { File, HardDrive, Calendar} from "lucide-react";


type FileUploadedProps = {
    file: File | null;
}
const FileUploaded = ({file}: FileUploadedProps) => {
    if (!file) 
        return;


    const formatedDate = new Date(file.lastModified).toLocaleString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        hour12: true,
    });


  return (
     <div className='w-full flex items-start justify-start max-w-sm md:max-w-2xl h-20 md:h-38 mt-3 rounded-2xl bg-[#242525] border-2 border-[#292e31] font-poppins'>
        <div className='flex flex-col items-start p-5 justify-center'>
            <h1 className='text-white font-poppins text-sm'>File Information</h1>
        <div className='flex flex-row mt-3 space-x-7 '>
            <div className='w-18 h-18 bg-red-900 rounded-lg flex items-center justify-center'><File size={25} color='white' /> </div>
            <div className='flex flex-col'>
                <h1 className='text-base text-white'>{file.name}</h1>
                <div className='flex flex-row items-center justify-between space-x-10 mt-2'>
                    <div className='flex flex-row space-x-3 items-center'>
                        <div className='bg-[#1f1f1f] w-10 h-10 flex items-center justify-center rounded-xl'>
                            <HardDrive size={20} color='white'/>
                        </div>
                         <div className='flex flex-col space-y-1'>
                            <p className='text-[#d0caca] text-xs'>File Size</p>
                            <p className='text-[#f1f1f1] text-sm font-medium'>{file.size}</p>
                        </div>
                    </div>
                    <div className='flex flex-row space-x-3 items-center'>
                        <div className='bg-[#1f1f1f] w-10 h-10 flex items-center justify-center rounded-xl'>
                            <Calendar size={20} color='white'/>
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <p className='text-[#d0caca] text-xs'>Last Modified</p>
                            <p className='text-[#f1f1f1] text-sm font-medium'>{formatedDate}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default FileUploaded