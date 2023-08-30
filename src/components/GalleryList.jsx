import { Box, ImageList } from '@mui/material';

//Components
import GalleryItem from './GalleryItem.jsx';

function GalleryList({ fetchImages, imageList }) {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.light',
      }}>
      <ImageList
        variant='masonry'
        sx={{
          width: 0.96,
          height: 0.9,
          ml: 2
        }}

        cols={3} gap={8}>
        {imageList?.map((item) => (
          <GalleryItem fetchImages={fetchImages} key={item.id} item={item} />
        ))}
      </ImageList>

    </Box>
  )
}

export default GalleryList;