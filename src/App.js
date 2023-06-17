
function App() {
  return (
    <>
      <section className="p-5">
        <div className="flex flex-wrap flex-col justify-center gap-8 text-center">
          <article className="p-8 rounded bg-white shadow-md">
            <h2 className="text-slate-800 text-xl mb-5">Basic</h2>
            < h3 className= "flex items-center text-slate-800 text-5xl"><span className="text-3xl mr-3">$</span>19.99</ h3>
            <h3 className="flex items-center text-slate-800 text-5xl"><span className="text-3xl mr-3">$</span>199.99</h3>
            <ul className="flex items-center justify-center flex-col">
              <li>500 GB Allowed</li>
              <li>2 Users Allowed</li>
              <li>Send up to 3 GB</li>
            </ul>
            <button>LEARN MORE</button>
          </article>
          <article>
            <h2>Professional</h2>
            <h3><span>$</span>24.99</h3>
            <h3><span>$</span>249.99</h3>
            <ul>
              <li>1 TB Allowed</li>
              <li>5 Users Allowed</li>
              <li>Send up to 10 GB</li>
            </ul>
            <button>LEARN MORE</button>
          </article>
          <article>
            <h2>Master</h2>
            <h3><span>$</span>39.99</h3>
            <h3><span>$</span>399.99</h3>
            <ul>
              <li>2 tB Allowed</li>
              <li>10 Users Allowed</li>
              <li>Send up to 20 GB</li>
            </ul>
            <button>LEARN MORE</button>
          </article>
        </div>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challeng" target="_blank">Frontend Moentor</a>
          Coded by <a href="#">Kenneth O</a>
        </div>
      </section>

    </>
  );
}

export default App;
