import {ImageListItem, ImageListItemBar} from '@mui/material';
import RecommendIcon from '@mui/icons-material/Recommend';

import axios from 'axios';

function GalleryItem({fetchImages, item}) {

  const handleClick = () => {
    console.log(item.id);

    axios.put(`gallery/like/${item.id}`)
    .then((response) => {
      fetchImages();
    })
    .catch((error) => {
      console.error(error);
    })

  }



  return (
        <ImageListItem key={item.id}
          sx={{
            border: 1,
            boxShadow: 1
          }}
        
        
        >
        <img src={`../${item.path}w=165&h=165&fit=crop&auto=format`}
        srcSet={`../${item.path}?w=165&h=165&fit=crop&auto=format&dpr=2 2x`}
        loading="lazy" 
        component='Box'/>
          <ImageListItemBar 
          title={item.description}
          subtitle={`${item.likes} like this`}
          position="bottom"
          actionIcon={
            <RecommendIcon 
            sx={{
              cursor: 'pointer'
            }}
            aria-label={'Like'} 
            color="primary"
            onClick={handleClick}/>
          }
          style={{ transition: '0.7s' }}
          />
        </ImageListItem>

    )
}

export default GalleryItem;