import React from "react";
import { HomeContainer, PersonalInfoHome, ImageProfile, ProfileDescription, ProgramminPresentationHome } from './home.elements.jsx';

function Home(){
  return(
    <>
      <HomeContainer>
        <PersonalInfoHome>
          <ImageProfile />
          <ProfileDescription>
            <span className="oneLine"><span className="firstColor">Hi!</span>, <span className="imColor">I'm</span> Edras Mendez.</span>
            <span className="twoLine"><span className="imColor">I'm</span> <span className="firstColor">Full-Stack Web Developer.</span></span>
          </ProfileDescription>
        </PersonalInfoHome>
        <ProgramminPresentationHome>
        </ProgramminPresentationHome>
      </HomeContainer>
    </>
  );
}

export default Home;
