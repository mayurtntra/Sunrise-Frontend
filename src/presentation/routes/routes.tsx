import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Layout from '../modules/layout/layout';
import ListTodo from '../modules/todo/listTodo/listTodo';
import User from '../modules/users/user';

function RoutesData() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<User />} />
        <Route path="/todo-list" element={<ListTodo />} />
        <Route path="/layout" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesData;
