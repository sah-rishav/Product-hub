import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: '100%',
      maxWidth: 500,
    },
  });

export default function Articles() {
    return (
      <div>
             <Typography variant="overline" display="block" gutterBottom style={{        
        marginTop:"50px",

         textAlign:"center",
         color:'grey'}}>
        Quality Features
      </Typography>

          <h3 style={{      
            textAlign:"center",
         color:'black'}}> Features Articles of Product Hub</h3>

      </div>
    )}