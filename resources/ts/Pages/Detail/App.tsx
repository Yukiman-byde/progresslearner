import React from 'react'
import styled from 'styled-components';
import Authenticated from '@/Layouts/Authenticated';
import {IPropsAndIVideo} from '../Auth/hooks';
import NewHeader from '@/NewComponents/NewHeader';
import Title from '@/NewComponents/Title';
import { NewButton } from '@/NewComponents/NewButton';

interface IPropsAndIVideoAndICategoryAndILevel extends IPropsAndIVideo {
    categories : [{
        id :number,
        category: string,
        English_category: string,
    }],

    levels : [{
        id :number,
        level: string,
        English_level: string,
    }]
}

interface ILabel {
    label: string,
}

// {auth, errors, youtubes}
const App:React.FC<IPropsAndIVideoAndICategoryAndILevel> = ({auth, errors, youtubes, categories, levels})=> {


  return (
    <Wrapper>
        <NewHeader auth={auth} errors={errors}>
            Video's Information
        </NewHeader>
        <BackgroundImg>
          <img className='Parent' src={youtubes.thumbnail}/>
          <img className='Children' src={youtubes.thumbnail}/>
        </BackgroundImg>
        <Container>
            <>
                <h2>{youtubes.name}</h2>
                <p>{youtubes.description}</p>
            </>
            <>
                <h3>問題数: 14</h3>
                <h3>語彙数: 14</h3>
                <h3>推定所要時間: 14分</h3>
            </>
            <NewButtonStyled
            color="#40e0d0"
            >
                Lesson Start
            </NewButtonStyled>
            <HrStyled />
                <div className="label">
                    {categories.map((category, index) => (
                        <div key={index}>
                            <H1Styled label="category">{category.category}</H1Styled>
                        </div>
                    ))}

                    {levels.map((level, index) => (
                        <div key={index}>
                            <H1Styled label="level">{level.level}</H1Styled>
                        </div>
                    ))}
                </div>
        </Container>
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  width: 100%;
  min-height: 140vh;
`;

const NewButtonStyled = styled(NewButton)`
    margin: 0 auto;
`;

const BackgroundImg = styled.div`
    position: relative;
    width: 100%;
    height: 140vh;
    .Parent {
        position: relative;
        filter: blur(6px);
        z-index: -1;
        width: 100%;
        height: 100%;
        opacity: 0.7;
    }

    .Children {
        position: absolute;
        top: 20%;
        left: 40%;
        transform: translate(-30%, -40%);
        width: 50%;
        height: 30%;
        z-index: 20;
        border-radius: 5px;
        box-shadow: 1px 20px 20px rgba(0, 0, 0, 0.1)
    }
    `;

const Container = styled.div`
   position: absolute;
   bottom: 0;
   left: 40%;
   width: 50%;
   height: auto;
   transform: translate(-30%, 50%);
   border-radius: 20px;
   background-color: #fff;
   box-shadow: 1px 20px 20px rgba(0, 0, 0, 0.1);
   z-index: 19;
   text-align: center;
   align-items: center;
   justify-content: center;
   padding: 20px;

   .label {
        width: 500px;
        margin: 0 auto;
        display: flex;
        justify-content: space-evenly;
    }

    h2 {
        font-size: 30px;
        font-weight: bold;
    }

    p {
        font-size: 20px;
        font-weight: normal;
    }

    h3 {
        padding: 10px 20px;
        background-color: #f7f7f7;
        border-radius: 30px;
        width: 300px;
        margin: 25px auto;
        letter-spacing: 0.4em;
        box-shadow: inset 0 10px 10px rgba(0, 0, 0, 0.1);
    }

`;

const H1Styled = styled.h1<ILabel>`
    padding: 10px 20px;
    border-radius: 100%;
    background: ${({label}) => label == "category" ? "#40e0d0" : "#51e041"};
`;

const HrStyled = styled.hr`
  margin-bottom: 5px;
  width: 100%;
  color: black;
  margin-top: 5px;
`;
