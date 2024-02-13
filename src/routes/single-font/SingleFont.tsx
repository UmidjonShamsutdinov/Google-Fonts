import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../../components/navbar/Nav'
import { Container1 } from '../../utils/Utils'
import { useDispatch, useSelector } from 'react-redux'
import { TEXTVALUE } from '../../redux/slices/textareaValue'
import "./SingleFont.scss"
import { FONTSIZE } from '../../redux/slices/fontsizeSlice/fontsizeSlice'
import { importGoogleFont } from '../../helpers/googleLink'

const SingleFont = () => {
  const dispatch = useDispatch()
  const textValue = useSelector((state:any)=>state.textarea_Data.inpValue)
  const fontSize = useSelector((state: any)=>state.fontsize_Data.fontSize)  
  const linkName = useParams()
  const myKey = "AIzaSyCz5SovJVTzQrqA8ddsw_ZeiK8QACaPjlA"
  const [singleData, setSingleData] = useState<any>([])
  const [fontValue] = useState<any>("Whereas disregard and contempt for human rights have resulted")
  const [selectValue, setSelectValue] = useState<any>("regular")
  
  
  
  
  

  useEffect(()=>{
    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${myKey}&family=${linkName.name}`)
      .then(res => res.json())
      .then((data:any) => {
        setSingleData(data.items[0])
        importGoogleFont(data.items)
      })
  },[])
  // console.log("admin".replace(/[a-zA-Z]/g, "1"));
  console.log(selectValue);
  console.log(singleData);
  
  
  
  return (
    <div className='single__page'>
      <Nav/>
      <Container1>
        <div style={{paddingTop: "100px"}}>
          <div className="single-title">
            <h2>{singleData.family}</h2>
            <p>Designed by <span>Someone</span></p>
          </div>
          <div className="single-banner">
            <p style={{fontFamily: `${singleData.family} , ${singleData.category}`}}>Whereas disregard and contempt for human rights have resulted</p>
          </div>
          <div className="single-settings">
            <p>Styles</p>
            <div>
              <input type="text" name="" id="" placeholder='Type here to prewiev text' onChange={(e)=>{
                dispatch(TEXTVALUE(e.target.value))}
                }/>
              <div className="inpRange">
                <label>{fontSize}px</label>
                <input type="range" value={fontSize} max={300} min={8} onChange={(e)=>{dispatch(FONTSIZE(e.target.value))}}/>
              </div>
            </div>
            <div className="single__variants">
              {
                singleData ? singleData?.variants?.map((e:any, i:number)=>
                  <div className="single__variant" key={i}>
                    <div className='single__variant-vision'>
                      
                      <p>{e == 100 ? "Thin": e == 200 ? "ExtraLight" : e==300 ? "Light" : e==400? "Regular" : e==500? "Medium": e==600? "Bold": e==700? "ExtraBold": e==800? "Black" : e==900? "Black": ""}{e}</p>
                      <p style={{whiteSpace: "nowrap",fontSize: fontSize, fontFamily: singleData.family, fontWeight: parseInt(e), fontStyle: e.includes("italic") && "italic"}}>{textValue.length>0? textValue : fontValue}</p>
                    </div>
                    <div className='select-font'>
                      <span>Select {e == 100 ? "Thin": e == 200 ? "ExtraLight" : e==300 ? "Light" : e==400? "Regular" : e==500? "Medium": e==600? "Bold": e==700? "ExtraBold": e==800? "Black" : e==900? "Black": ""}{e}</span>
                    </div>
                  </div>
                ): "Loading..."
              }
            </div>
            <div className="variant__test">
              <select onChange={(e)=>{setSelectValue(e.target.value)}}>
                {
                  singleData?.variants?.map((e:any, i:number)=>
                  <option key={i} value={e}>{e == 100 ? "Thin": e == 200 ? "ExtraLight" : e==300 ? "Light" : e==400? "Regular" : e==500? "Medium": e==600? "Bold": e==700? "ExtraBold": e==800? "Black" : e==900? "Black": ""}{e}</option>
                  )
                }
              </select>
              <div className="test-variants">
                {
                  singleData?.variants?.map((e:any, i:number)=>
                  <div key={i}>
                    <span>{selectValue.replace(/[A-Za-z]/g, "") == 100 ? "Thin": selectValue.replace(/[A-Za-z]/g, "") == 200 ? "ExtraLight" : selectValue.replace(/[A-Za-z]/g, "") == 300 ? "Light" : selectValue.replace(/[A-Za-z]/g, "") == 400? "Regular" : selectValue.replace(/[A-Za-z]/g, "") == 500? "Medium": selectValue.replace(/[A-Za-z]/g, "") == 600? "Bold": selectValue.replace(/[A-Za-z]/g, "") == 700? "ExtraBold": selectValue.replace(/[A-Za-z]/g, "") == 800? "Black" : selectValue.replace(/[A-Za-z]/g, "") == 900? "Black": ""}{selectValue} at {(i+12)*2}px</span>
                    <p style={{fontSize: (i+12)*2, fontWeight: e} }>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero animi et natus deserunt odio, repudiandae culpa facilis dolorum placeat voluptatem! Fugiat assumenda obcaecati officiis esse, odio similique molestias est sequi!</p>
                  </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </Container1>
    </div>
  )
}

export default SingleFont