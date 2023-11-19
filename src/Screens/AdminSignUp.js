import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import axios from 'axios';



const AdminSignUP = () => {

    const navigate = useNavigate();



 
    const history=useNavigate();
    const [Username,setUserName]=useState('')
    const [email,setEmail]=useState('')
    const [contact,setContact]=useState('')
    const [password,setPassword]=useState('')
    const [role, setRole] = useState('Nutritionist');

    async function handleSubmit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:3031/tourist",{
               Username,email,contact,password
            })
            .then(res=>{
        
                    alert("User added")
                    navigate("/")
                }
            )
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
     <div className='flex flex-row'>
      
      <div class=" w-3/4 bg-cover
        bg-[url(https://www.healthifyme.com/blog/wp-content/uploads/2022/02/Keto-Diet-1.jpg)] 
        bg-no-repeat ">
        </div>
         

         <div className="flex justify-end  w-2/4">

<div class="w-full max-w-lg mr-3 ">

    <form class=" shadow-md rounded px-8 pt-6 pb-8bg-origin-border p-4 border-4 border-dashed" style={{ backgroundColor: '#f25333' }}>
        <h1 className="text-4xl font-extrabold text-white mt-5   text-center mb-5">Nutritionist Registration</h1>
        <div class="mb-4 ">
            <label class="block text-white text-lg font-bold mb-2" for="name">
                Name
            </label>
            
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline opacity-50" required autocomplete="off" id="name" type="name" placeholder="name" onChange={(e) => { setUserName(e.target.value) }} />
        </div>
        <div class="mb-4">
            <label class="block text-white text-lg font-bold mb-2" for="name">
                Email
            </label>
            
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline opacity-50" required autocomplete="off" id="eamil" type="email" placeholder="email" onChange={(e) => { setEmail(e.target.value) }} />
        </div>
        <div class="mb-4">
            <label class="block text-white text-lg font-bold mb-2" for="name">
                Contact
            </label>
            
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline opacity-50" required autocomplete="off" id="contact" type="number" placeholder="Contact" onChange={(e) => { setContact(e.target.value) }} />
        </div>


        <div class="mb-4">
            <label class="block text-white text-lg font-bold mb-2" for="email">
                Password
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline opacity-50" required autocomplete="off" id="password" type="password" placeholder="******" onChange={(e) => { setPassword(e.target.value) }} />
        </div>
        <h1 className="mt-5 text-center font-bold text-2xl mb-10">Select Your Role</h1>
                <div className="text-2xl ml-5 mb-5 bg-slate-300 rounded-lg p-2 hover:bg-sky-700 ">
                    <label>
                        <input type="radio" value="Nutritionist" checked={role === 'Nutritionist'} onChange={(e) => { setRole(e.target.value) }} style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                        Nutritionist
                    </label>
                </div>

                <div className="text-2xl ml-5 mb-5 bg-slate-300 rounded-lg p-2 hover:bg-sky-700 ">
                    <label>
                        <input type="radio" value="FitnessTrainer" checked={role === 'FitnessTrainer'} onChange={(e) => { setRole(e.target.value) }} style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                        Fitness Trainer
                    </label>
                </div>

        <div class="flex justify-center mt-10">
            <button class="bg-blue-700  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit} >
                Register
            </button>
        </div>

    
        <br/>
        <hr/>
        <hr/>
        <br/>

        
        <div className='flex justify-between text-white text-3xl'>
            <FacebookIcon style={{ fontSize: 50 }}/>
            <WhatsAppIcon style={{ fontSize: 50 }}/>
            <InstagramIcon  style={{ fontSize: 50 }}/>
        </div>

        <p class="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
    </p>
        

    </form>
   


</div>
</div>
       </div>
    );
}

export default AdminSignUP;
