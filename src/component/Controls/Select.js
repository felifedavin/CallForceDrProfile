import React from 'react'
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, makeStyles  } from '@material-ui/core';
import "../modal/modal.css";

const useStyles = makeStyles((theme) => ({
    
    formLabel : {
      padding:"0 !important",
      transform:"none!important",
    color: "#000!important",
    },
    formInput : {
        display:"block",
    },
    formBlock:{
        display:"block",
    }
  }));
  

const Select = (props) => {

    const { name, label, value, onChange, options } = props;    
    const classes = useStyles();

    return (
        <FormControl variant="outlined" className={classes.formBlock}
        >
            <div className='form-outer'>
            <InputLabel className={classes.formLabel}>{label}</InputLabel>
            <div className='OutlinedInputInput'>
            <MuiSelect
            className={classes.formInput}
                label={label}
                name={name}
                value={value}
                onChange={onChange}>
                {
                    options.map(
                        (item, id) => (<MenuItem key={id} value={item}>{item}</MenuItem>)
                    )
                }
            </MuiSelect>
            </div>
            </div>
        </FormControl>
    )
}

export default Select;