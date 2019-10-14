import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';

class App extends Component{
    state = { displayBio: false};            //(initializer same as creating a constrcutor and binding the this to toggleDiplayBio

    toggleDisplayBio = () =>{
        this.setState({ displayBio: !this.state.displayBio})
    }

    render() {                              //render is a fundamental method for react component and thus the this object is bound by react in the logic of extending Component
        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is Brandon Escobar And I am too streesed with getting an internship for summer 2020.</p>
                <p>But I have to at least try.</p> 
                {
                    this.state.displayBio ? (
                    <div>
                        <p>I am going to Japan next year for a whole year.</p>
                        <p>If I do I am going to be behind on a lot of things, so I have to do my best to get an internship this coming summer before I do.</p>
                        <p>It will make my chance of getting an intenship for summer 2021 much higher. Which is, actually going to be pretty low since interviewing is going to be harder, at least I think.</p>
                        <button onClick={this.toggleDisplayBio}>Show less</button>
                     </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )   //
    }
}



export default App;