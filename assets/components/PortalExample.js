import React, { useState } from 'react';
import { createPortal } from 'react-dom';

export default React.forwardRef(function PortalExample(props, ref) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                Nouvel utilisateur
            </button>
            {showModal && createPortal(
                <div className="modal" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Nouvel utilisateur</h5>

                            </div>
                            <div className="modal-body">
                                <p>Veuillez saisir les informations du nouvel utilisateur.</p>

                                {/* FORMULAIRE D'AJOUT UTILISATEUR */}

                                <form ref={ref}>
                                    <label
                                        className="form-label"
                                        htmlFor="lastName">Nom :
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                    />

                                    <label
                                        className="form-label"
                                        htmlFor="firstName">Prénom :
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                    />

                                    <label
                                        className="form-label"
                                        htmlFor="email">Email :
                                    </label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        name="email"
                                        id="email"
                                    />

                                    <label
                                        className="form-label"
                                        htmlFor="address">Adresse :
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="address"
                                        id="address"
                                    />

                                    <label
                                        className="form-label"
                                        htmlFor="phone">Téléphone :
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="phone"
                                        id="phone"
                                    />

                                    <label
                                        className="form-label"
                                        htmlFor="birthDate">Date de naissance :
                                    </label>
                                    <input
                                        className="form-control"
                                        type="date"
                                        name="birthDate"
                                        id="birthDate"
                                    />

                                    <div className="modal-footer">
                                        {/* <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={props.handleClick}>Ajouter</button> */}
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            onClick={props.handleClick}>Ajouter</button>
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-dismiss="modal"
                                            onClick={() => setShowModal(false)}>Annuler</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
})