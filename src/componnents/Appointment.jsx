export default function Appointment(props) {
  return (
    <li>
      <div>
        <input
          type="checkbox"
          name="checkbox"
          id={`appointment-${props.appointment.id}`}
        />
        <label htmlFor={`appointment-${props.appointment.id}`}>
          {props.appointment.name}
        </label>
      </div>
      <button>Remover</button>
    </li>
  );
}
