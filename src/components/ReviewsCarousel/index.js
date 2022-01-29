// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewState: 0}

  renderActiveReview = review => {
    const {username, imgUrl, companyName, description} = review

    return (
      <div className="review-container">
        <img className="image" src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {activeReviewState} = this.state

    if (activeReviewState > 0) {
      this.setState(preState => ({
        activeReviewState: preState.activeReviewState - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {activeReviewState} = this.state
    const {reviewsList} = this.props

    if (activeReviewState < reviewsList.length - 1) {
      this.setState(preState => ({
        activeReviewState: preState.activeReviewState + 1,
      }))
    }
  }

  render() {
    const {activeReviewState} = this.state
    const {reviewsList} = this.props
    const currentReviewDetails = reviewsList[activeReviewState]

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            className="arrow-button"
            testid="leftArrow"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          {this.renderActiveReview(currentReviewDetails)}

          <button
            type="button"
            className="arrow-button"
            onClick={this.onClickRightArrow}
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
