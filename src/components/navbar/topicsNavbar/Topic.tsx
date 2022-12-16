import { Navbar } from "react-bulma-components";

interface Props {
    header: string;
}
const Topic: React.FC<Props> = ({header}) => {
    return (
        <Navbar.Item renderAs='a'>
            <div>{header}</div>
        </Navbar.Item>
    );
}

export default Topic;