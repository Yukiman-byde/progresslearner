import React, { useState, useEffect }from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Authenticated from '@/Layouts/Authenticated';
import { IProps } from '@/Pages/Auth/hooks';
import HomeHeader from './HomeHeader';
import axios from 'axios';
import styled from 'styled-components';
import {IPropsAndIVideo} from '../Auth/hooks';
import Grid from '@mui/material/Grid';
import ItemListed from './ItemListed';


const App:React.FC<IPropsAndIVideo> = ({auth, errors, youtubes}) => {


    return (
        <Authenticated
        auth={auth}
        errors={errors}
           header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Home</h2>}
        >
            <HomeHeader />

        </Authenticated>
    );
}

export default App;









