import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

//Components
import GalleryList from '../GalleryList';


//Material UI
import {Container, Box , ImageList, ImageListItem, ImageListItemBar} from '@mui/material';

function App() {

  const [imageList, setImageList] = useState([]);

  const fetchImages = () => {
    axios.get('gallery/')
    .then((response) => {
      setImageList(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    fetchImages();
  }, []);

    return (
      <Container maxWidth="lg" disableGutters>
        <Box 
            component="h2"
            sx={{
            backgroundColor: 'primary.light',
            border: 0.2,
            width: 1,
            pl: 10,
            boxShadow: 2
        }}>
          <div>
          <h2>Gallery</h2>
          </div>
        </Box>
        <GalleryList fetchImages={fetchImages} imageList={imageList}/>
      </Container>
    );
}

export default App;
