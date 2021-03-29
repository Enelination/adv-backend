import { useState, useEffect } from "react";
import axios from "axios";
import "./PrivateScreen.css";

// const PrivateScreen = () => {
//   const [error, setError] = useState("");
//   const [privateData, setPrivateData] = useState("");

//   useEffect(() => {
//     if (!localStorage.getItem("authToken")) {
//       history.push("/");
//     }
//     const fetchPrivateDate = async () => {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//         },
//       };

//       try {
//         const { data } = await axios.get("/api/private", config);
//         setPrivateData(data.data);
//       } catch (error) {
//         localStorage.removeItem("authToken");
//         setError("You are not authorized please login");
//       }
//     };

//     fetchPrivateDate();
//   }, [history]);

//   const logoutHandler = () => {
//     localStorage.removeItem("authToken");
//     history.push("/login");
//   };
//   return error ? (
//     <span className="error-message">{error}</span>
//   ) : (
//     <>
//       <div style={{ background: "green", color: "whitesmoke" }}>
//         {privateData}
//       </div>
//       <button onClick={logoutHandler}>Logout</button>
//     </>
//   );
// };

const PrivateScreen = () => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, []);
  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <div>{privateData}</div>
  );
};

export default PrivateScreen;
