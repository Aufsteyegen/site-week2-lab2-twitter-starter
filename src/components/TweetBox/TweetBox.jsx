import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox({ userProfile, setTweets, tweetText, setTweetText }) {
    let numChars = 140 - tweetText.length
    let validCount = numChars === 140 || numChars < 0 ? false : true
    
    function handleOnTweetTextChange(event) {
        setTweetText(event.target.value)
    }
    function handleOnSubmit () {
        const newTweet = {name: userProfile.name, handle: userProfile.handle,
                          text: tweetText, comments: 0, retweets: 0, likes: 0}
        setTweets((oldTweets) => [...oldTweets, {...newTweet, id: oldTweets.length }])
        tweetText = ""
    }
  return (
    <div className="tweet-box">
      <TweetInput value={tweetText} handleOnChange={handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount numChars={numChars} validCount={validCount}/>
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} validCount={validCount}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
    console.log(props.validCount)
    const spanClassName = !props.validCount ? "invalid-tweet" : "valid-tweet";
  return <span className={spanClassName}>
    {props.numChars}
  </span>
}

export function TweetSubmitButton({ handleOnSubmit, validCount }) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={validCount ? handleOnSubmit : () => {}}>Tweet</button>
    </div>
  )
}
