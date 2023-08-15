// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ItemList from './ItemList';
import DetailPage from './DetailPage';

const items = [
  { id: 1, title: 'Item 1', description: 'Deskripsi item 1' },
  // ...
];

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={() => <ItemList items={items} />} />
      <Route path="/detail/:id" component={DetailPage} />
    </Router>
  );
};

export default App;
