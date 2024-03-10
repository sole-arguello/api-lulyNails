
import * as dateFns from 'date-fns';
import { useState } from 'react';
import esLocale from 'date-fns/locale/es';

const formatOfYear = 'yyy';
const formatOfMonth = 'MMM';
const formatOfWeek = 'eeeeee';
const formatOfDay = 'd';

export default function Calendar() {

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDays, setSelectedDays] = useState({});
  const today = new Date();

  const firstDay = dateFns.startOfMonth(currentDate);
  const lastDay = dateFns.lastDayOfMonth(currentDate);
  const startDate = dateFns.startOfWeek(firstDay);
  const endDate = dateFns.lastDayOfWeek(lastDay);

  const totalDate = dateFns.eachDayOfInterval({ start: startDate, end: endDate });

  const weeks = ((date) => {
    const weeks = [];
    for (let day = 0; day < 7; day++) {
      weeks.push(dateFns.addDays(date, day));
    }
    return weeks;
  })(startDate);

  //para los estilos
  const isToday = (day) => dateFns.isSameDay(day, today);
  const isWeekend = (day) => dateFns.isWeekend(day) && dateFns.isSunday(day);
  const isSelectedDate = (day) => dateFns.isSameDay(day, selectedDate);
  const isPastDate = (day) => dateFns.isBefore(day, dateFns.startOfDay(today));
  const isCompleted = (day) => selectedDays[day] && selectedDays[day] >= 2;
  const isDisabled = (day) => isPastDate(day);

  //formato de informacion del calendario
  const formatMonth = dateFns.format(currentDate, formatOfMonth, { locale: esLocale })
  const formatYear = dateFns.format(currentDate, formatOfYear)

  const handleDayClick = (date) => {

    if (isDisabled(date)) {
        console.log(`No puedes seleccionar días anteriores.`);
        return;
      }
      
    const selectedCount = selectedDays[date] || 0;
  
    if (selectedCount < 2) {
      console.log(`Día seleccionado: ${date}`);
      console.log(`Conteo de seleccion de dias ${date}: ${selectedCount + 1}`);
  
      setSelectedDays((prevSelectedDays) => ({
        ...prevSelectedDays,
        [date]: selectedCount + 1,
      }));

      setSelectedDate(date);

    } else {
        console.log(`No puedes seleccionar el día ${date} más de dos veces.`);
    }

    
  }

  const handleMonthChange = (forward) => {
    const newDate = forward ? dateFns.addMonths(currentDate, 1) : dateFns.subMonths(currentDate, 1);
    setCurrentDate(newDate);
  };

  return (
    <div className='calendar-container'>
      <div className='calendar-header'>
        <button className='calendar-button' onClick={() => handleMonthChange(false)}>
          Anterior
        </button>
        <div className='calendar-title'> {formatMonth} {formatYear}</div>
        <button className='calendar-button' onClick={() => handleMonthChange(true)}>
          Siguiente
        </button>
      </div>
      <div className='calendar-content'>
        <div className='calendar-content-weeks'>
          {weeks.map((day, index) => (
            <div key={index} className='calendar-week'>
              {dateFns.format(day, formatOfWeek, { locale: esLocale })}
            </div>
          ))}
        </div>
        <div className='calendar-content-days'>
          {totalDate.map((date) => (
            <div
            key={date}
            className={`calendar-day ${isSelectedDate(date) ? 'selected' : ''} 
            ${isDisabled(date) ? 'disabled' : ''} 
            ${isCompleted(date) ? 'completed' : ''}`}
            style={{
                color: !dateFns.isSameMonth(date, currentDate) ? '#ddd' 
                : isSelectedDate(date) ? 'blue' 
                : isToday(date) ? 'green' 
                : isWeekend(date) ? 'red' : ''
              }}
              onClick={() => handleDayClick(date)}
            >
              {dateFns.format(date, formatOfDay, { locale: esLocale })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}