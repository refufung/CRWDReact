import React, { Component } from 'react';

// import { MuiThemeProvider } from '@material-ui/core/styles';
// import { createTheme } from '@material-ui/core/styles'
// import blue from '@material-ui/core/colors/blue';

import { connect } from 'react-redux';
import { fetchData } from 'store/actions/actions';

// const theme = createTheme({
//     palette: {
//         secondary: blue
//     },
//     typography: {
//         useNextVariants: true,
//         fontFamily: ['Roboto', 'sans-serif'],
//         fontSize: 12
//     }
// });

const mapStateToProps = (state) => {
    return {
       sessionDataJSON: state.sessionDataJSON
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchData())
    }
};

class SessionInfo extends Component {
    componentDidMount() {
        console.log('Initialization...');
        this.props.fetchData();
    }

    render() {
        return (
            <>
                <div>{this.props.sessionDataJSON}</div>
            </>
        )
    }
}

// const RequestEnquiry = (props) => {
//   React.useEffect(() => {
//     props.fetchData();
//   }, []);
//   return (
//     <>
//       <div>{props.sessionDataJSON}</div>
//     </>
//   );
// };

export default connect(mapStateToProps, mapDispatchToProps)(SessionInfo);
