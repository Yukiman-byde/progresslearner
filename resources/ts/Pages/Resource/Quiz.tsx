import React, {useState} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { IProps } from '@/hooks';
import styled from 'styled-components';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import { Wrapper } from './Index';
import RadioSelect from './Radio';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import axios from 'axios';
import CreateQuizComponent from './CreateQuizComponent';
import Description from './Description';
import CompleteInfo from './CompleteInfo';


interface INewProps extends IProps {
    video: {
        id: number,
        videoId: string,
        name: string,
        thumbnail: string,
        description: string,
        created_at: string,
    }

    levels: [{
         level: string,
         English_level: string
    }]

    categories: [{
        category: string,
        English_category: string,
    }]
}

const Quiz:React.FC<INewProps> = (props:INewProps) => {
    const [level, setLevel] = useState<string[]>([]);

    const [category, setCategory] = useState<string[]>([]);

    const [originalBoolean, setOriginalBoolean] = useState<boolean>(true);

    const [boolean, setBoolean] = useState<boolean>(false);

    const [secondBoolean, setSecondBoolean] = useState<boolean>(false);

    const [activeStep, setActiveStep] = useState<number>(0);

    const [completed, setCompleted] = useState<{
        [k: number]:boolean}
        >({});

    const steps = ['Set Level and Category (Multiple answers allowes)', 'Set Duration of video', 'Set Quiz, Choice, and answer'];

    const totalSteps = () => {
        return steps.length;
    };

    const handleLevelSubmit = (arg: string) => {
        if(level.includes(arg)){
            return ;
        } else {
            setLevel(prevPost =>[...prevPost,arg]);
        }
    }

    const handleStep = (index: number) => {
        setActiveStep(index);
    }

    const handleCategorySubmit = (arg: string) => {
        if(level.includes(arg)){
            return;
        } else {
            setCategory(prevPost =>[...prevPost,arg]);
        }
    }

    const handleNext = () => {
         setActiveStep((prevStep) => prevStep + 1);
      };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
      };

      const completedSteps = () => {
        return Object.keys(completed).length;
        //ここの処理気になるからあとで考えて！
      };

    const handlePost = () => {
        const data = {level: level, category: category, video: props.video}
        axios.post('/admin/category_level', data).then((response)=>{
            confirm('保存完了しました');
            const newCompleted = completed;
            newCompleted[activeStep] = true;
            setCompleted(newCompleted);
            handleNext();
            setBoolean(true);
            setOriginalBoolean(false);
        }).catch((error) => {
            confirm(error.message);
        })
    }

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
        setBoolean(false);
        setSecondBoolean(false);
        setOriginalBoolean(true);
      };

 return(
        <Authenticated
       auth={props.auth}
       errors={props.errors}
       >
           <StepperStyled activeStep={activeStep}>
              {steps.map((lavel: string, index: number) => (
                  <Step key={index} completed={completed[index]}>
                      <StepButton color="inherit" onClick={() => handleStep(index)}>
                          {lavel}
                      </StepButton>
                  </Step>
              ))}
           </StepperStyled>
           <Wrapper>
                {totalSteps() === completedSteps() && <CompleteInfo />}
                    <LeftWrapper>
                        <h1>Your Video</h1>
                        <iframe
                        src={`https://www.youtube.com/embed/${props.video?.videoId}`}
                        ></iframe>
                    </LeftWrapper>
                <RightWrapper>
                {originalBoolean &&
                   <>
                    <LevelWrapper>
                            <FormControl>
                                <FormLabel>Level</FormLabel>
                                <RadioGroup row>
                                {props.levels.map((level, index) => (
                                    <RadioSelect
                                     handleSubmit={handleLevelSubmit}
                                     key={index} value={level.level}/>
                                ))}
                                </RadioGroup>
                            </FormControl>
                    </LevelWrapper>
                    <CategoryWrapper>

                           <FormControl>
                                <FormLabel>Category</FormLabel>
                                    <RadioGroup
                                    row
                                    >
                                        {props.categories.map((category, index) => (
                                            <RadioSelect
                                             key={index}
                                             value={category.category}
                                             handleSubmit={handleCategorySubmit}
                                             />
                                        ))}
                                </RadioGroup>
                            </FormControl>
                    </CategoryWrapper>
                        <Button
                        onClick={handlePost}
                        variant="contained"
                        >
                            Submit
                        </Button>
                    </>}
                    <Wrapper>
                        {boolean &&
                        <CreateQuizComponent
                            videoId={props.video.videoId} handleComplete={handleComplete}
                            id={props.video.id}
                            setSecondBoolean={setSecondBoolean}
                            setBoolean={setBoolean}
                        />}
                    </Wrapper>
                    <Wrapper>
                        {secondBoolean &&
                        <Description
                        id={props.video.id}
                        handleComplete={handleComplete}
                        />}
                    </Wrapper>
                </RightWrapper>
           </Wrapper>
           <Wrapper>
               <Button
                onClick={handleReset}
                >
                    Reset
                </Button>
           </Wrapper>
       </Authenticated>
    )
}

export default Quiz;

const StepperStyled = styled(Stepper)`
   width: 100%;
   height: 100px;
`;

const LeftWrapper = styled.div`
  flex: 0.5;

  h1 {
      font-size: 30px;
      font-weight: bold;
  }

  iframe {
      width: 500px;
      height: 300px;
      border: 5px solid lightskyblue;
  }
`;

const RightWrapper = styled.div`
  flex: 0.5;
`;

const LevelWrapper = styled.div`
    background-color: lightsteelblue;
    border-radius: 6px;
    position: relative;
    height: 100px;
    align-items: center;
    justify-content: center;
    display: inline-block;
    padding-top: 35px;

  .MuiFormLabel-root{
      left: 5px;
      position: absolute;
      top: -60px;
      font-weight: bold;
      font-size: 30px;
      padding: 7px;
      border-radius: 5px;
      background-color: white;
  }
`;

const CategoryWrapper = styled.div`
    margin-top: 50px;
    background-color: lightsteelblue;
    border-radius: 6px;
    position: relative;
    height: 100px;
    align-items: center;
    justify-content: center;
    display: inline-block;
    padding-top: 35px;

  .MuiFormLabel-root{
      left: 5px;
      position: absolute;
      top: -60px;
      font-weight: bold;
      font-size: 30px;
      padding: 7px;
      border-radius: 5px;
      background-color: white;
  }
`;

