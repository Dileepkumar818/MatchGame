import './index.css'

const TabItem = props => {
  const {item, getItems, activeTabId} = props
  const {tabId, displayText} = item

  const getItem = () => {
    getItems(tabId)
  }

  const toggle = activeTabId === tabId ? 'button' : 'tab-button'
  return (
    <li>
      <button className={toggle} type="button" onClick={getItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
