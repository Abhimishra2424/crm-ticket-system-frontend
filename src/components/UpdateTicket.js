import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { useFormik } from "formik";
import * as yup from "yup";

export const UpdateTicket = () => {
  const validationSchema = yup.object({
    reply: yup.string().required("Enter your Reply"),
  });
  const formik = useFormik({
    initialValues: {
      reply: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Todo call api
      console.log("values", values);
    },
  });

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          name="reply"
          label="Reply"
          multiline
          rows={4}
          value={formik.values.reply}
          onChange={formik.handleChange}
          error={formik.touched.reply && Boolean(formik.errors.reply)}
          helperText={formik.touched.reply && formik.errors.reply}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          submit
        </Button>
      </form>
    </Container>
  );
};
