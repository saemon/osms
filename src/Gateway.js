import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class Gateway  extends Component{
   render(){
     return (
       <div>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <AppBar title="My AppBar" />
        </MuiThemeProvider>
        <h1>abc</h1>

        </div>
     );
   }
}

export default Gateway;
