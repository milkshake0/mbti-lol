// import { Container, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import Box from "@material-ui/core/Box";

export const useStyles = makeStyles({
  wrap: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    background: "#eee",
  },
  container: {
    position: "relative",
    alignSelf: "center",
    // border: "1px solid red",
    width: "500px",
    height: "600px",
    // textAlign: "center",
    background: "#fff",
    padding: 0,
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    lineHeight: "2.5rem",
  },
  subtitle: {
    fontSize: "18px",
  },
  button: {
    width: "100%",
    background: "#2063f9",
    "&:hover": {
      background: "#1455e3",
    },
    color: "#fff",
    fontSize: "18px",
    padding: 0,
  },
  padding8: {
    padding: "8px",
    marginTop: "8px",
  },
});
