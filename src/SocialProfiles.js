import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component{
    render(){
        const {link, image} = this.props.socialProfile;

        return(
            //style is similar to CSS which changes properties
            <div style={{ display: 'inline-block', width: 45}}>
                <a href={link}> <img src={image} alt='social-profile' style={{ width: 30, height: 30}}/></a>
            </div>
        );
    }
}

class SocialProfiles extends Component{
    render(){
        return(
            <div>
                <h2>Connect</h2>
                <div>{
                    SOCIAL_PROFILES.map( Profiles => {
                        //socialProfiles={Profiles} is a prop. WHat is a prop? It means propeties so in the SocialProfile class the object has the properties of {link, image}
                        return(<SocialProfile key={Profiles.id} socialProfile={Profiles} />);
                        }) 
                    }    
                </div>
            </div>
        );
    }
}

export default SocialProfiles;