import { useState } from "react";

export default function Hour() {
  const [selectedTimes, setSelectedTimes] = useState([]);

  const handleTimeClick = (time) => {
    if (selectedTimes.includes(time)) {
      // Si la franja horaria ya está seleccionada, la eliminamos
      setSelectedTimes(
        selectedTimes.filter((selectedTime) => selectedTime !== time)
      );
    } else {
      // Si no está seleccionada, la añadimos
      setSelectedTimes([...selectedTimes, time]);
    }
  };

  const isTimeSelected = (time) => selectedTimes.includes(time);

  return (
    <div className="time-picker-container">
      <div className="time-picker-hours">
        {[...Array(8).keys()].map((hour) => {
          const startHour = 9 + hour;
          const startTime = `${startHour}:00`;
          const endTime = `${startHour + 1}:30`;

          return (
            <div
              key={startTime}
              className={`time-picker-hour ${
                isTimeSelected(startTime) ? "selected" : ""
              }`}
              onClick={() => handleTimeClick(startTime)}
            >
              {`${startTime} - ${endTime}`}
            </div>
          );
        })}
      </div>
    </div>
  );
}