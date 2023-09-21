import React from 'react'
import './ExtModal.css'

function ExtModal(props) {
    
    return (
        <>
            <div className="modal fade" id="modalId" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <i className="fa-solid fa-plus bg-dark-subtle mr"></i>
                            <h5 className="modal-title" id="modalTitleId">
{props.moddata.name}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Body
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>


            <script>
                const myModal = new bootstrap.Modal(document.getElementById('modalId'), options)

            </script>
        </>
    )
}

export default ExtModal