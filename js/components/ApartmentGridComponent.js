class ApartmentsGridComponent {
    constructor() {
        this.htmlElement = document.createElement('div');
        this.state = {
            apartments: [],
        };
        this.init();
    }

    saveData = (apartments) => {
        this.state.apartments = {apartments}
        this.render()
    }

    showError = error => {
        console.error(error)
    }

    init = () => {
        API.fetchApartments(this.saveData, this.showError)
        this.render()
    }

    render = () => {
        if (this.state.apartments.length === 0) {
            this.htmlElement.innerHTML = '<img src="assets/loading.gif" style="width: 256px">'
        } else {
            this.htmlElement.innerHTML = '<pre>' +JSON.stringify(this.state.apartments) + '</pre>'
        }
    }
}