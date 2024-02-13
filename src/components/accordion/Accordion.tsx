import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BiWorld } from 'react-icons/bi';
import { FaTextWidth } from 'react-icons/fa';
import { MdDraw } from 'react-icons/md';
import { TbLine } from 'react-icons/tb';
import "./Accordion.scss"
import { useDispatch, useSelector } from 'react-redux';
import { ADDFONT } from '../../redux/slices/fontSlice/fontSlice';

export default function DisabledAccordion() {
  const dispatch = useDispatch()
  const categories = ['sans-serif', 'display', 'serif', 'handwriting', 'monospace']
  const myKey = "AIzaSyCz5SovJVTzQrqA8ddsw_ZeiK8QACaPjlA"

  const {fonts} = useSelector((state:any)=>state.font_Data)
  console.log(fonts);



  const handleVariantsSort = (number:number)=>{
    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${myKey}`)
      .then(res => res.json())
      .then(response => {
        dispatch(ADDFONT(response.items.slice(0,200).filter((e:any)=>e.variants.length>=number)))  
      }
      )
  }
  



  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className='accordion__head'><BiWorld/>Language</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> 

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography><FaTextWidth/>Technology</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <button>Color</button>
            <button>Color</button>
        </AccordionDetails>
      </Accordion>    
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography><MdDraw/>Decorative Stroke</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography> */}
            <div className="category__filter">
              {
                categories.map((e:any, i:number)=>
                  <button key={i} onClick={(e)=>e}>{e}</button>
                )
              } 
            </div>
          {/* </Typography> */}
        </AccordionDetails>
      </Accordion>  
      {/* <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography><FaRegFolder/>Classification</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>   */}
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography><TbLine/>Properties</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography> */}
            <div>
              <input type="range" min={1} max={18}  onChange={(e:any)=>{handleVariantsSort(e.target.value)}}/>
            </div>
          {/* </Typography> */}
        </AccordionDetails>
      </Accordion>  
    </div>
  );
}