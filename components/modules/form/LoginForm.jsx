import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { useContext } from "react";
import Router from "next/router";

const LoginForm = () => {
  const classes = useStyles();
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({
    username: "",
    password: "",
    errorMessage: null,
  });
  const [isFormInvalid, setIsFormInvalid] = useState({
    username: false,
    password: false,
  });

  function handleSubmit(event) {
    event.preventDefault();
    setIsFormInvalid({
      ...isFormInvalid,
      username: event.target.username.value ? false : true,
      password: event.target.password.value ? false : true,
    });
    if (event.target.username.value && event.target.password.value) {
      login({
        user: form.username,
        token: "abc123",
      });
      Router.push("/");
    }
  }

  const updateField = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setIsFormInvalid({
      ...isFormInvalid,
      [e.target.name]: e.target.value ? false : true,
    });
  };

  return (
    <>
      <form className={classes.container} onSubmit={handleSubmit}>
        <h1>เข้าสู่ระบบ</h1>
        <div>
          <h3>ชื่อผู้ใช้งาน</h3>
          <TextField
            id="form-login-username"
            InputProps={{
              className: classes.input,
            }}
            variant="outlined"
            fullWidth={true}
            value={form.username}
            name="username"
            onChange={updateField}
            error={isFormInvalid.username}
            helperText={isFormInvalid.username && `**โปรดกรอก "ชื่อผู้ใช้งาน"`}
          />
        </div>
        <div>
          <h3>รหัสผ่าน</h3>
          <TextField
            id="form-login-password"
            InputProps={{
              className: classes.input,
            }}
            variant="outlined"
            type="password"
            fullWidth={true}
            value={form.password}
            name="password"
            onChange={updateField}
            error={isFormInvalid.password}
            helperText={isFormInvalid.password && `**โปรดกรอก "รหัสผ่าน"`}
          />
        </div>
        <Button
          id="sumbit-login"
          variant="contained"
          color="primary"
          disableElevation
          fullWidth={true}
          type="submit"
        >
          <h3>เข้าสู่ระบบ</h3>
        </Button>
        <h3 id="forgot-password">ลืมรหัสผ่าน ? / ต้องการสมัครใช้งาน</h3>
      </form>
    </>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    "& h1": {
      marginBottom: "3rem",
      textAlign: "center",
    },
    "& #sumbit-login": {
      marginTop: "3rem",
      height: "56px",
    },
    "& #forgot-password": {
      textDecoration: "underline",
      textAlign: "right",
    },
  },
  input: {
    background: "white",
  },
}));

export default LoginForm;
