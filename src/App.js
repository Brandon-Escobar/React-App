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
                <p>My name is Brandon Escobar and I am a Computer Science and Engineering student at the University of California, Merced.</p>
                <p>I am currently taking a Data Structures class and will be taking an Algorithms and Computer Organization class next semster.</p> 
                {
                    this.state.displayBio ? (
                    <div>
                        <p>I also have a strong interest in exploring the world, which is why I will study abroad next year in Japan, where I will participate in undergraduate research.</p>
                        <p>I have a strong interest in computer science and software, which is shown by my projects done out of the scope of my university classes.</p>
                        <p>I am looking to expand on my knowledge of computer science through internships in summer 2020.</p>
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