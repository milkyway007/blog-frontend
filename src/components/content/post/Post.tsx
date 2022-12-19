import { FC } from "react";
import PostImage from "./PostImage";
import PostText from "./PostText";

interface Props {
    title: String;
    message: String;
}

const Post: FC<Props> = ({title, message}) => {
    return (
        <div className='box'>
            <div className='media columns'>
                <PostImage />
                <PostText title={title} message={message} />
            </div>
        </div>
    )
}

export default Post;