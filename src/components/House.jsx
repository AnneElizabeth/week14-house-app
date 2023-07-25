import React from 'react';
import { NewRoomForm } from './NewRoomForm';

export const House = (props) => {
    const { house, updateHouse } = props;

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((roomId = house._id !== roomId))
        };
        
        updateHouse(updatedHouse);

        const addNewRoom = (room) => {
            return updateHouse({...house, rooms: [...house.rooms, room]})};
        

        const rooms = () => {
            <ul>
                {house.rooms.map((room, index) => {
                    <li key={index}>
                        <label>
                            {`${room.name} Area: ${room.area}`}
                        </label>
                        <button onClick={(e) => deleteRoom(room._id)}>Delete Room</button>
                    </li>
                })}
            </ul>
        };

        return (
            <div>
                <h3>{house.name}</h3>
                {
                    rooms( {rooms, houseId : house._id, deleteRoom} )
                }
                <NewRoomForm addNewRoom={addNewRoom} />
            </div>
        );
    }
}