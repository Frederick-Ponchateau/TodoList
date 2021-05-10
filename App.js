/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, { Fragment, Component } from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   View,
   Button,
   Text
 } from 'react-native';

 import {Provider} from 'react-redux';
 import store from './redux/store';
 import AffCount from './components/AffCount';

 //import { connect } from 'react-redux';
 //import { changeCount } from './actions/counts';
 //import { bindActionCreators } from 'redux';

 
 const App =() =>{

  
     
     return (
       <Provider store={store}>
          <AffCount/> 
          <Text>
            Todo List
          </Text>
       </Provider>
     );
   
 };
 

 // export default connect(mapStateToProps, mapDispatchToProps)(App)
 export default App;