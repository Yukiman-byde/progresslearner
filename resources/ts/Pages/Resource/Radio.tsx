import React from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import styled from 'styled-components';
import { Checkbox } from '@mui/material';


interface IRadio {
    value: string,
    handleSubmit: (arg: string) => void,
}

const RadioSelect:React.FC<IRadio>=({value, handleSubmit})=>{

    return(
        <FormControlLabel onClick={()=>handleSubmit(value)} value={value} control={<Checkbox />} label={value} />
    );
}

export default RadioSelect;

const RadioWrapper = styled.div`
  display: flex;
`;
