import { useState } from "react";

const VotingTable = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [clickedRow, setClickedRow] = useState<number | null>(null);
  const candidate = {
    name: "सौ. सारिका संतोष (बप्पा) सिरसट",
    symbol: "/logo.jpg",
    number: 1,
  };

  const handleVoteClick = (rowNum: number) => {
    setClickedRow(rowNum);
    const audio = new Audio("/sirsat voice.mpeg");
    audio.play();
    setTimeout(() => {
      setShowPopup(true);
    }, 5000);
  };

  return (
    <div className="container mt-2">
      <img
        src="/banner.jpeg"
        alt="banner"
        className="w-100 h-auto rounded-3"
      />

      {/* Date Section */}
      <div className="text-center bg-primary text-white mt-2 p-2 rounded">
        <strong>मतदान दिनांक ०२ डिसेंबर २०२५ स.०७:3० ते सायं.०५:3०</strong>
      </div>

      {/* Table */}
      <div className="table-responsive mt-2">
        <table className="table table-bordered text-center align-middle">
          <thead className="table-primary" style={{ fontSize: "11px" }}>
            <tr className="bg-primary">
              <th>अ.क्र</th>
              <th>उमेदवाराचे नाव</th>
              <th>निवडणूक चिन्ह</th>
              <th>बटन</th>
            </tr>
          </thead>

          <tbody>
            {[1, 2, 3, 4].map((num) => (
              <tr key={num}>
                <td>{num}.</td>
                <td></td>
                <td></td>

                <td className="d-flex align-items-center  justify-content-between gap-1">
                  {/* Dot for every row */}
                  <span
                    className="d-inline-block rounded-circle ms-1 bg-danger"
                    style={{
                      width: "12px",
                      height: "12px",
                    }}></span>

                  <button className="btn btn-primary rounded-pill px-4 py-3 me-1"></button>
                </td>
              </tr>
            ))}
            <tr>
              <td>5.</td>

              <td className="px-1">
                <div
                  style={{ fontSize: "12px" }}
                  className="d-flex align-items-center justify-content-between">
                  <b> सिरसट&nbsp;सारिका&nbsp;संतोष</b>
                  <img
                    src="/sirsat.jpeg"
                    className="ms-1"
                    width="25"
                    height="30"
                  />
                </div>
              </td>

              <td className="p-0">
                <img
                  src={candidate.symbol}
                  alt="symbol"
                  style={{ width: "45px", height: "45px" }}
                />
              </td>

              <td className="d-flex align-items-center justify-content-between gap-2">
                {/* SMALL DOT */}
                <span
                  className={`d-inline-block rounded-circle ms-1 ${
                    clickedRow === 1 ? "bg-success" : "bg-danger"
                  }`}
                  style={{
                    width: "12px",
                    height: "12px",
                  }}></span>

                <button
                  className="btn btn-primary rounded-pill me-1 px-2"
                  style={{ fontSize: "13px" }}
                  onClick={() => handleVoteClick(1)}>
                  मत&nbsp;द्या
                </button>
              </td>
            </tr>

            {/* ------- EMPTY ROWS ------- */}
            {[6, 7, 8].map((num) => (
              <tr key={num}>
                <td>{num}.</td>
                <td></td>
                <td></td>

                <td className="d-flex align-items-center  justify-content-between gap-1">
                  {/* Dot for every row */}
                  <span
                    className="d-inline-block rounded-circle ms-1 bg-danger"
                    style={{
                      width: "12px",
                      height: "12px",
                    }}></span>

                  <button className="btn btn-primary rounded-pill px-4 py-3 me-1"></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer */}
        <div className="text-center text-bold mb-3">
          <div>
            Developed by <b>Vishal Vijaykumar Pawar</b>
          </div>
          <b>7722002544</b>
        </div>
      </div>

      {/* ------------------------ POPUP ------------------------ */}
      {showPopup && (
        <div
          className="modal fade show d-flex align-items-center justify-content-center"
          style={{
            display: "block",
            background: "rgba(0,0,0,0.5)",
            minHeight: "100vh",
          }}>
          <div className="modal-dialog">
            <div className="modal-content p-3 rounded">
              <button
                className="btn-close ms-auto"
                onClick={() => setShowPopup(false)}></button>

              <div className="text-center">
                <img
                  src={candidate.symbol}
                  alt="candidate"
                  className="rounded-circle border border-3"
                  style={{ width: "90px", height: "90px" }}
                />

                <h4 className="mt-3">{candidate.name}</h4>

                <p className="mt-1">
                  चिन्ह : <b> कमळ </b> <br />
                </p>

                <div className="d-flex align-items-center justify-content-center bg-success bg-opacity-25 p-2 rounded mt-2">
                  <span
                    className="me-2"
                    style={{ color: "green", fontSize: "22px" }}>
                    ✔
                  </span>
                  <span>तुमचे मत नोंदवले गेले आहे.</span>
                </div>

                <p className="fw-bold mt-2">
                  आपण {candidate.name} यांना मत दिले आहे.
                </p>
              </div>
              <button
                className="btn btn-success w-100 d-flex align-items-center justify-content-center gap-2 rounded-3 py-2 mt-3"
                onClick={() => {
                  const link = "https://sarika-sirsat.netlify.app/";
                  const message = `Check this link: ${link}`;
                  const whatsappURL = `https://wa.me/?text=${encodeURIComponent(
                    message
                  )}`;

                  window.open(whatsappURL, "_blank");
                }}>
                <i className="bi bi-whatsapp"></i> शेअर करा
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VotingTable;
