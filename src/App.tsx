import './App.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMessage,faHeart} from "@fortawesome/free-regular-svg-icons";
import {faRetweet, faEllipsis,faChartSimple, faHeart as faHeartsolid,faArrowUpFromBracket,faBars } from "@fortawesome/free-solid-svg-icons";
import pineda from "../public/Profile.png";




function App() {
    const [like, setLike] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);

    function Mgusta() {
        setLike(!like);
        like ? setCount(count - 1): setCount(count + 1 ) 
    }

    const changelike = like ? faHeartsolid:faHeart;
    const changeidlike= like ? "text-red-500":"";
return(
<>
<div id="homework" className='flex justify-center items-center h-screen' >
    <div id="twitter-card" className='w-145 h-72 max-w-4xl shadow-lg bg-black flex-col relative border-r-2 border-t-2 border-gray-400'>
        <div className='flex gap-2 m-8 ml-4'>
            <img className=" w-10  rounded-full mr-2" src={pineda} alt="perfil" />
            <span className='text-white'><b>Jancarlos</b></span>
            <span className='text-gray-500'>@Jancarlo_s</span>
            <span className='text-gray-500 font-medium'>·Jan 29, 2022</span>
            <FontAwesomeIcon id='menu' className='text-gray-500 self-end relative bottom-3 left-48' icon={faEllipsis}/>
        </div>
        <div id="content"  className='text-white ml-16 relative bottom-11'>
            <p className='ml-2'>
               <span>Localhost:8081/admin/pass?</span> 
            </p>
        </div>
        <div id="button" className='text-gray-500 flex justify-around relative top-28'>
            <FontAwesomeIcon id='comment' icon={faMessage}/>
            <FontAwesomeIcon icon={faBars} />
            <FontAwesomeIcon id='retweet' className='' icon={faRetweet} />
            <FontAwesomeIcon className={changeidlike} icon={changelike} onClick={Mgusta} />
            <FontAwesomeIcon id='views' icon={faChartSimple} />
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
            <span className='text-gray-500 absolute -top-1 right-0 mr-52'>{count}</span>
        </div>
    </div>
</div>
</>

)
}

export default App;
