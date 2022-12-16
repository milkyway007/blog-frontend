import { FC } from "react";
import { Box, Columns, Media, Image, Content } from "react-bulma-components";

const PageContent: FC = () => {
    const imageStyle = {
        backgroundColor: 'grey',
    }
    return (
        <Columns>
        <Columns.Column></Columns.Column>
        <Columns.Column className="is-two-thirds">
            <Columns.Column className="is-three-quarters">
                <Box>
                    <div className='media columns'>
                                <div className='media-left column'>
                                    <figure className='image is-square'>
                                        <img src="" alt="" style={imageStyle} />
                                    </figure>    
                                </div>
                                <div className='media-content column is-three-quarters'>

  
                                            <div className="title">How to Extend Prototypes with JavaScript</div>
                                            <div>One of the ideological sticking points of the first JavaScript framework was was extending prototypes vs. wrapping functions. Frameworks like MooTools and Prototype extended prototypes while jQuery and other smaller frameworks did not. Each had their benefits, but ultimately all these years later I still </div>
                            
                                </div>                     
                        
                    </div>
                </Box>
            </Columns.Column>
            <Columns.Column></Columns.Column>
        </Columns.Column>
        <Columns.Column></Columns.Column>
        </Columns>
    );
}

export default PageContent;