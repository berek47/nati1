import { destinations } from "../../data";
import "./destination.scss";

const Destination = () => {
  const filteredDestinations = {
    starting: destinations.filter(d => d.type === 'starting'),
    stop: destinations.filter(d => d.type === 'stop'),
    finish: destinations.filter(d => d.type === 'finish')
  };

  return (
    <div className="destinations">
      <div className="box box_8">
        <ul className="timeline">
          {filteredDestinations.starting.map(destination => (
            <li key={destination.time} className="timeline-item">
              <div className="timeline-content">
                <h4>Starting Point</h4>
                <p>{destination.time} {destination.address}</p>
              </div>
            </li>
          ))}
          {filteredDestinations.stop.map(destination => (
            <li key={destination.time} className="timeline-item">
              <div className="timeline-content">
                <h4>Stop Point</h4>
                <p>{destination.time} {destination.address}</p>
              </div>
            </li>
          ))}
          {filteredDestinations.finish.map(destination => (
            <li key={destination.time} className="timeline-item">
              <div className="timeline-content">
                <h4>Finish Point</h4>
                <p>{destination.time} {destination.address}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Destination;
