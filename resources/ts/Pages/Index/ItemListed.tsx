import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import StartIcon from '@mui/icons-material/Start';
import SetsColsForEachItems, { IVideos, IDatum} from './SetColsForEachItems';
import { IframeStyled } from '../Auth/Admin/Video';
import VisibilityIcon from '@mui/icons-material/Visibility';
import NewComments from '@/NewComponents/NewComments';
import { current } from 'immer';


function ItemListed<IVal>({value}: {value: string}) {

     const [items, setItems] = useState<IDatum[]>([]);

     const handleHref = (item: IDatum):void => {
         window.location.href = `/index/${item.title}`;
      // location.href = "/google";
     }


  useEffect(() => {

    axios.get(`/index/Iframes/${value}`).then((response) => {
        const result:IDatum[] = SetsColsForEachItems(response.data.videos);

        setItems(result);
      });
  },[value]);


        return (
            <Wrapper>
                <ImageListStyled>
                    {items?.map((item, index) => (
                        <ImageListItem
                         key={index} cols={item.cols} rows={item.rows}
                         >
                            <img
                            src={item.img}
                            alt={item.title}
                            />
                        <ImageListItemBar
                        sx={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'}}
                          title={item.title}
                          subtitle={item.created_at}
                          actionPosition="left"
                          actionIcon={
                              <div className="icon">
                                    <IconButton
                                    >
                                        <StartIcon
                                        onClick={() => handleHref(item)}
                                        style={{color: 'white', fontSize: 28}}/>
                                    </IconButton>
                                    <div className="views">
                                            <VisibilityIcon
                                            style={{color: 'white', fontSize: 28}}
                                            />
                                            <p>14</p>
                                    </div>
                                </div>
                            }
                          position='top'
                        />
                        </ImageListItem>
                    ))}
                </ImageListStyled>
            </Wrapper>
        );

}

export default ItemListed

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  background-color: turquoise;
  padding: 40px 0;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const ImageListStyled = styled(ImageList)`
    transform: translateZ(0);
    width: 1000px;
    height: 65vh;
    gap: 10px;


    .MuiImageListItemBar-root {
       height: 100px;
       font-size: 1.2em;
       letter-spacing: 2px;
       font-weight: 600;
       border-top-left-radius: 20px;
       border-top-right-radius: 20px;
    }

    .MuiImageListItem-root {
        img {
            width: 100%;
            height: 350px;
            object-fit: cover;
            border-radius: 20px;
        }
    }

    .icon {
        min-width: 100px;
        justify-content: space-between;
        display: flex;
        margin-right: 10px;
    }

    .views {
        position: relative;
        min-width: 40px;
        display: flex;
        align-items: center;
        color: #f9f9f9;
        transition: .8s;
    }
`
