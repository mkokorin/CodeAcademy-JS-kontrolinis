const serverURL = 'http://localhost:3000'

class API {
    static fetchApartments = (success, failure) => {
        fetch(`${serverURL}/apartments/`)
            .then(res => res.json())
            .then(success)
            .catch(failure)
    }

    static deleteApartments = (id, success, failure) => {
        fetch(`${serverURL}/apartments/${id}`, { method: 'DELETE' })
            .then(success)
            .then(failure)
    }
}