// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {searchDetails, inputValue} = props
  const {suggestion} = searchDetails
  const onInput = () => {
    inputValue(suggestion)
  }

  return (
    <li className="suggestion-container">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={onInput}
      />
    </li>
  )
}

export default SuggestionItem
