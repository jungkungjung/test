import './CarItem.css';
function CarItem(props) {
  const { title, thumbnailUrl } = props;
    return (
        <div className="guitar-item">
        <img src={thumbnailUrl} />
          <h4>{title}</h4>
        </div>
    );
}
export default CarItem;