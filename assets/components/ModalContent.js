import React from "react";
import UserForm from "./UserForm";

export default function ModalContent({ onClose }) {
    return (
        // <div className="modal">
        //     <div>I'm a modal dialog</div>
        //     <button className="btn btn-success mb-2 mt-2">Ajouter</button>
        //     <button className="btn btn-secondary" onClick={onClose}>Annuler</button>
        // </div>

        <div className="modal" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Nouvel utilisateur</h5>

                    </div>
                    <div className="modal-body">
                        <p>Veuillez saisir les informations du nouvel utilisateur.</p>

                        {/* FORMULAIRE D'AJOUT UTILISATEUR */}
                        <UserForm />

                    </div>
                    {/* <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Ajouter</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onClose}>Annuler</button>
                    </div> */}
                </div>
            </div>
        </div>

        // PRESENTATION MODALE TWIG
        // <div className="modal" id="modal1" tabindex="-1" aria-hidden="true" data-modal-form-target="modal">
        //     <div className="modal-dialog">
        //         <div className="modal-content">
        //             <div className="modal-header">
        //                 <h5 className="modal-title">
        //                     <i className="bi bi-person-add me-2"></i>Nouvel utilisateur</h5>
        //                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        //             </div>
        //             <div className="modal-body">
        //                 <p>
        //                     Veuillez saisir les informations du nouvel utilisateur.
        //                 </p>
        //                 <div className="container col-lg-6 mt-lg-4 mx-auto pt-3 pb-3 text-center"> <form method="post">
        //                     <div>
        //                         <label htmlFor="lastName">Nom :</label>
        //                         <input type="text" id="lastName" name="lastName" required />
        //                     </div>
        //                     <div>
        //                         <label htmlFor="firstName">Prénom :</label>
        //                         <input type="text" id="firstName" name="firstName" required />
        //                     </div>
        //                     <div>
        //                         <label htmlFor="mail">E-mail :</label>
        //                         <input type="email" id="mail" name="mail" required />
        //                     </div>
        //                     <div>
        //                         <label htmlFor="address">Adresse :</label>
        //                         <input type="text" id="address" name="address" required />
        //                     </div>
        //                     <div>
        //                         <label htmlFor="phone">Téléphone :</label>
        //                         <input type="text" id="phone" name="phone" required />
        //                     </div>
        //                     <button type="reset" className="btn btn-sm btn-dark mt-2">
        //                         Effacer
        //                     </button>
        //                     <br /><button type="submit" className="btn btn-primary mt-2">
        //                         <i class="bi bi-plus-lg me-2"></i>
        //                         Ajouter
        //                     </button>
        //                 </form>
        //                 </div>
        //             </div>
        //             <div className="modal-footer">
        //                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
        //                     <i className="bi bi-x-lg me-2"></i>Annuler
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>

    );
}

//DOC REACT