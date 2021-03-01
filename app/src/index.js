import React from 'react';
import ReactDOM from 'react-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    '@global': {
        '*, *:before, *:after': {
            boxSizing: 'border-box'
        },
        'html': {
            height: '100%'
        },
        'body': {
            height: '100%',
            margin: '0'
        },
        '#root': {
            height: '100%'
        }
    },
    // --- please fill in style bellow --------------------------------------->
    page: {
        minWidth: '100wh',
        minHeight: '100vh'
    },
    blocksHolder: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        minWidth: '100wh',
        minHeight: '100vh'
    },
    block: {
        alignSelf: 'center',
        width: '150px',
        height: '150px'
    },
    '@media screen and (max-width: 600px)': {
        blocksHolder: {
            flexDirection: 'column'
        }
    }
});

function App() {
    const classes = useStyles()
    const colors = ['red', 'green', 'blue'];

    return <div className={classes.page}>
        <div className={classes.blocksHolder}>
            {[...Array(3)].map((e, i) => <div className={classes.block} key={i} style={{ backgroundColor: colors[i] }} />)}
        </div>
    </div>;
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
