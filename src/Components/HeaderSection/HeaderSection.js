import HeaderIcon from '../HeaderIcon/HeaderIcon';
import classes from './HeaderSection.module.css';

const HeaderSection = ({imgSrc=false, link={text:"Test", url:"#"}}) => {
  return (
    <>
      <HeaderIcon imgSource={imgSrc}/>
      <a href={link.url} className={classes.headerSection__link}>{link.text}</a>
    </>
  )
};

export default HeaderSection;
