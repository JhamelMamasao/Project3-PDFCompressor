import { useState } from 'react'
import FileUploaded from './components/fileUploaded'




function App() {
  const[file, setFile] = useState<File | null>(null);
  const[loading, setLoading] = useState<boolean>(false);


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

  if (!selectedFile) return;

  setFile(selectedFile);
  setLoading(true);
};



return (
    <>
      <div className='min-h-screen bg-[#1f1f1f] font-poppins flex flex-col'>
        <main className='grow flex items-center justify-center'>
          <div className='flex flex-col items-center justify-center w-full px-4'>
            <h1 className="text-white font-semibold text-3xl">COMPRESSO</h1>
            <p className="text-[#d0caca] text-xs mt-1">Precision compression for modern files.</p>
            {!file && (
              <div className='w-full flex items-center justify-center max-w-sm md:max-w-2xl h-70 md:h-100 mt-3 rounded-2xl bg-[#242525] border-2 border-[#292e31]'>
              <div className='w-full flex items-center justify-center max-w-xs md:max-w-155 h-60 md:h-85 rounded-xl bg-[#292a2a] border-3 border-dashed border-[#474849]'> 
                <label className='text-[#d0caca] md:text-sm text-xs font-medium'>Drop your PDF File here
                  <input type='file' className='hidden' onChange={handleFileChange}></input>
                </label>
              </div>
            </div>
            )}
            {file && (
              <FileUploaded file={file}/>
             
            )}
             <p className="text-[#d0caca] text-xs mt-3 text-center">Effortlessly compress PDFs and save bandwidth and upload time.</p>
          </div>
        </main>
         <footer className='text-white py-3 text-center text-xs'>© 2026 MyWebsite. All rights reserved.</footer>
      </div>
      
    </>
  )
}

export default App
