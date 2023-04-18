import React, { useState } from "react";
import Appointment from "./componnents/Appointment";

function App() {
  const [appointments, setAppointments] = useState([]);
  const [input, setInput] = useState("");

  const addOrders = () => {
    const name = prompt("Qual evento deseja adicionar?");
    const newAppointment = {
      id: Math.floor(100000 * (Math.random() + 1)),
      name: input,
    };

    return setAppointments([...appointments, newAppointment]);

    console.log(appointments);
  };

  return (
    <>
      <main>
        <h1>Planner Semanal</h1>
        <div className="day">
          <h3>Segunda-feira</h3>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <ul>
            {appointments.map((appointment) => {
              <Appointment key={appointment.id} appointment={appointment} />;
            })}
          </ul>
          <button onClick={addOrders}>Adicionar</button>
        </div>
      </main>
    </>
  );
}

export default App;
