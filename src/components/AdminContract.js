import axios from 'axios';
import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AdminContract = ({ contract, handleContracts }) => {
    const [showDelete, setShowDelete] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);
    const deleteRef = useRef(null)
    const editRef = useRef(null);
    const date = new Date();
    const contractDate = new Date(contract.exprtion_date);
    const diffTime = (contractDate - date);
    const EditContract = (e) => {
        e.preventDefault();
        editRef.current.click();
        axios.put(`http://localhost/API_7/admin.php/${contract.contract_id}`, inputs).then(function (response) {
            console.log(response.data);
            handleContracts();
        });
    }
    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value, contract_id: contract.contract_id }));
        console.log(inputs)
    };





    let badge = '';
    if (contract.status === "APPROVED") {
        badge = 'badge-soft-success';
    } else if (contract.status === "WAITING" && !(diffTime < 0)) {
        badge = 'badge-soft-warning';
    } else if (contract.status === "EXPIRED" || diffTime < 0) {
        badge = 'badge-soft-info';
    } else {
        badge = 'badge-soft-danger';
    }

    const deleteContract = (e) => {
        e.preventDefault();
        deleteRef.current.click();

        console.log("delete contract");
    }
    const delete_Contract = (id) => {

        axios.delete(`http://localhost/API_7/admin.php/${id}/delete`).then(function (response) {
            handleContracts();
        })

    }

    return (
        <>
            <div className="col-xl-3 col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <div className="dropdown float-end">

                        </div>
                        <div className="d-flex align-items-center">
                            <div className="flex-1 ms-3">
                                <h5 className="font-size-16 mb-1">
                                    <a href="#" className="text-dark">
                                        {contract.contract_name}
                                    </a>
                                </h5>
                                <span className={`badge ${badge} mb-0`}>
                                    {diffTime < 0 ? "Expired" : contract.status}
                                </span>
                            </div>
                        </div>
                        <div className="mt-3 pt-1">
                            <p className="text-muted mb-0">
                                <i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary" />{" "}
                                {contract.company_phone}
                            </p>
                            <p className="text-muted mb-0 mt-2">
                                <i className="mdi mdi-home font-size-15 align-middle pe-2 text-primary" />{" "}
                                {contract.company_name}
                            </p>
                            <p className="text-muted mb-0 mt-2">
                                <i className="mdi mdi-google-maps font-size-15 align-middle pe-2 text-primary" />{" "}
                                {contract.address}
                            </p>
                        </div>
                        <div className="d-flex gap-2 pt-4">
                            <Button variant="primary" onClick={handleShowEdit}>
                                <i className="bx bx-user me-1" /> Edit Contract
                            </Button>


                            <Button variant="danger" onClick={handleShowDelete} >
                                <i className="bx bx-message-square-dots me-1" /> Delete Contract
                            </Button>

                            <Modal show={showDelete} onHide={handleCloseDelete} onClick={() => delete_Contract(contract.contract_id)}>
                                <Modal.Header closeButton>
                                    <Modal.Title> Delete {contract.contract_name}</Modal.Title>
                                </Modal.Header>
                                <form onSubmit={deleteContract}>
                                    <Modal.Body>
                                        <p>Are you sure you want to delete this contract?</p>

                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" data-bs-dismiss="modal"
                                        >
                                            Close
                                        </Button>
                                        <Button type='submit' variant="danger" onClick={handleCloseDelete} ref={deleteRef}>
                                            Delete
                                        </Button>
                                    </Modal.Footer>
                                </form>
                            </Modal>

                        </div>

                    </div>
                </div>

            </div>
            <Modal show={showEdit} onHide={handleCloseEdit} >
                <Modal.Header closeButton>
                    <Modal.Title> PhyllisGatlin@spy.com</Modal.Title>
                </Modal.Header>
                <form onSubmit={EditContract}>
                    <Modal.Body >
                        <div className="form-group mb-3">
                            <label htmlFor="exampleInputEmail1">contract status:</label>

                            <select onChange={handleChange} name="status" className="form-control" aria-label="Default select example" style={{ backgroundColor: "white" }}>
                                <option selected disabled>Open this select menu</option>
                                <option value="APPROVED">APPROVED</option>
                                <option value="WAITING">WAITING</option>
                                <option value="REJECTED">REJECTED</option>
                            </select>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleInputEmail1">contract name:</label>
                            <input
                                type="text"
                                name="contract_name"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                // onChange={}
                                disabled
                                value={contract.contract_name}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Signing_date</label>
                            <input
                                type="date"
                                name="Signing_date"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                // onChange={handleChange}
                                disabled
                                value={contract.Signing_date}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">expiration date</label>
                            <input
                                type="date"
                                name="exprtion_date"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                // onChange={handleChange}
                                value={contract.exprtion_date}
                                disabled
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">total_cost</label>
                            <input
                                type="number"
                                name="total_cost"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                // onChange={handleChange}
                                value={contract.total_cost}
                                disabled
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">amount</label>
                            <input
                                type="number"
                                name="amount"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                // onChange={handleChange}
                                value={contract.amount}
                                disabled
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">items type</label>
                            <input
                                type="text"
                                name="items"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                // onChange={handleChange}
                                disabled
                                value={contract.items}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Legal officer name</label>
                            <input
                                type="text"
                                name="Legal_officer_name"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                // onChange={handleChange}
                                value={contract.Legal_officer_name}
                                disabled
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                                warranty start date
                            </label>
                            <input
                                type="date"
                                name="warranty_start_date"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                value={contract.warranty_start_date}
                                disabled
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">warranty__end_date</label>
                            <input
                                type="date"
                                name="warranty__end_date"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                // onChange={handleChange}
                                value={contract.warranty__end_date}
                                disabled
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">company_name</label>
                            <input
                                type="text"
                                name="company_name"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                value={contract.company_name}
                                disabled
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">address</label>
                            <input
                                type="text"
                                name="address"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                disabled
                                value={contract.address}

                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">company_phone</label>
                            <input
                                type="text"
                                name="company_phone"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                value={contract.company_phone}
                                disabled
                            />
                        </div>


                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                                liaison_officer_name
                            </label>
                            <input
                                type="text"
                                name="liaison_officer_name"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                value={contract.liaison_officer_name}
                                disabled
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" data-bs-dismiss="modal"
                        >
                            Close
                        </Button>
                        <Button variant="primary" type="submit" onClick={handleCloseEdit} ref={editRef}>
                            Edit Contract
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}

export default AdminContract