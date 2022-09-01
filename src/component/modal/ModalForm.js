import React, { useState } from "react";
import "./modal.css";
import { Dialog, DialogContent, makeStyles } from "@material-ui/core";
import Button from "../Controls/Button";
import Select from "../Controls/Select";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    background: "#C9D0D7",
    position: "absolute",
    top: theme.spacing(2),
    width: "500px",
    borderRadius: "20px",
  },
  MuiFormControlRoot: {
    padding: "0 !important",
  },
  root: {
    boxShadow: "none",
    display: "block",
  },
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  MuiFormControlSelect: {},
}));

const ModalForm = ({ formdata }) => {
  const {
    addModalState,
    primaryData,
    setPrimaryData,
    handleSubmit,
    setAddModalState,
  } = formdata;
  const classes = useStyles();
  const [roleOption, setRoleOptions] = useState([
    "Doctor",
    "Assistant",
    "Hygienist",
  ]);

  const [startTimeOption, setStartTimeOption] = useState([
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
  ]);
  const [endTimeOption, setEndTimeOption] = useState([
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
  ]);

  const cancelSubmit = () => {
    setAddModalState(false);
  };
  return (
    <>
      <Dialog
        open={addModalState}
        maxWidth="md"
        classes={{ paper: classes.dialogWrapper }}
      >
        <DialogContent className={classes.MuiFormControlRoot}>
          <form>
            <Select
              className={classes.MuiFormControlSelect}
              label="Select role"
              id="role"
              name="role"
              value={primaryData.role}
              onChange={(e) => {
                setPrimaryData({ ...primaryData, role: e.target.value });
                console.log(primaryData);
              }}
              options={roleOption}
            />

            <Select
              className={classes.MuiFormControlSelect}
              label="Select start time"
              id="startTime"
              name="startTime"
              value={primaryData.startTime}
              onChange={(e) => {
                setPrimaryData({ ...primaryData, startTime: e.target.value });
                console.log(primaryData);
              }}
              options={startTimeOption}
            />

            <Select
              label="Select end time"
              id="endTime"
              name="endTime"
              value={primaryData.endTime}
              onChange={(e) => {
                setPrimaryData({
                  ...primaryData,
                  endTime: e.target.value,
                  available: true,
                });
                console.log(primaryData);
              }}
              options={endTimeOption}
            />

            <Button text="Save" variant="outlined" onClick={handleSubmit} />

            <Button
              text="Cancel"
              variant="outlined"
              color="secondary"
              onClick={cancelSubmit}
            />
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ModalForm;
