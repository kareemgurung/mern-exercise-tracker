import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './navbar.component';
import ExerciseList from "./exercise-list.component";
import EditExercise from "./edit-exercise.component";
import CreateExercise from "./create-exercise.component";
import CreateUser from "./create-user.component";

function App() {
    return (
      <Router>
        <Navbar />
        <br />
        <div className="container">
          <Route path="/" exact component={ExerciseList} />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/user" component={CreateUser} />
        </div>
      </Router>
    );
}

export default App;