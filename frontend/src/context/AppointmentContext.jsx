import { createContext, useState } from "react";

const AppointmentContext = createContext();

const AppointmentProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState(new Date());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <AppointmentContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        selectedHour,
        setSelectedHour,
        formData,
        setFormData,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};
export { AppointmentProvider };
export default AppointmentContext;