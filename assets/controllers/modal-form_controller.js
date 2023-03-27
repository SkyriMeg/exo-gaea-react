import { Controller } from 'stimulus';
import { Modal } from 'bootstrap';
import axios from 'axios';

// /!\ CONTROLEUR INUTILE POUR LE FULL REACT /!\

export default class extends Controller {
    static targets = ['modal'];
    static values = {
        formUrl: String,
    }

    openModal(event) {
        const modal = new Modal(this.modalTarget);
        console.log(this.formUrlValue);

        axios.get(`user/new`).then(response => {
            console.log(response);
        })
            .catch(error => {
                console.error(error);
            });
        modal.show();
    }
}