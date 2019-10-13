import React, { Component } from 'react';
import PROJECTS from './data/projects';

class Projects extends Component{
    render(){
        return (
            <div>
                <h2>Highlighted Porjects</h2>
                <div>
                    {
                        //.map() will take the array from PROJECTS and make it into JXS rather than having to do it manually which is definetely not scalable
                        PROJECTS.map(PROJECT => {
                            return (
                                //using a key will tell React that the this JXS is created by .map() and will allow it to optimize how it is rendered
                                <div key={PROJECT.id}>{PROJECT.title}</div>
                            );
                        })
                    }
                </div>
            </div>

        )
    }
}

export default Projects