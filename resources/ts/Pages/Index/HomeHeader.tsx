import React,{ useState } from 'react';
import styled from 'styled-components';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ItemListed from './ItemListed';
import axios from 'axios';

type Props = {}

function HomeHeader({}: Props) {
    const [value, setValue] = useState("1");

    const handleChange = (event: React.SyntheticEvent, value: string) => {
         setValue(value);
    }

  return (
    <Header>
        <Box>
            <Tabs
            value={value}
            onChange={handleChange}
            >
                <Tab value="1" label="Basic"/>
                <Tab value="3" label="Intermediate"/>
                <Tab value="5" label="Advance"/>
            </Tabs>
        </Box>
        <ItemListed value={value}/>
    </Header>
  )
}

export default HomeHeader;

const Header = styled.div`
   width: 100%;
   text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    flex: 1;
    flex-direction: column;

   .MuiTabs-root {
       text-align: center;
       align-items: center;
       justify-content: space-around;
       display: flex;
   }

   .MuiTab-root {
       margin: 0 30px;
   }
`;
