import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Check, CrossIcon } from "lucide-react";
import Modal from "../../../components/modal/Modal";

const localizer = momentLocalizer(moment);

const RoomReservation = () => {
  const [events, setEvents] = useState([]);
  const [clientColors, setClientColors] = useState({});
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [open,setOpen] =  useState(false)

  const rooms = [101, 102, 103, 104, 105]; // Liste des chambres disponibles.

  // Générer une couleur aléatoire pour chaque client
  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  // Vérifier si une chambre est occupée pour la période donnée
  const isRoomOccupied = (roomNumber, start, end) => {
    return events.some(
      (event) =>
        event.roomNumber === roomNumber &&
        event.isPaid && // Seul l'événement payé bloque la chambre
        ((start >= event.start && start < event.end) || // Chevauchement du début
          (end > event.start && end <= event.end) || // Chevauchement de la fin
          (start <= event.start && end >= event.end)) // Inclusion complète
    );
  };

  // Ajouter une réservation
  const addReservation = ({ start, end }) => {
    const clientName = prompt("Entrez le nom du client :");
    const roomNumber = prompt("Entrez le numéro de chambre (ex : 101) :");


    if (clientName && roomNumber) {
      if (!rooms.includes(parseInt(roomNumber))) {
        alert("Numéro de chambre invalide !");
        return;
      }

      if (isRoomOccupied(roomNumber, start, end)) {
        alert("Cette chambre est déjà occupée pour cette période !");
        return;
      }

      const isPaid = window.confirm("Le client a-t-il payé un acompte ?");

      if (!clientColors[clientName]) {
        setClientColors({
          ...clientColors,
          [clientName]: generateRandomColor(),
        });
      }

      setEvents([
        ...events,
        {
          start,
          end,
          clientName,
          roomNumber,
          isPaid,
        },
      ]);
    }
  };

  // Appliquer des styles aux événements
  const eventStyleGetter = (event) => {
    const color = event.isPaid ? "#f00" : clientColors[event.clientName];
    return {
      style: {
        backgroundColor: color,
        color: "white",
        borderBottom: `1px solid ${color}`,
      },
    };
  };

  // Filtrer les événements par chambre sélectionnée
  const filteredEvents = selectedRoom
    ? events.filter((event) => event.roomNumber === selectedRoom.toString())
    : events;

  return (
    <>
    <div className="reservation-container">
      <header className="header">
        <h1>Réservations de Chambres</h1>
        <button
          className="add-reservation-button"
          onClick={() => setOpen(true)}
        >
          Ajouter une réservation
        </button>
      </header>

      {!open && ( // N'afficher le calendrier que si le modal n'est pas ouvert
        <>
          <div className="room-list">
            <h3>Chambres disponibles</h3>
            <div className="room-buttons mt-2">
              <select
                name=""
                id=""
                className="form-control w-32"
                onChange={(e) =>
                  setSelectedRoom(
                    selectedRoom === e.target.value ? null : e.target.value
                  )
                }
              >
                {rooms.map((room) => (
                  <option key={room} value={room}>
                    {room}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="calendar mt-5">
            <Calendar
              localizer={localizer}
              events={filteredEvents}
              defaultView="month"
              selectable
              startAccessor="start"
              endAccessor="end"
              onSelectSlot={addReservation}
              eventPropGetter={eventStyleGetter}
              style={{ height: "400px", opacity: 1 }}
            />
          </div>
        </>
      )}

      <div className="reservation-list">
        <h3 className="">Liste des Réservations</h3>
        <table className="text-left w-full ">
          <thead className="">
            <tr className="bg-gray-100  text-gray-700 ">
              <th className="px-4 py-2 ">Nom client </th>
              <th className="px-4 py-2">Numéro chambre</th>
              <th className="px-4 py-2">Date de début</th>
              <th className="px-4 py-2">Date de fin</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.map((event, index) => (
              <tr
                key={index}
                className="text-gray-700 py-3 hover:bg-gray-200"
              >
                <td className="px-4 py-2 flex items-center">
                  <p
                    className="reservation-color w-3 h-3"
                    style={{
                      backgroundColor: event.isPaid
                        ? "#ff4d4f"
                        : clientColors[event.clientName],
                    }}
                  ></p>
                  {event.clientName}
                </td>
                <td className="px-4 py-2">{event.roomNumber}</td>
                <td className="px-4 py-2">
                  {moment(event.start).format("DD/MM/YYYY")}
                </td>
                <td className="px-4 py-2">
                  {moment(event.end).format("DD/MM/YYYY")}
                </td>
                <td className="px-4 py-2">
                  {event.isPaid ? (
                    <span className="bg-red-700 text-xs p-2 rounded-full opacity-50 text-white">
                      occupé
                    </span>
                  ) : (
                    <span className="bg-green-700 opacity-80 text-xs p-2 rounded-full text-white">
                      non occupé
                    </span>
                  )}
                </td>
                <td className="px-4 py-2 flex">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full ">
                    <Check />
                  </span>
                  <span className="w-6 h-6 bg-red-500 text-white rounded-full ml-3">
                    <CrossIcon />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <Modal open={open} onClose={() => setOpen(false)} width="600px" height="400px">
  <h1 className="mt-5 text-2xl">Ajouter Réservations de Chambres</h1>
  <form action="">
    <div className="form grid grid-cols-2 gap-9">
      <div className="form1">
        <div className="form-group">
          <label htmlFor="client">Client</label>
          <input
            type="text"
            id="client"
            className="form-control w-full"
            placeholder="Entrez client"
          />
        </div>
        <div className="form-group">
          <label htmlFor="roomNumber">Numéro chambre</label>
          <select id="roomNumber" className="form-control w-full">
            {rooms.map((room) => (
              <option key={room} value={room}>
                {room}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group mt-2">
          <label htmlFor="paymentStatus">Statut de paiement</label>
          <select id="paymentStatus" className="form-control w-full">
            <option value="paid">Payé</option>
            <option value="unpaid">Non payé</option>
            <option value="advance">Acompte</option>
          </select>
        </div>
      </div>
      <div className="form2">
        <div className="form-group">
          <label htmlFor="startDate">Date de début</label>
          <input
            type="date"
            id="startDate"
            className="form-control w-full"
            placeholder="Date début réservation"
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">Date de fin</label>
          <input
            type="date"
            id="endDate"
            className="form-control w-full"
            placeholder="Date fin réservation"
          />
        </div>
      </div>
    </div>
    <div className="mt-5 float-end">
      <button className="btn">Annuler</button>
      <button className="btn-primary ml-3">Reserver</button>
    </div>
  </form>
</Modal>


  </>
  );
};

export default RoomReservation;
