import {Box, ImageList} from '@mui/material';

//Components
import GalleryItem from './GalleryItem.jsx';

function GalleryList({ fetchImages, imageList}) {
    return (
        <Box
        sx={{
          backgroundColor: 'primary.light', 
        }}>
          <ImageList 
            variant='standard'
            sx={{
                width: 1, 
                height: 0.9,
                }} 
            
            cols={4} gap={8}>
            {imageList?.map((item) => (
                <GalleryItem fetchImages={fetchImages} key={item.id} item={item} />
            ))}
          </ImageList>

        </Box>
    )
}

export default GalleryList;