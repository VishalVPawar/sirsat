import { useState } from "react";

const VotingTable = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<any>(null);
  const [clickedRow, setClickedRow] = useState<number | null>(null);

  // Global CSS for background in all table cells
  const globalStyle = `
    .section1 td, .section1 th { background-color: #ffe5e5 !important; }
    .section2 td, .section2 th { background-color: #ffffff !important; }
    .section3 td, .section3 th { background-color: #e5f2ff !important; }
  `;

  // Candidate Data
  const nirmal = { name: "निर्मळ रामचंद्र अंबादासराव", symbol: "/logo.jpg", photo: "/nirmal.jpeg", audio: "/nirmal voice.mpeg" };
  const sirsat = { name: "सिरसट सारिका संतोष", symbol: "/logo.jpg", photo: "/sirsat.jpeg", audio: "/sirsat voice.mpeg" };
  const shingare = { name: "शिनगारे अतुल सर्जेराव", symbol: "/logo.jpg", photo: "/shingare.jpeg", audio: "/shingare voice.mpeg" };

  const playAndOpen = (candidate: any, rowIndex: number) => {
    setSelectedCandidate(candidate);
    setClickedRow(rowIndex);

    const audio = new Audio(candidate.audio);
    audio.play();

    setTimeout(() => setShowPopup(true), 3000);
  };

  // Uniform Button with dot
  const VoteBtn = ({ onClick, rowIndex }: any) => (
    <div className="d-flex align-items-center justify-content-between gap-1">
      <span
        className="d-inline-block rounded-circle"
        style={{
          width: "12px",
          height: "12px",
          backgroundColor: clickedRow === rowIndex ? "green" : "red",
        }}
      ></span>
      <button className="btn btn-primary px-2 py-1" onClick={onClick}>
        मत&nbsp;द्या
      </button>
    </div>
  );

  return (
    <div className="container mt-2">
      {/* Global CSS */}
      <style>{globalStyle}</style>

      <img src="/banner.jpeg" className="w-100 h-auto rounded-3" />

      <div className="text-center bg-primary text-white mt-2 p-2 rounded">
        <strong>मतदान दिनांक ०२ डिसेंबर २०२५ स.०७:3० ते सायं.०५:3०</strong>
      </div>

      {/* ============================ SECTION 1 – RED ============================ */}
      <table className="table table-bordered text-center align-middle mt-3 section1">
        <thead>
          <tr style={{ fontSize: "12px" }}>
            <th>अ.क्र</th>
            <th>उमेदवाराचे नाव</th>
            <th>निवडणूक चिन्ह</th>
            <th>बटन</th>
          </tr>
        </thead>
        <tbody>
          <tr className="fw-bold bg-danger bg-opacity-50">
            <td colSpan={4} style={{ fontSize: "12px" }}>
              नगराध्यक्ष पदाचे उमेदवार
            </td>
          </tr>

          {[1, 2, 3].map((n) => (
            <tr key={n}>
              <td>{n}.</td>
              <td></td>
              <td></td>
              <td>
                <VoteBtn rowIndex={n} onClick={() => setClickedRow(n)} />
              </td>
            </tr>
          ))}

          {/* Row 4 – Nirmal */}
          <tr>
            <td>4.</td>
            <td className="px-1 d-flex justify-content-between align-items-center">
              <b style={{ fontSize: "10px" }}>{nirmal.name}</b>
              <img src={nirmal.photo} width="30" height="30" className="rounded-circle" />
            </td>
            <td>
              <img src={nirmal.symbol} width="40" height="40" />
            </td>
            <td>
              <VoteBtn rowIndex={4} onClick={() => playAndOpen(nirmal, 4)} />
            </td>
          </tr>

          <tr>
            <td>5.</td>
            <td></td>
            <td></td>
            <td>
              <VoteBtn rowIndex={5} onClick={() => setClickedRow(5)} />
            </td>
          </tr>

          <tr>
            <td>6.</td>
            <td className="fw-bold text-danger">NOTA</td>
            <td></td>
            <td>
              <VoteBtn rowIndex={6} onClick={() => setClickedRow(6)} />
            </td>
          </tr>
        </tbody>
      </table>

      {/* ============================ SECTION 2 – WHITE ============================ */}
      <table className="table table-bordered text-center align-middle mt-3 section2">
        <tbody>
          <tr className="fw-bold bg-secondary bg-opacity-25">
            <td colSpan={4} style={{ fontSize: "12px", color: "red" }}>
              प्रभाग क्र.२ (अ) अनुसुचित जाती महिला नगरसेवक पदाचे उमेदवार
            </td>
          </tr>

          {[1, 2, 3, 4].map((n) => (
            <tr key={n}>
              <td>{n}.</td>
              <td></td>
              <td></td>
              <td>
                <VoteBtn rowIndex={100 + n} onClick={() => setClickedRow(100 + n)} />
              </td>
            </tr>
          ))}

          {/* Row 5 – Sirsat */}
          <tr>
            <td>5.</td>
            <td className="px-1 d-flex justify-content-between align-items-center">
              <b style={{ fontSize: "10px" }}>{sirsat.name}</b>
              <img src={sirsat.photo} width="30" height="30" className="rounded-circle" />
            </td>
            <td>
              <img src={sirsat.symbol} width="40" height="40" />
            </td>
            <td>
              <VoteBtn rowIndex={105} onClick={() => playAndOpen(sirsat, 105)} />
            </td>
          </tr>

          <tr>
            <td>6.</td>
            <td className="fw-bold text-danger">NOTA</td>
            <td></td>
            <td>
              <VoteBtn rowIndex={106} onClick={() => setClickedRow(106)} />
            </td>
          </tr>
        </tbody>
      </table>

      {/* ============================ SECTION 3 – LIGHT BLUE ============================ */}
      <table className="table table-bordered text-center align-middle mt-3 section3">
        <tbody>
          <tr className="fw-bold bg-info bg-opacity-50">
            <td colSpan={4} style={{ fontSize: "12px", color: "red" }}>
              प्रभाग क्र.३ (२) सर्वसाधारण नगरसेवक पदाचे उमेदवार
            </td>
          </tr>

          <tr>
            <td>1.</td>
            <td></td>
            <td></td>
            <td>
              <VoteBtn rowIndex={200 + 1} onClick={() => setClickedRow(200 + 1)} />
            </td>
          </tr>

          <tr>
            <td>2.</td>
            <td className="px-1 d-flex justify-content-between align-items-center">
              <b style={{ fontSize: "10px" }}>{shingare.name}</b>
              <img src={shingare.photo} width="30" height="30" className="rounded-circle" />
            </td>
            <td>
              <img src={shingare.symbol} width="40" height="40" />
            </td>
            <td>
              <VoteBtn rowIndex={202} onClick={() => playAndOpen(shingare, 202)} />
            </td>
          </tr>

          {[3, 4, 5].map((n) => (
            <tr key={n}>
              <td>{n}.</td>
              <td></td>
              <td></td>
              <td>
                <VoteBtn rowIndex={200 + n} onClick={() => setClickedRow(200 + n)} />
              </td>
            </tr>
          ))}

          <tr>
            <td>6.</td>
            <td className="fw-bold text-danger">NOTA</td>
            <td></td>
            <td>
              <VoteBtn rowIndex={206} onClick={() => setClickedRow(206)} />
            </td>
          </tr>
        </tbody>
      </table>

      {/* ============================ POPUP ============================ */}
      {showPopup && selectedCandidate && (
        <div
          className="modal fade show d-flex align-items-center justify-content-center"
          style={{ display: "block", background: "rgba(0,0,0,0.5)", minHeight: "100vh" }}
        >
          <div className="modal-dialog">
            <div className="modal-content p-3 rounded">
              <button className="btn-close ms-auto" onClick={() => setShowPopup(false)}></button>

              <div className="text-center">
                <img
                  src={selectedCandidate.symbol}
                  className="rounded-circle border border-3"
                  style={{ width: "90px", height: "90px" }}
                />
                <h4 className="mt-3">{selectedCandidate.name}</h4>

                <p className="mt-1">
                  चिन्ह : <b>कमळ</b>
                </p>

                <div className="d-flex align-items-center justify-content-center bg-success bg-opacity-25 p-2 rounded mt-2">
                  <span className="me-2" style={{ color: "green", fontSize: "22px" }}>
                    ✔
                  </span>
                  <span>तुमचे मत नोंदवले गेले आहे.</span>
                </div>
              </div>

              <button
                className="btn btn-success w-100 mt-3"
                onClick={() => {
                  const link = "https://sirsat.netlify.app";
                  const msg = `Check this link: ${link}`;
                  window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank");
                }}
              >
                शेअर करा
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VotingTable;
