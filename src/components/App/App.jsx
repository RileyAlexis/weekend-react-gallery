import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';


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
            pl: 10
        }}>
          <div>
          <h2>Gallery</h2>
          </div>
        </Box>
          <Box
            sx={{
              backgroundColor: 'primary.light', 
            }}>
              <ImageList 
                variant='standard'
                sx={{width: 1, height: 0.9}} cols={4} gap={8}>
                {imageList?.map((item) => (
                    <ImageListItem key={item.id}>
                      <img src={`../${item.path}w=165&h=165&fit=crop&auto=format`}
                      srcSet={`../${item.path}?w=165&h=165&fit=crop&auto=format&dpr=2 2x`}
                      loading="lazy" 
                      component='Box'/>
                        <ImageListItemBar 
                        title={item.description}
                        style={{ transition: '0.7s' }}
                        sx={{ 
                          '&:hover': {
                            height:1/2}
                        }}
                        />
                      </ImageListItem>
                ))}
              </ImageList>

            </Box>





      </Container>
    );
}

export default App;
