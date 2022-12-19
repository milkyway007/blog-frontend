import { FC } from "react";
import { default as PostComponent } from "./post/Post";
import { Post } from '../../model/post';

interface Props {
    posts: Post[];
}

const PageContent: FC<Props> = ({posts}) => {
    return (
        <div className='columns'>
            <div className='column'></div>
            <div className='column is-two-thirds'>
                <div className='column is-three-quarters'>
                    {
                        posts.map(p => {
                            return (<PostComponent key={p.id.toString()} title={p.title} message={p.message.substring(0, 285)} />);
                        })
                    }
                </div>
                <div className='column'></div>
            </div>
            <div className='column'></div>
        </div>
    );
}

export default PageContent;