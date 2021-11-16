import axios from 'axios';

export function GetReservationsByEmail(searchTerm: string) {
    let data = axios.get(`https://reservation-system-xtwy.azurewebsites.net/api/reservations/customer/${searchTerm}`).then(response => response.data);
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(data), 1000);
    })
}

export function GetAllReservations() {
    let data = axios.get(`https://reservation-system-xtwy.azurewebsites.net/api/reservations`).then(response => response.data);
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(data), 1000);
    })
}

export function GetOpenSittings() {
    let data = axios.get(`https://reservation-system-xtwy.azurewebsites.net/api/sittings`).then(response => response.data);
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(data), 1000);
    })
}

export function GetSittingById(id: number) {
    let data = axios.get(`https://reservation-system-xtwy.azurewebsites.net/api/sittings/${id}`).then(response => response.data);
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(data), 1000);
    })
}

export function CreateReservationBySittingId(id: number, resInfo: any) {
    return axios.post(`https://reservation-system-xtwy.azurewebsites.net/api/sittings/${id}/reserve`, resInfo)
        .then(response => console.log(response))
        .catch(error => {
            console.log('There was an error!' + error.message, error);
        });

}