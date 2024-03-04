// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails} = props
  const {id, thumbnailUrl, imageUrl, imageAltText} = imageDetails

  const onClickImage = () => {
    console.log('clicked', id)
  }
  return (
    <img
      src={thumbnailUrl}
      alt={imageAltText}
      className="thumbnail-image"
      onClick={onClickImage}
    />
  )
}

export default ThumbnailItem
