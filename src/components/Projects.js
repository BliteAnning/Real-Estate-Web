import { useEffect, useState } from 'react';
import {asset, projectsData} from '../assets/asset';

const Project = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);

    const NextImg =() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }
    const prevImg =() =>{
        setCurrentIndex ((prevIndex)=> prevIndex === 0? projectsData.length -1:
        prevIndex - 1)
    }
    
    useEffect(()=>{
        const updateCardToShow =() => {
            if(window.innerWidth >= 1024){
                setCardsToShow(projectsData.length)
            }else{
                setCardsToShow(1)
            }
        }; 

        updateCardToShow();

        window.addEventListener('resize', updateCardToShow);

        return () => window.addEventListener('resize', updateCardToShow)
    }, [])



    return ( 
        <section id="projects">
            <div className="projectHead">
                <h1>Projects <span className='completed'>completed</span></h1>
                <p>Crafting spaces, building legacies - Explore our portfolios</p>
            </div>
            <div className="arrows">
                <button onClick={prevImg}><img src={asset.left_arrow} alt="previous" className="Arrow" /></button>
                <button onClick={NextImg}><img src={asset.right_arrow} alt="next" className="Arrow" /></button>
            </div>
            
            <div className="portfolio">
                <div  style={{transform: `translateX(-${currentIndex * 100 /cardsToShow}%)`, display: "flex", transition: "transform 0.5s ease-in-out",}} className="eachPort">
                    {projectsData.map((project, index)=> (
                        <div  className="eachPortfolio" key={index}>
                            <img src={project.image} alt="project" className='imgPort'/>
                            <div className="portDesc">
                                <h3>{project.title}</h3>
                                <p>{project.price} | {project.location}</p> 
                            </div>
                        </div>
                    
                    
                ))}
                </div>
                
            </div> 
        </section>
     );
}
 
export default Project;