const App = () => {
const k = 'komeil';
const q = 20;
const b = 1000 ;
const names = ['komeil','amir']

  return(
    <div>
    {/* <div className='text-5x1'>App</div> */}
    <p>hello {k}</p>
    <p>
      the sum of {q} and {b} is {q+b}
    </p>
    <ul>
      { names.map((name, index) => (
        <li key={index}>{name}</li>
      )) }
    </ul>
    </div>
  )
};
export default App;