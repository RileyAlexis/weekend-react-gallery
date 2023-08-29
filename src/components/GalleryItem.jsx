import {ImageListItem, ImageListItemBar} from '@mui/material';
import RecommendIcon from '@mui/icons-material/Recommend';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonGroup from '@mui/material/ButtonGroup';

import axios from 'axios';
import swal from 'sweetalert';

function GalleryItem({fetchImages, item}) {

  const handleClick = () => {
    axios.put(`gallery/like/${item.id}`)
    .then((response) => {
      fetchImages();
    })
    .catch((error) => {
      console.error(error);
    })

  }

  const deleteItem = () => {
    swal({
      title: `Delete this picture?`,
      text: 'This cannot be undone',
      icon: "warning",
      buttons: true,
      dangerMode: true
      })
      .then((value) => {
          if (value) {
          axios.delete(`/gallery/${item.id}`)
          .then((response) => {
              fetchImages();
          }).catch((error) => {
              console.log(error);
          })
      }
    }
      )
  }

  return (
        <ImageListItem key={item.id}
          sx={{
            border: 1,
            boxShadow: 1
          }}>

        <img src={`../${item.path}w=165&h=165&fit=crop&auto=format`}
        srcSet={`../${item.path}?w=165&h=165&fit=crop&auto=format&dpr=2 2x`}
        loading="lazy" 
        component='Box'/>
          <ImageListItemBar
          
          title={item.description}
          subtitle={`${item.likes} like this`}
          position="bottom"
          actionPosition='right'
          actionIcon={
            <ButtonGroup variant='contained'>
            <RecommendIcon 
            sx={{
              cursor: 'pointer'
            }}
            aria-label={'Like'} 
            color="primary"
            onClick={handleClick}/>
            <DeleteIcon 
              sx={{
                cursor: 'pointer'
              }}
              color="warning" 
              onClick={deleteItem}
              />
            </ButtonGroup>
          }
          />


        </ImageListItem>

    )
}

export default GalleryItem;