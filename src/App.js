import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import theme from './theme';
import "./theme/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "@fontsource/pacifico";
import MainConatainer from './components/MainContainer';
import { Provider } from 'react-redux';
import { persistor, store } from './store';

import { Flex } from '@chakra-ui/layout';
import Sidebar from './components/sidebar/Sidebar';

import { PersistGate } from 'redux-persist/integration/react';


const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header/>
          <Flex 
            direction={{base: 'column', md: 'row'}}
            gridGap={10} 
          >
            <MainConatainer/>
            <Sidebar />
          </Flex>
        </PersistGate>
      </Provider>
    </ChakraProvider>
  )
}

export default App;
