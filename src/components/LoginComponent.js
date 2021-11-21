import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { CssBaseline } from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
  root: {
    "& input": { color: "green" },
    "& label": {
      color: "#2b386f",
    },
  },
  formbox: {
    boxShadow: "0px 0px 10px #2b386f",
  },
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.primary.main,
    color: "#ffffff",
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: 17,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));

const LoginComponent = ({ fromSwitch }) => {
  const classes = useStyles();
  //   const history = useNavigate();
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Todo call api
      console.log("values", values);
    },
  });

  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="xs" className={classes.formbox}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h4" color="secondary">
            CLIENT LOGIN
          </Typography>
          <form className={classes.form} onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              name="password"
              label="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button
              type="submit"
              variant="contained"
              className={classes.submit}
              fullWidth
            >
              Login
            </Button>
            <Grid container style={{ textAlign: "center", cursor: "pointer" }}>
              <Grid item xs>
                <Link
                  to="/forgotpassword"
                  //   component={RouterLink}
                  color="secondary"
                  variant="body2"
                  onClick={() => fromSwitch("forgot")}
                >
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
};

export default LoginComponent;
