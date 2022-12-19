import { FC } from "react";

const imageStyle = {
    backgroundColor: 'grey',
}

const PostImage: FC = () => {
    return (
        <div className='media-left column'>
            <figure className='image is-square'>
                <img src="" alt="" style={imageStyle} />
            </figure>    
        </div>
    )
}

export default PostImage;