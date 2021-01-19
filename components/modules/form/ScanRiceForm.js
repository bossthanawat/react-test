import { Grid, MenuItem, Button } from "@material-ui/core";
import Router from 'next/router';
import {
  ValidatorForm,
  SelectValidator,
} from "react-material-ui-form-validator";
import { useEffect, useState } from "react";
import service from "../../../services"
const ScanRiceForm = () => {
  const [typeRice, setTypeRice] = useState("");
  const [standardRice, setStandardRice] = useState("");
  const [formRice, setFormRice] = useState("");
  const [listTypeRice, setListTypeRice]  = useState([]);
  const listStandardRice = [
    { id: 1, value: "ข้าวขาว 100% ชั้น 1" },
    { id: 2, value: "ข้าวขาว 100% ชั้น 2" },
    { id: 3, value: "ข้าวขาว 100% ชั้น 3" },
  ];
  const listFormRice = [{ id: 1, value: "001" }];

  const handleSubmit = () => {
    // your submit logic
  };
  const handleBack = () => {
    // your Back logic
    Router.push("/")
  };

  useEffect(() => {
    service.getTypeRice().then(res=>setListTypeRice(res.data))
  }, [])

  useEffect(() => {
    // listStandardRice
  }, [typeRice])

  return (
    <>
      <ValidatorForm onSubmit={handleSubmit}>
        <Grid container spacing={2} style={{ width: "500px" }}>
          <Grid item xs={12}>
            <h3>ประเภทข้าว</h3>
            <SelectValidator
              variant="outlined"
              fullWidth
              id="select-type-rice"
              value={typeRice}
              validators={["required"]}
              errorMessages={["โปรดเลือกประเภทข้าว"]}
              onChange={(event) => setTypeRice(event.target.value)}
            >
              {listTypeRice.map((i) => (
                <MenuItem value={i.id} key={i.id}>
                  {i.value}
                </MenuItem>
              ))}
            </SelectValidator>
          </Grid>
          <Grid item xs={12}>
            <h3>มาตรฐาน</h3>
            <SelectValidator
              variant="outlined"
              fullWidth
              id="select-standard-rice"
              value={standardRice}
              onChange={(event) => setStandardRice(event.target.value)}
              validators={["required"]}
              errorMessages={["โปรดเลือกมาตรฐาน"]}
            >
              {listStandardRice.map((i) => (
                <MenuItem value={i.id} key={i.id}>
                  {i.value}
                </MenuItem>
              ))}
            </SelectValidator>
          </Grid>
          <Grid item xs={12}>
            <h3>แบบฟอร์ม</h3>
            <SelectValidator
              variant="outlined"
              fullWidth
              id="select-form-rice"
              value={formRice}
              onChange={(event) => setFormRice(event.target.value)}
              validators={["required"]}
              errorMessages={["โปรดเลือกแบบฟอร์ม"]}
            >
              {listFormRice && listFormRice.map((i) => (
                <MenuItem value={i.id} key={i.id}>
                  {i.value}
                </MenuItem>
              ))}
            </SelectValidator>
          </Grid>
          <Grid item xs={6} style={{ marginTop: 16 }}>
            <Button
              variant="outlined"
              color="primary"
              disableElevation
              fullWidth={true}
              onClick={handleBack}
            >
              <h3>กลับ</h3>
            </Button>
          </Grid>
          <Grid item xs={6} style={{ marginTop: 16 }}>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              fullWidth={true}
              type="submit"
            >
              <h3>สแกนข้าว</h3>
            </Button>
          </Grid>
        </Grid>
      </ValidatorForm>
    </>
  );
};

export default ScanRiceForm;
