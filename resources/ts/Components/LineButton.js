import styled from 'styled-components';

export function LineButton(){
    return (
        <AStyled
        href="/lineLogin/line"
        >
            LINE Login
        </AStyled>
    );
}

const AStyled = styled.a`
   display: flex;
   justify-content: center;
   text-align: center;
   height: 50px;
   margin: 40px auto;
   align-items: center;
   width: 150px;
   color: #fff;
   border-radius: 20px;
   font-size: large;
   font-weight: bold;
   background-color: #00B900;

   &:hover {
       opacity: 0.8;
   }
`;
