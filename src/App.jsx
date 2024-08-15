import { useEffect, useState } from 'react'
import logoCod from "./assets/codificacion.png"
import './App.scss'

function App() {
  const [loader, setLoader] = useState(true);
  const [counter, setCounter] = useState(true);
  const [inputValue, setInputValue] = useState(0);
  const [checkboxes, setCheckboxes] = useState([false, false, false, false, false, false, false, false]);
  const checkboxValues = [1, 2, 4, 8, 16, 32, 64, 128];

  useEffect(()=>{
    setTimeout(()=>{
      setLoader(false)
    },5000)
  },[])

  const handleInputChange = (event) => {
    const { value } = event.target;
    const numericValue = Number(value);

    if (value === '') {
      setInputValue(''); 
    } else if (!isNaN(numericValue)) {
      const newValue = Math.min(Math.max(numericValue, 0), 255);
      setInputValue(newValue);
    }
  };

  const handleInputFocus = () => {
    if (inputValue === 0) {
      setInputValue('');
    }
  };

  // Maneja el cambio en los checkboxes
  const handleCheckboxChange = (index) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    setCheckboxes(newCheckboxes);

    // Calcular el nuevo valor del input basado en los checkboxes seleccionados
    const newValue = newCheckboxes.reduce((sum, checked, i) => checked ? sum + checkboxValues[i] : sum, 0);
    setInputValue(newValue);
  };

  // Actualiza el estado de los checkboxes basado en el valor del input
  useEffect(() => {
    const newCheckboxes = checkboxValues.map(value => (inputValue & value) === value);
    setCheckboxes(newCheckboxes);
  }, [inputValue]);

  return (
    <>
   { loader && <div className='loader'>
      <img className='logo-loader' src={logoCod} alt="Logo" />
      <p className='by'>developed by <span>Edgar Buenaño</span></p>
    </div>}
    <div className='main-container'>
    <div className='container'>
    <div className='container-header'>
      <img className='logo' src={logoCod} alt="Logo" />
      <h1>Codificación de Dispositivos</h1>
    </div>
    <div className='container-body'>
      <div className='container-body-inputs'>
        <input type="number" value={inputValue} onChange={handleInputChange} onFocus={handleInputFocus} min={0} max={255}/>
      </div>
      <div className='container-body-switches'>
        {
          checkboxValues.map((value,index)=>(
            <div className='container-body-switches-switch' key={index}>
              <h3>PIN {index+1}</h3>
              <label className="switch">
                  <input type="checkbox" className="checkbox" checked={checkboxes[index]} onChange={()=>handleCheckboxChange(index)}/>
                  <div className="slider"></div>
              </label>
            </div>
          ))
        }
      </div>
    </div>
    </div>
         
    </div>
    </>
  )
}

export default App
