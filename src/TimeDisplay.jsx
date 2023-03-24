
import "./TimeDisplay.css"

const TimeDisplay = ({timeLeft, timeUnit}) => {

    return (
      <section>
        <div>
          <p className="middle"></p>
          <h1 className="countdown-h1">{timeLeft}</h1>
        </div>
        <h2>{timeUnit}</h2>
      </section>
    );

}

export default TimeDisplay;