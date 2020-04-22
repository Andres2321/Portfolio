import React from 'react';
import Projects from './components/Projects'
import './styles/landing.css'
import './styles/reset.css'
import './styles/aboutme.css'
import './styles/projects.css'
import './styles/page-transition.css'
import './styles/global.css'
import './styles/footer.css'
import './styles/header.css'
import './styles/header2.css'
import Landing from './components/Landing'
import { Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

function App() {
  return (
    <>
      <Route render={({location}) =>
        (
          <TransitionGroup>
            <CSSTransition
              // creates key on css transition element 
              // render both css transition groups when switching between components
              key={location.key}
              timeout={600}
              classNames='fade'
            >

              <Switch location={location}>
                <Route
                  exact
                  path='/'
                  component={Landing}
                />

                <Route
                  exact
                  path='/projects'
                  component={Projects}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </>
  );
}

export default App;
