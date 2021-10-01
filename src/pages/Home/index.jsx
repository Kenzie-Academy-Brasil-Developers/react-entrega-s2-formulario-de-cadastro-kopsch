import { useParams, useHistory } from "react-router-dom";
import { Typography, makeStyles } from "@material-ui/core";
import gif from "../../assets/img/gf.gif";

const Home = () => {
  const history = useHistory();
  const useStyles = makeStyles({
    img: {
      width: "200px",
      position: "absolute",
      top: "20%",
      zIndex: -5,
      marginLeft: "auto",
      marginRight: "auto",
      left: 0,
      right: 0,
      textAlign: "center",
    },

    title: {
      fontSize: "6.5vw",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      padding: "15px",
      fontStyle: "italic",
      textAlign: "center",
      borderRadius: "40px",
      color: "rgba(0, 163, 169, 0.75)",
      border: "5px dashed rgba(0, 163, 169, 0.75)",
    },
    divLogout: {
      cursor: "pointer",
      textAlign: "center",
      color: "rgba(0, 163, 169, 0.75)",
      margin: "20px 0",
      fontSize: "20pt",
    },
  });

  const classes = useStyles();
  const { user } = useParams();
  return (
    <div>
      <Typography variant="h2" className={classes.title}>
        Seja bem vindo, {user}
      </Typography>
      <img className={classes.img} src={gif} alt="girlfriend"></img>
      <div className={classes.divLogout} onClick={() => history.push("/")}>
        <span>HOME</span>
      </div>
    </div>
  );
};

export default Home;
