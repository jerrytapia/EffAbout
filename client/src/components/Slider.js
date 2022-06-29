import React, { useState } from 'react';
import ReactSlider from 'react-slider';

const Slider = () => {

  const [values, setValues] = useState([50])
  return (
    // <ReactSlider
    //   className='horizontal-slider'
    //   thumbClassName='example-thumb'
    //   trackClassName='example-track'
    //   />
    <>
     <label>React Slider</label>
				<ReactSlider
					step={1}
					min={0}
					max={100}
					className="w-2/4 h-3 pr-2 my-4 bg-gray-200 rounded-md cursor-grab"
					thumbClassName="absolute w-5 h-5 cursor-grab bg-indigo-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 -top-2px"
					value={values}
					onChange={(values: any) => {
						setValues(values)
					}}
				/>
       {60 < values ? (<span>Rightie</span>) : 40 > values ? (<span>Leftie</span>) : (<span>Centrist</span>)}
    </>
  );
}

export default Slider;