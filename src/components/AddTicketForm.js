import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Typography } from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
  root: {
    "& input": { color: "green" },
    "& label": {
      color: "#2b386f",
    },
  },
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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

export const AddTicketForm = () => {
  const classes = useStyles();

  const validationSchema = yup.object({
    subject: yup.string().required("Enter  a Subject"),
    issuefoundat: yup
       .date()
      .required("Enter Issue Found At Date"),
    details: yup.string("Enter Details"),
  });
  const formik = useFormik({
    initialValues: {
      subject: "",
      issuefoundat: "",
      details: "",
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
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" color="textPrimary">
          Add New Ticket
          </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            name="subject"
            label="Subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
            error={formik.touched.subject && Boolean(formik.errors.subject)}
            helperText={formik.touched.subject && formik.errors.subject}
          />
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            type="date"
            name="issuefoundat"
            value={formik.values.issuefoundat}
            onChange={formik.handleChange}
            error={
              formik.touched.issuefoundat && Boolean(formik.errors.issuefoundat)
            }
            helperText={
              formik.touched.issuefoundat && formik.errors.issuefoundat
            }
          />
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            name="details"
            label="Details"
            multiline
            rows={4}
            value={formik.values.details}
            onChange={formik.handleChange}
            error={formik.touched.details && Boolean(formik.errors.details)}
            helperText={formik.touched.details && formik.errors.details}
          />
          <Button
            type="submit"
            variant="contained"
            className={classes.submit}
            fullWidth
          >
            Add New Ticket
          </Button>
        </form>
      </div>
    </>
  );
};
