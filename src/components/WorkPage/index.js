import React from 'react';
import HomeNav from './HomeNav';
import ProjectsContainer from './ProjectsContainer';
import Image from './Image';
import PlusGrid from './PlusGrid';
import {debounce} from 'lodash';


const projects=[
{
    title:'Bored 2018',
    type:'Full Stack App',
    desc:'Bored is a desktop web app for organizing images into "moodboards" - visual collections of aesthetic inspiration. A key feature is the ability to drag and arrange images freely in a collage-like or scrapbooking fashion, which is something I\'ve found missing from most online moodboarding applications.',
    img:'https://github.com/thinkful-ei22/Donny-Bored-Client/raw/master/screenshots/themainidea.jpg',
    team:'solo',
    stack:['PostGres','React/Redux','Node/Express']

},

{

    title:'SlowJam 2018',
    type:'React Native',
    desc:' Slowjam is a Youtube music application, with a twist - the audio is processed so that it\'s slowed down, with the pitch being affected as well. This has the effect of elevating the pathos of certain songs to the level of tragicomedy. Created using React Native and Expo SDK.',
    img:'https://github.com/thinkful-ei22/Donny-Playground/raw/master/screenshots/godsplan.gif',
    team:'solo',
    stack:['React Native','Expo']

}





]

export default class WorkPage extends React.Component {

	constructor(props){
		super(props)
		this.state={
			mobileIsUp: false,
            switchingProject: false,
            projectIndex:0
        }
    }
    
    wheelListener=['wheel', e =>{
        e.preventDefault();
        this.handleScroll(e);
    }];

	handleScroll = debounce(e=>{
        console.log('wheel event',e);
        if(e.deltaY > 20){
            console.log('wheel down');
            this.setState({
                projectIndex : this.state.projectIndex+1
            })
        }

        if(e.deltaY < -10){
            console.log('wheel up');
            this.setState({
                projectIndex : this.state.projectIndex-1
            })
            
        }
    },100);
    


	componentDidMount(){	
		window.addEventListener(...this.wheelListener);

	}


	componentWillUnmount(){
        window.removeEventListener(...this.wheelListener);
	}


    render() {
        console.log('projects',projects[this.state.projectIndex]);
        return (
          
            <main className="main">
                <div className="view home" style={ {touchAction: "none"}}>
                    <HomeNav/>
                    <Image/>
                    <ProjectsContainer projectInfo={projects[this.state.projectIndex]}/>
                    <PlusGrid />
                  </div>
             </main>

        );
    }
}


