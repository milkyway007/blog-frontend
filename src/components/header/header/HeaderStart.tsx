import merge from "../../../utils/mergeCssClasses";

const containerStyle = {
  margin: '0'
};

interface Props {
  header: string,
}

const HeaderStart: React.FC<Props> = ({header}) => {
    return (
        <div className={merge('navbar-start', 'is-size-1', 'has-text-weight-bold')} style={containerStyle}>
            <div className='navbar-item'>
                <div>{header}</div>
            </div>            
        </div>
  );
}
  
  export default HeaderStart;