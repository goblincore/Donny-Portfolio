
import React from 'react';
import Project from './Project';


export default class ProjectsContainer extends React.Component{



	render(){
		console.log('this.props projectcontainer', this.props.projectInfo);
		if(this.props.projectInfo){
		return(
			<Project projectInfo={this.props.projectInfo }/>
		)
		} else{
			return null;
		}
	}


}