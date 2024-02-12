import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Home.scss"
// import Nav from '../../components/navbar/Nav'
import { Container1 } from '../../utils/Utils'
import Nav from '../../components/navbar/Nav'
import { useDispatch, useSelector } from 'react-redux'
import { ADDFONT } from '../../redux/slices/fontSlice/fontSlice'
import { importGoogleFont } from '../../helpers/googleLink'
import { importGoogleFont2 } from '../../helpers/secondLink'

const Home = () => {
  const dispatch = useDispatch()
  const fontSize = useSelector((state:any)=>state.fontsize_Data.fontSize)

  
  const myKey = "AIzaSyCz5SovJVTzQrqA8ddsw_ZeiK8QACaPjlA"
  const data = useSelector((state:any)=>state.font_Data.fonts)
  const textareaValue = useSelector((state:any)=>state.textarea_Data.inpValue)
  const [fontInp, setFontInp] = useState("Motivation is an internal state that propels individuals to engage in goal-directed behavior.")
  useEffect(()=>{
    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${myKey}`)
    .then(res => res.json())
    .then(response => {
      dispatch(ADDFONT(response.items))      
      importGoogleFont(response.items)
      }
    )

  
  
  
  




    




    // var apiUrl = [];
    // apiUrl.push('https://fonts.googleapis.com/css?family=');
    // apiUrl.push(anonymousPro.family.replace(/ /g, '+'));
    // if (contains('italic', anonymousPro.variants)) {
    //   apiUrl.push(':');
    //   apiUrl.push('italic');
    // }
    // if (contains('greek', anonymousPro.subsets)) {
    //   apiUrl.push('&subset=');
    //   apiUrl.push('greek');
    // }

    // // url: 'https://fonts.googleapis.com/css?family=Anonymous+Pro:italic&subset=greek'
    // var url = apiUrl.join('');





  },[])
  return (
    <Container1>
      <Nav/>
      <div>
        {
          
          data ? data.slice(200,400).map((e:any, i:number)=>
            <Link to={`/${e.family}`} key={i}>
              <p >{e.family}</p>
              <p style={{whiteSpace: "nowrap", fontSize: `${fontSize}px`, fontFamily: `${e.family} ,${e.category}`}}>{textareaValue.length>0 ? textareaValue:fontInp}</p>              
            </Link>
            ):
            "Loading..."
        }    
        {console.log(data)
        }    
      </div>
    </Container1>
  )
}

export default Home