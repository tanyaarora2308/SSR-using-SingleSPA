import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Footer from "./footer";
import useData from "../use-data";
import { Card, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "calc(90vh - 2px)",
    position: "relative"
  }
}));

function PokeView() {
  const { loading } = useData();
  return (
    <Router>
      <div>
        {loading && <LinearProgress color="secondary" />}
        {!loading && <div style={{ height: "4px" }} />}
        <div>
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              listStyleType: "none",
              height: "100%",
              color: "black",
              cursor: "pointer"
            }}
          >
            <li>
              <Link
                to="/pokemons"
                style={{
                  textDecoration: "none",
                  paddingLeft: "20px",
                  fontWeight: "500",
                  fontSize: "20px"
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/pokemons/about"
                style={{
                  textDecoration: "none",
                  paddingLeft: "20px",
                  fontWeight: "500",
                  fontSize: "20px"
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/pokemons/users"
                style={{
                  textDecoration: "none",
                  paddingLeft: "20px",
                  fontWeight: "500",
                  fontSize: "20px"
                }}
              >
                Users
              </Link>
            </li>
          </ul>
        </div>

        <hr />
        <Switch>
          <Route exact path="/pokemons">
            <Home />
          </Route>
          <Route path="/pokemons/about">
            <About />
          </Route>
          <Route path="/pokemons/users">
            <Users />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

function Home() {
  return (
    <Container style={{ paddingTop: "30px" }}>
      <h2>Home Page</h2>
    </Container>
  );
}

function About() {
  const classes = useStyles();
  const { loading } = useData();
  const { pokemons } = useData();
  var data = pokemons.slice(0, 28);
  var images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTateZ2CSKfKVtaR0hf21crc1JUNh4llQaQgA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkzq5bpm8xaZM2KvO-1m1rvHuXnfyaVPXDlg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4YEwei8BpWZddmIk1KAlgBSOC82jqO21tA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-DsivC04AntFbpJZpMKN_dKrhxz__mAbA5Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXRLl1jVQo-Q1a2cQQ2IOv1KKW1uaV84pIkw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0GMKP6EDaTMxoTzPmLVO-TdRdk1ylImzIg&usqp=CAU",
    "https://i.ebayimg.com/thumbs/images/g/W1wAAOSwx~9anpPx/s-l200.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Iq78GYDTb6dHKBJD46Xuj3jTXd0CA9oUDg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7K6fgKMCTAWCMNtMsjNTYbDYjesMpIat2g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7QjoVeovu1t43nQf7hlx9XopzZ2JAHL4efQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGU4MproTvJQ8tA61-8XI8SwpVbCS81GVrEg&usqp=CAU"
  ];
  return (
    <div className={classes.root}>
      {loading && <LinearProgress color="secondary" />}
      {!loading && <div style={{ height: "4px" }} />}
      <Container>
        <div>
          <Container style={{ paddingTop: "30px" }}>
            <h2>About Page</h2>
            <Row>
              {data.map((pokeman, k) => (
                <Col
                  key={k}
                  xs={12}
                  md={4}
                  lg={3}
                  style={{ paddingTop: "50px" }}
                >
                  <Card>
                    <Card.Img
                      src={images[Math.floor(Math.random() * images.length)]}
                    />
                    <Card.Body>
                      <Card.Title>{pokeman.name}</Card.Title>
                      <Card.Text>{pokeman.team_name}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
}

function Users() {
  return (
    <Container style={{ paddingTop: "30px" }}>
      <div>
        <h2>Users Page</h2>
      </div>
    </Container>
  );
}

export default function Pokemons() {
  return (
    <Router basename="/pokemons">
      <PokeView />
    </Router>
  );
}
