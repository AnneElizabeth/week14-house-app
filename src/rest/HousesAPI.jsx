const baseURL = 'https://64b7578edf0839c97e1684e0.mockapi.io/api/houses/';

class HousesApi {
    get = async () => {
        try {
            const resp = await fetch(baseURL);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log('Oops, fetchHouses had an issue!', e);
        }
    }

    put = async (house) => {
        try {
            const resp = await fetch(`${baseURL}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch(e) {
            console.log('Oops, updating houses had an issue!', e);
        }
    }
}

export const housesAPI = new HousesApi();