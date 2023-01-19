import styled from 'styled-components';
import bgImg from '../../imgs/bg.png';
import imgProfile from '../../imgs/imageProfile.jpg';
import animationProgrammer from '../../imgs/mainGif2.gif';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: url(${bgImg});
  background-position:center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;
export const PersonalInfoHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  //background-color: #fff;
`;

export const ImageProfile = styled.div`
  background: url(${imgProfile});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 240px;
  height: 240px;
  border-radius: 50%;
`;

export const ProfileDescription = styled.div`
  background-color: rgba(0, 0, 0, 0.5 );
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 95%;
  height: 30%;
  color: #fff;
  margin: 15px 5px;
  text-align: center;
  border-radius: 15px;

  span{
    display: block;
    font-size: 20px;
    font-family: monospace;
    font-weight: 600;

  }

  .firstColor{
    display: inline-block;
    color: #E1AF3E;
  }

  .imColor{
    display: inline-block;
    color: #47E734;
  }

  .oneLine{
    white-space: nowrap;
    border-right: 4px solid;
    width: 22ch;
    animation: typing 3s steps(22), blink .5s infinite ;
    overflow: hidden;
  }

  .twoLine{
    white-space: nowrap;
    border-right: 4px solid;
    width: 29ch;
    animation-delay: 3000ms;
    animation: typing 3s steps(29), blink .5s infinite ;
    overflow: hidden;
  }

  @keyframes typing{
    from{ width: 0px }
    to {width: 100%}
  }


  @keyframes typingTwoLine{
    from{ width: 0px }
    to {width: 100%}
  }

  @keyframes blink{
    50% {border-color: transparent}
  }

`;

export const ProgramminPresentationHome = styled.div`
  width: 700px;
  height: 500px;
  background: url(${animationProgrammer});
  background-size: cover;
  background-repear: no-repeat;
  background-position: center;
`;

