import axios from 'axios';

export function GetReservationsByEmail(searchTerm: string) {
    let data = axios.get(`https://reservation-system-xtwy.azurewebsites.net/api/reservations/customer/${searchTerm}`).then(response => response.data);
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(data), 1000);
    })
}