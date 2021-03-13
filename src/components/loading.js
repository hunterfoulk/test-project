import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
            width: '100%',
            justifyContent: "center",
            color: "black",
            marginTop: "50px",
            '& > * + *': {
                marginLeft: theme.spacing(2),
            },
        },
    }),
);

export default function CircularIndeterminate() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress style={{ color: "black" }} />

        </div>
    );
}