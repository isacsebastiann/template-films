// AppRoutes.js o cualquier otro archivo que prefieras para configurar tus rutas

import React from 'react';
import { createRouter } from 'expo-router';
import Tab1 from '../app/tabs/tab1';
import Tab2 from '../app/tabs/tab2';
import Tab3 from '../app/tabs/tab3';

const Router = createRouter(() => (
  <Router.Stack>
    <Router.Screen name="home" component={Home} />
    <Router.Group path="/tabs">
      <Router.Screen name="tab1" component={Tab1} />
      <Router.Screen name="tab2" component={Tab2} />
      <Router.Screen name="tab3" component={Tab3} />
    </Router.Group>
  </Router.Stack>
));

export default Router;
