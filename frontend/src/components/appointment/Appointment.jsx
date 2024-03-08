import { useContext } from "react";
import AppointmentContext from "../../context/AppointmentContext";
import Calendar from "./Calendar";
import Hour from "./Hour";
import FormData from "./FormData";

export default function Appointment () {
  const { selectedDate, selectedHour, formData } = useContext(AppointmentContext);

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/turno/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: selectedDate,
          hour: selectedHour,
          formData,
        }),
      });

      if (response.ok) {
        console.log("Cita agendada con éxito");
      } else {
        console.error("Error al agendar la cita:", response.statusText);
      }
    } catch (error) {
      console.error("Error en la solicitud al backend:", error);
    }
  };

  return (
    <div>
      <Calendar />
      <Hour />
      <FormData />

      <button onClick={handleSubmit}>Reservar</button>
    </div>
  );
}