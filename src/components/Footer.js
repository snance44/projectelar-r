import React from "react";

export default function Footer() {
    return (
        <div className="footer-body">
            <div className="container fluid">
                <div className="row p-3">
                    <div className="col">
                        <p>This website was made by Sarah Nance.</p>
                         <a className="btn btn-social-icon btn-github m-2" target="_blank" href="https://github.com/snance44/projectelar-r">
                            <span className="fa fa-github"></span>
                        </a>
                        <a className="btn btn-social-icon btn-linkedin m-2" target="_blank" href="https://www.linkedin.com/in/sarah-nance-26212140/">
                            <span className="fa fa-linkedin"></span>
                            </a>
                    </div>
                </div>
            </div>
        </div>
    )
}