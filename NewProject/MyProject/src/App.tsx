


function App() {
  
  return (
    <div className="w-full flex flex-col md:flex-row justify-evenly  place-items-center gap-10 bg-gray-100 md:ps-5 md:pe-5">
    <div className="flex gap-5 font-bold">
     <p>Home</p>
     <p>Video</p>
     <p>About</p>
    </div>
    <div className="font-bold flex flex-col gap-2 md:pt-6">
    <div className="w-full text-center">
    <p>MATT HAIG</p>
    </div>
    <div className="flex  gap-5 w-full flex-wrap place-items-center justify-center">
     <p>HOME</p>
     <p>BOOKS</p>
     <p>KIDS</p>
    <p>BUY</p>
     <p>NEWS</p>
      <p>INTERNATIONAL</p>
     <p>EVENTS</p>

    </div>

    </div>
    
   <div className=" flex gap-5 font-bold">
         <p>Search</p>
     <p>Contact</p>
     <p>Subscribe</p>
    </div>
    </div>
  )
}

export default App
