import { Slider, Stack, Typography } from '@mui/material';
import React from 'react';

const SliderComponenct = ({ defaultValue, min, max, step, onChange, value, lable, unit, ammount }) => {
    return (
        <Stack my={1.5}>
            <Stack gap={1}>
                <Typography variant='subtitle2'>{lable}</Typography>
                <Typography variant='h5'>{unit} {ammount}</Typography>
            </Stack>

            <Slider defaultValue={defaultValue}
            min={min} max={max} 
            aria-label="Default" 
            valueLabelDisplay="auto" 
            marks step={step} 
            onChange={onChange} 
            value={value} />
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography color="text.secondary" variant='caption'>{unit} {min}</Typography>
                <Typography color="text.secondary" variant='caption'>{unit} {max}</Typography>
            </Stack>
        </Stack>
    )
}

export default SliderComponenct