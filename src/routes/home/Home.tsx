import { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import "./Home.scss"
// import Nav from '../../components/navbar/Nav'
import { Container1 } from '../../utils/Utils'
import Nav from '../../components/navbar/Nav'
import { useDispatch, useSelector } from 'react-redux'
import { ADDFONT } from '../../redux/slices/fontSlice/fontSlice'
import { importGoogleFont } from '../../helpers/googleLink'

const Home = () => {
  const dispatch = useDispatch()
  const fontSize = useSelector((state:any)=>state.fontsize_Data.fontSize)
  
  const myKey = "AIzaSyCz5SovJVTzQrqA8ddsw_ZeiK8QACaPjlA"
  const data = useSelector((state:any)=>state.font_Data.fonts)
  const textareaValue = useSelector((state:any)=>state.textarea_Data.inpValue)
  const [fontInp] = useState("Motivation is an internal state that propels individuals to engage in goal-directed behavior.")
  useEffect(()=>{
    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${myKey}`)
    .then(res => res.json())
    .then(response => {
      dispatch(ADDFONT(response.items.slice(0,200)))      
      importGoogleFont(response.items.slice(0,200))
      }
    )





  },[])
  return (
    <Container1>
      <Nav/>
      <div className='home'>
        <div className='families-range'>
          <p>{data.length} of 200 families</p>
        </div>
        {
          
          data.length>0 ? data.map((e:any, i:number)=>
            <Link to={`/font/${e.family}`} key={i}>
              <p >{e.family}  <span>{e.variants.length} styles</span></p>
              <p style={{whiteSpace: "nowrap", fontSize: `${fontSize}px`, fontFamily: `${e.family} ,${e.category}`}}>{textareaValue.length>0 ? textareaValue:fontInp}</p>              
            </Link>
            ):
            "Cannot Find"
        }                
      </div>
    </Container1>
  )
}

export default Home