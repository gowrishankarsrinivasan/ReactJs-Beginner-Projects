import { useState } from "react"; 
import BackGround from "./BackGround";
import NavBar from "./NavBar";
import Hero from "./Hero";


const Center = () =>{
    let HeroData = [
        {text1:"dive into" , text2:"What you love"},
        {text1:"Indulge" , text2:"your passion"},
        {text1:"Give into " , text2:"Your passion"},
    ]
    const [heroCount, setHeroCount] = useState(0);
    const [playStatus,setPlayStatus] = useState(false);
    return(
        <div>
            <BackGround playStatus={playStatus} heroCount={heroCount}></BackGround>
            <NavBar/>
            <Hero
                setPlayStatus={setPlayStatus}
                HeroData={HeroData[heroCount]}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
                playStatus={playStatus}
            />
        </div>
    );
}
export default Center;