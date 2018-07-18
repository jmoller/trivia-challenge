import styled, { css } from "styled-components";

const Button = styled.button`

    &,
    &:link,
    &:visited {
      position: relative;
      padding: 2.5rem 4rem;
      width: 100%;
      font-size: 5rem;
      font-family: "Var";
      color: #4b3a4f;
      letter-spacing: 0.2rem;
      border: 0;
      border-radius: 1.3rem;
      transition: all .3s ease-in-out;
    }
      &:before {
        content: "";
        background: linear-gradient(
          rgba(256, 256, 256, 0.5),
          rgba(256, 256, 256, 0)
        );
        width: 10rem;
        height: 2.4rem;
        display: inline-block;
        width: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        border-radius: 10rem;
      }

      &:hover {
        transform: translateY(-.5rem);
      }

      &:active,
      &:focus {
        transform: translateY(.5rem);
        outline: none;
      }

  && {    
  ${props =>
    props.truthy &&
    css`
      background: #00d55b;
      padding: 2.5rem 2rem;
      box-shadow: 0px 6px 0px 0px #6F950B;
      width: 47%;
    `}
  
  ${props =>
    props.falsy &&
    css`
      background: #f72c76;
      padding: 2.5rem 2rem;
      box-shadow: 0px 6px 0px 0px #BE2A51;
      width: 47%;
    `}
  
  ${props =>
    props.primary &&
    css`
      background: linear-gradient(#ffe036, #ffbe32);
      box-shadow: 0px 6px 0px 0px #b2831e;
    `}
    ${props =>
    props.secondary &&
    css`
      background: linear-gradient(#FF4072, #F03969);
      box-shadow: 0px 6px 0px 0px #BE2A51;
      color: #ffffff;
    `}
  }
`;

Button.displayName = "Button";

export default Button;
