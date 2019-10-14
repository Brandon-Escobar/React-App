import React, { Component } from 'react';
import PROJECTS from './data/projects';

class Project extends Component {
    render(){
        const {title, image, description, link} = this.props.project;

        return (
            <div style={{ display: 'inline-block', width: 300, margin: 10}}>
                <h3>{title}</h3>
                <img src={image} alt='project' style={{width: 200, height: 120}}/>
                <p>{description}</p>
                <a href={link}>{link}</a>
            </div>
        );
    }
}

class Projects extends Component{
    render(){
        return (
            <div>
                <h2>Highlighted Projects</h2>
                <div>
                    {
                        //.map() will take the array from PROJECTS and make it into JXS rather than having to do it manually which is definetely not scalable
                        PROJECTS.map(PROJECT => {
                            return (
                                //using a key will tell React that the this JXS is created by .map() and will allow it to optimize how it is rendered
                                //If you accidently use Projects instead of Project the web page will not load and instead crash. No errors will show up since it is technically correct.
                                <Project key={Project.id} project={PROJECT} />
                            );
                        })
                    }
                </div>
            </div>

        )
    }
}

export default Projects;