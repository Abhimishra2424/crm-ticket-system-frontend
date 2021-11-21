import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
} from "@material-ui/core";
import React, { useState } from "react";

const PasswordComponent = ({ fromSwitch }) => {
  const [email, setEmail] = useState("");

  const updatepassword = () => {
    if (email === "") {
      alert("Please enter your email");
    } else {
      alert("Password reset link has been sent to your email");
    }
    // api call to send password reset link to user email
    console.log(email);
  };

  const paperstyle = {
    padding: 40,
    height: "30vh",
    width: 600,
    margin: "20px auto",
  };
  return (
    <Grid>
      <Paper elevation={2} style={paperstyle}>
        <Typography variant="h5" align="center">
          Reset Password
        </Typography>
        <TextField
          style={{ margin: 8 }}
          placeholder="Email"
          fullWidth
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          variant="outlined"
          type="email"
        />
        <Button
          variant="contained"
          color="secondary"
          style={{ marginLeft: 7 }}
          onClick={updatepassword}
        >
          Send
        </Button>
        <Grid container>
          <Grid item xs style={{ textAlign: "center", cursor: "pointer" }}>
            <Link
              to="/forgotpassword"
              //   component={RouterLink}
              color="secondary"
              variant="body2"
              onClick={() => fromSwitch("login")}
            >
              Login
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default PasswordComponent;
