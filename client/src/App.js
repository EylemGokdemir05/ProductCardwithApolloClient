import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

const client=new ApolloClient({
  uri:'http://localhost:5000/'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ProductList} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
