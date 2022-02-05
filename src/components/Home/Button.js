import React from "react";
import styled from "styled-components";


// const theme = {
//   blue: {
//     default: "#b3831e",
//     hover: "#b3831e"
//   },
//   pink: {
//     default: "#e91e63",
//     hover: "#ad1457"
//   }
// };

const Button = styled.button`
min-width: 100px;
padding: 16px 32px;
border-radius: 4px;
margin-top: -65px;
margin-bottom: 120px;
font-size: 26px;
cursor: pointer;
border-color: #BF953F;
box-shadow: 2px 2px 2px 2px rgba(0.459, 0, 0, 0.459) !important;
color: white !important;
background-color: transparent !important;
opacity: 0.9 !important;
transition: all 0.5s ease 0s !important;
font-family: 'Short Stack', cursive !important;
&:hover{
    transform: scale(1.02) !important;
    overflow: hidden !important;
    box-shadow: 0 4px 4px 5px rgba(0, 0, 0, 0.561) !important;
  }
`;

// Button.defaultProps = {
//   theme: "blue"
// };

// function clickMe() {
//   alert("You clicked me!");
// }

// const ButtonToggle = styled(Button)`
//   opacity: 0.7;
//   ${({ active }) =>
//     active &&
//     `
//     opacity: 1; 
//   `}
// `;

// const Tab = styled.button`
//   padding: 100px 30px;
//   cursor: pointer;
//   opacity: 0.6;
//   background: white;
//   border: 0;
//   outline: 0;
//   border-bottom: 2px solid transparent;
//   transition: ease border-bottom 250ms;
//   ${({ active }) =>
//     active &&
//     `
//     border-bottom: 2px solid black;
//     opacity: 1;
//   `}
// `;


export default function App() {
  return (
    <>
        <Button>LOGIN</Button>
    </>
  );
}
