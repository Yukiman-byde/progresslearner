import React, {useState} from 'react'
import styled from 'styled-components';
import axios from 'axios';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Button } from '@mui/material';


type Props = {
  id: number,
  handleComplete: () => void;
}


function Description({id, handleComplete}: Props) {

  const [transcription, setTranscription] = useState<string>("");

  const handleSubmit = () => {
      const data = {transcription: transcription, id: id}
      axios.post('/admin/description', data).then((response) => {
          confirm('保存が確認されました。情報入力お疲れ様でした');
          handleComplete();
      }).catch((error) => console.log(error.message));
  }

  return (
    <Wrapper>
        <h1>Transcription</h1>
        <TextareaAutosizeStyled
            onChange={(e) => setTranscription(e.target.value)}
            aria-label="minimum height"
            minRows={3}
            placeholder="Minimum 3 rows"
        />
        <Button
        onClick={handleSubmit}
        >
        Submit
        </Button>
     </Wrapper>
  )
}

export default Description

const Wrapper = styled.div`
   position: relative;
   h1 {
       padding-bottom: 30px;
       position: absolute;
       top: -70px;
       font-size: 30px;
       font-weight: bold;
   }

`;

const TextareaAutosizeStyled = styled(TextareaAutosize)`
  width: 600px;
  height: 440px;
  border-radius: 20px;
  border: 1px solid lightgoldenrodyellow
`;
