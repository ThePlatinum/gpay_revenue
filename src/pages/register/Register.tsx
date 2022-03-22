import {useState} from 'react'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Registration1 from '../../components/registration1/Registration';
import Registration2 from '../../components/registration2/Registration';
import Registration3 from '../../components/registration 3/Registration';
import Registration4 from '../../components/registration4/Registration';
import Registration5 from '../../components/registration5/Registration';

const Register = () => {
const [state, setState] = useState(1)

  return (
    <div>
        <Navbar/>
        {state === 1 ? (<Registration1 setState={setState}/>) : (<Registration2 setState={setState}/>)}
        <Footer />
    </div>
  )
}

export default Register