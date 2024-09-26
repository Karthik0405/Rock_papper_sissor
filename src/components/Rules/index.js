import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'
import './index.css'

const Rules = () => (
  <div className="rules-container">
    <Popup
      modal
      trigger={
        <button className="rule-button" type="button">
          Rules
        </button>
      }
    >
      {close => (
        <>
          <div className="rule-img-container ">
            <button
              type="button"
              onClick={() => close()}
              className="rule-close-button"
            >
              <RiCloseLine className="close-icon" />
            </button>
          </div>
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
              className="rule-img"
            />
          </div>
        </>
      )}
    </Popup>
  </div>
)

export default Rules
