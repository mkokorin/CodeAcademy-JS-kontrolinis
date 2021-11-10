const serverURL = "http://localhost:3000";

class API {
  static fetchAparts = (success, failure) => {
    fetch(`${serverURL}/apartments`)
      .then((res) => res.json())
      .then(success)
      .catch(failure);
  };

  static deleteAparts = (id, success, failure) => {
    fetch(`${serverURL}/apartments/${id}`, { method: "DELETE" })
      .then(success)
      .catch(failure);
  };
}