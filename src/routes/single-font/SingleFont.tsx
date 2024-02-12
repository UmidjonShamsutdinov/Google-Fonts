import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../../components/navbar/Nav'
import { Container1 } from '../../utils/Utils'

const SingleFont = () => {
  const linkName = useParams()
  const myKey = "AIzaSyCz5SovJVTzQrqA8ddsw_ZeiK8QACaPjlA"
  const [singleData, setSingleData] = useState<any>([])
  const [fontValue] = useState<any>("Whereas disregard and contempt for human rights have resulted")

  useEffect(()=>{
    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${myKey}&family=${linkName.name}`)
      .then(res => res.json())
      .then(data => setSingleData(data.items[0]))
  },[])
  console.log(singleData);
  
  return (
    <div>
      <Nav/>
      <Container1>
        <div style={{paddingTop: "100px"}}>
          <div className="single-title">
            <h2>{singleData.family}</h2>
            <p>Designed by <span>Someone</span></p>
          </div>
          <div className="single-banner">
            <p>Whereas disregard and contempt for human rights have resulted</p>
          </div>
          <div className="single-settings">
            <p>Styles</p>
            <div>
              <input type="text" name="" id="" />
              <label>48px</label>
              <input type="range"/>
            </div>
            <div className="single__variants">
              {
                singleData ? singleData?.variants?.map((e:any, i:number)=>
                  <div className="variant" key={i}>
                    <p>{e== 100 ? "Thin": e == 200 ? "ExtraLight" : e==300 ? "Light" : e==400? "Regular" : e==500? "Medium": e==600? "Bold": e==700? "ExtraBold": e==800? "Black" : e==900? "Black": ""}{e}</p>
                    <p>{fontValue}</p>
                  </div>
                ): "Loading..."
              }
            </div>
          </div>
        </div>
      </Container1>
    </div>
  )
}

export default SingleFont