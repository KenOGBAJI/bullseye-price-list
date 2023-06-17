import { useState } from "react";


function App() {
  const [annually, setAnnually] = useState(false)
    return (
    <>
      <section className="p-5">
        <h1 className="text-center text-slate-800 mb-8 text-4xl">Our Pricing</h1>
        <div class="toggle lg:mb-10">
          <label class="name">Annually</label>
          <input type="checkbox" class="checkbox" id="checkbox" checked={annually} onChange={() => setAnnually(!annually)}/>

          <label for="checkbox" class="label">
            <div class="ball"></div>
          </label>

          <label class="name">Monthly</label>
        </div>
        <div className="flex flex-wrap flex-col justify-center gap-8 text-center max-w-6xl mx-auto lg:gap-0 lg:flex-row lg:flex-nowrap">
          <article className="p-8 rounded bg-white shadow-md lg:w-full">
            <h2 className="text-slate-800 text-xl mb-5">Basic</h2>
           {annually &&  < h3 className= "flex items-center justify-center text-slate-800 text-5xl"><span className="text-3xl mr-3">$</span>19.99</ h3>}

           {!annually && 
            <h3 className="flex items-center justify-center text-slate-800 text-5xl"><span className="text-3xl mr-3">$</span>199.99</h3>}

            
            <ul className="flex justify-center flex-col my-8">
              <li className="border-t border-slate-400 py-3 text-slate-600">2 Users Allowed</li>
              <li className="border-t border-slate-400  py-3 text-slate-600">500 GB Storage</li>
              <li className="border-y border-slate-400 py-3 text-slate-600">Send up to 3 GB</li>
            </ul>
            <button className="linear-gradient btn bg-white text-white py-2 w-full rounded shadow-xl border-2 border-white uppercase cursor-pointer hover:bg-transparent hover:text-slate-800 transition-all duration-200" >LEARN MORE</button>
          </article>
          <article className="linear-gradient p-8 rounded shadow-md lg:w-full lg:scale-110 mb-1">
            <h2 className="text-xl mb-5 text-white">Professional</h2>
           
           {annually &&  < h3 className= "flex items-center justify-center text-white text-5xl"><span className="text-3xl mr-3">$</span>24.99</h3>}

            {!annually &&             <h3 className="flex items-center justify-center text-white text-5xl"><span className="text-3xl mr-3">$</span>249.99</h3>}

            <ul className="flex justify-center flex-col my-8">
              <li className="border-white border-t py-3">1 TB Storage</li>
              <li className="border-white border-t py-3">5 Users Allowed</li>
              <li className="border-white border-y py-3">Send up to 10 GB</li>
            </ul>
            <button className="bg-white text-slate-800 py-2 w-full rounded shadow-xl border-2 border-white uppercase cursor-pointer hover:bg-transparent hover:text-white transition-all duration-200">LEARN MORE</button>
          </article>
          <article className="p-8 rounded bg-white shadow-md lg:w-full">
            <h2 className="text-slate-800 text-xl mb-5">Master</h2>

           {annually &&  < h3 className= "flex items-center justify-center text-slate-800 text-5xl"><span className="text-3xl mr-3">$</span>34.99</ h3>}

           {!annually &&  <h3 className="flex items-center justify-center text-slate-800 text-5xl"><span className="text-3xl mr-3">$</span>399.99</h3>}

            <ul className="flex justify-center flex-col my-8">
              <li className="border-t border-slate-400 py-3 text-slate-600">10 Users Allowed</li>
              <li className="border-t border-slate-400  py-3 text-slate-600">2 TB Storage</li>
              <li className="border-y border-slate-400 py-3 text-slate-600">Send up to 20 GB</li>
            </ul>
            <button className="linear-gradient btn bg-white text-white py-2 w-full rounded shadow-xl border-2 border-white uppercase cursor-pointer hover:bg-transparent hover:text-slate-800 transition-all duration-200" >LEARN MORE</button>
          </article>
        </div>
<br />
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challeng" target="_blank">Frontend Moentor</a>
          Coded by <a href="#">Kenneth O</a>
        </div>
      </section>

    </>
  );
}

export default App;
