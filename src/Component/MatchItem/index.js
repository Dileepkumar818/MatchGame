import './index.css'

const MatchItem = props => {
  const {item, checkMatch} = props
  const {thumbnailUrl, id} = item

  const match = () => {
    checkMatch(id)
  }

  return (
    <li className="listItem">
      <button className="imgButton" onClick={match} type="button">
        <img className="imgItem" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default MatchItem
