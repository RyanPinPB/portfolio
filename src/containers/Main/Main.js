import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Intro from '../../components/Home/Home';
import Projects from '../../components/Projects/Projects';
import MrRobot from '../../components/Projects/Project/MrRobot';
import Skills from '../../components/Skills/Skills';
import Experience from '../../components/Experience/Experience';
import Background from '../../components/Background/Background';
import Contact from '../../components/Contact/Contact';
import Footer from '../Footer/Footer';
import classes from './Main.module.scss';

const Main = (props) => {
  return (
    <main className={classes.Main} width={props.width}>
      <Switch>
        <Route path='/projects/robot' component={MrRobot} />
        <Route path='/projects' component={Projects} />
        <Route path='/skills' component={Skills} />
        <Route path='/experience' component={Experience} />
        <Route path='/background' component={Background} />
        <Route path='/contact' component={Contact} />
        <Route path='/' component={Intro} />
        <Route render={() => <h1>Not found</h1>} />
      </Switch>
      <Footer />
    </main>
  );
};

export default Main;
