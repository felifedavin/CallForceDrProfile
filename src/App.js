import "./App.css";
import React, { useState } from "react";
import ModalForm from "./component/modal/ModalForm";
import Button from "./component/Controls/Button";
import BindTable from "./component/modal/BindTable";

function App() {
  const [addModalState, setAddModalState] = useState(false);
  const [primaryData, setPrimaryData] = useState({
    role: "Doctor",
    startTime: "09:00",
    endTime: "09:00",
  });
  const [timeData, setTimeData] = useState([
    {
      time: "09:00",
      isdocavailabel: false,
      isassistantavailable: false,
      ishygienistavailable: false,
      isbinddocData: false,
      isbindassData: false,
      isbindhybData: false,
      doctorcellmerge: 0,
      assistantroemerge: 0,
      hygienistrowmerge: 0,
    },
    {
      time: "10:00",
      isdocavailabel: false,
      isassistantavailable: false,
      ishygienistavailable: false,
      isbinddocData: false,
      isbindassData: false,
      isbindhybData: false,
      doctorcellmerge: 0,
      assistantroemerge: 0,
      hygienistrowmerge: 0,
    },
    {
      time: "11:00",
      isdocavailabel: false,
      isassistantavailable: false,
      ishygienistavailable: false,
      isbinddocData: false,
      isbindassData: false,
      isbindhybData: false,
      doctorcellmerge: 0,
      assistantroemerge: 0,
      hygienistrowmerge: 0,
    },
    {
      time: "12:00",
      isdocavailabel: false,
      isassistantavailable: false,
      ishygienistavailable: false,
      isbinddocData: false,
      isbindassData: false,
      isbindhybData: false,
      doctorcellmerge: 0,
      assistantroemerge: 0,
      hygienistrowmerge: 0,
    },
    {
      time: "13:00",
      isdocavailabel: false,
      isassistantavailable: false,
      ishygienistavailable: false,
      isbinddocData: false,
      isbindassData: false,
      isbindhybData: false,
      doctorcellmerge: 0,
      assistantroemerge: 0,
      hygienistrowmerge: 0,
    },
    {
      time: "14:00",
      isdocavailabel: false,
      isassistantavailable: false,
      ishygienistavailable: false,
      isbinddocData: false,
      isbindassData: false,
      isbindhybData: false,
      doctorcellmerge: 0,
      assistantroemerge: 0,
      hygienistrowmerge: 0,
    },
    {
      time: "15:00",
      isdocavailabel: false,
      isassistantavailable: false,
      ishygienistavailable: false,
      isbinddocData: false,
      isbindassData: false,
      isbindhybData: false,
      doctorcellmerge: 0,
      assistantroemerge: 0,
      hygienistrowmerge: 0,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const start = parseInt(primaryData.startTime);
    const end = parseInt(primaryData.endTime);
    const different = end - start + 1;
    var iserror = false;

    if (primaryData.role.toLowerCase() == "doctor") {
      var flterData = timeData.filter(
        (item) =>
          !item.isbinddocData &&
          item.time >= primaryData.startTime &&
          item.time <= primaryData.endTime
      );

      if (flterData.length != different) {
        iserror = true;
        alert("Doctor is busy in this time");
      }
    }

    if (primaryData.role.toLowerCase() == "assistant") {
      var flterData = timeData.filter(
        (item) =>
          !item.isbindassData &&
          item.time >= primaryData.startTime &&
          item.time <= primaryData.endTime
      );

      if (flterData.length != different) {
        iserror = true;
        alert("Assistant is busy in this time!");
      }
    }

    if (primaryData.role.toLowerCase() == "hygienist") {
      var flterData = timeData.filter(
        (item) =>
          !item.isbindhybData &&
          item.time >= primaryData.startTime &&
          item.time <= primaryData.endTime
      );

      if (flterData.length != different) {
        iserror = true;
        alert("Hygienist is busy in this time!");
      }
    }

    if (!iserror) {
      timeData.map((item) => {
        if (primaryData.role.toLowerCase() == "doctor") {
          if (item.time == primaryData.startTime && different >= 0) {
            item.isdocavailabel = true;
            item.doctorcellmerge = different;
          }
          if (item.time >= primaryData.startTime && item.time <= primaryData.endTime) {
            item.isbinddocData = true;
          }
        }

        if (primaryData.role.toLowerCase() == "assistant") {
          if (item.time == primaryData.startTime && different >= 0) {
            item.isassistantavailable = true;
            item.assistantroemerge = different;
          }
          if (item.time >= primaryData.startTime && item.time <= primaryData.endTime) {
            item.isbindassData = true;
          }
        }

        if (primaryData.role.toLowerCase() == "hygienist") {
          if (item.time == primaryData.startTime && different >= 0) {
            item.ishygienistavailable = true;
            item.hygienistrowmerge = different;
          }
          if (item.time >= primaryData.startTime && item.time <= primaryData.endTime) {
            item.isbindhybData = true;
          }
        }
      });

      setTimeData(timeData);
    }
    setAddModalState(false);
  };

  const addBtnClick = () => {
    setAddModalState(true);
  };

  return (
    <div className="App">
      <div className="availability-section">
        <Button
          text="ADD AVAILABILITY"
          variant="outlined"
          onClick={addBtnClick}
        />
      </div>

      <ModalForm
        formdata={{
          addModalState,
          primaryData,
          setPrimaryData,
          handleSubmit,
          setAddModalState,
        }}
      />
      
      <BindTable tabledata = {{timeData}} />
    </div>
  );
}

export default App;
