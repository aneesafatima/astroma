import React, { useEffect } from 'react';
import { useGetStarChartMutation } from '../services/StargazingApi';

function starChart() {
  const requestedData =  {
    "style": {
        "moonStyle": "default",
        "backgroundStyle": "solid",
        "backgroundColor": "transparent",
        "headingColor": "transparent",
        "textColor": "white"
    },
    "observer": {
        "latitude": 22.57609973033708,
        "longitude": 88.35774399379065,
        "date": "2020-11-01"
    },
    "view": {
        "type": "landscape-simple"
    }
  }
    console.log("hello from moon phase")
    const [getMoonPhase, { isLoading, isError, isSuccess, data, error }] = useGetMoonPhaseMutation();
    console.log(data)
    useEffect(() => {getMoonPhase(requestedData)}, [])
  return (
    data !== undefined &&
    <div className='bg-black h-screen p-10'>
      <div className='flex items-center space-x-5'>
      <h2 className='uppercase text-3xl text-[#3b3b3b]'>Moon Phase</h2>
      <span className='block bg-[#3b3b3b] flex-1 h-[1px]'></span>
      </div>
      <img src={data.data.imageUrl} alt="" className='' />
    </div>
  )
}

export default starChart
