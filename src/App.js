import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './styles/main.css'
import { Navigation, Header, LandingPage, Layout, ContentLayout, About, Projects, Contact, Custom404 } from './components/index';




export const App = () => {
  return (

    <Layout>
      <Router>
        <Navigation />

        <ContentLayout>

          <Header />

          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/about" component={About} />
            {/* <Route path="/projects" component={Projects} />

              <Route path="/contact" component={Contact} />
              <Route component={Custom404} /> */}
          </Switch>
        </ContentLayout>
      </Router>


    </Layout>

  );
}

// export default App;
