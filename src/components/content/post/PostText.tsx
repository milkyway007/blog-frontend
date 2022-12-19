import { FC } from "react";

interface Props {
    title: String;
    message: String;
}

const PostText: FC<Props> = ({title, message}) => {
    return (
        <div className='media-content column is-three-quarters'>
            <div className='title'>{title}</div>
            <div>{message}</div>
        </div>
    )
}

export default PostText;