import React from 'react'
import SliderComponenct from './common/SliderComponenct'


const SliderSelect = ({data, setData}) => {
    const bank_min_limite = 1000;
    const bank_max_limite = 10000;
    return (
        <>
            <SliderComponenct lable="Home value" unit="$" ammount={data.homeValue} min={bank_min_limite} max={bank_max_limite} defaultValue={data.homeValue} step={100} value={data.homeValue} onChange={(e, value)=>setData({
                ...data,
                downPayment: value *0.2,
                loanAmmount: value * 0.8,
                homeValue: value
            })}/>

            <SliderComponenct lable="Down Payment" unit="$" ammount={data.downPayment} min={0} max={data.homeValue} defaultValue={data.downPayment} step={100} value={data.downPayment} onChange={(e, value)=>setData({
                ...data,
                loanAmmount: (data.homeValue - value),
                downPayment:value
            })}/>

            <SliderComponenct lable="Loan Ammount" unit="$" ammount={data.loanAmmount} min={0} max={data.homeValue} defaultValue={data.loanAmmount} step={100} value={data.loanAmmount} onChange={(e, value)=>setData({
                ...data,
                downPayment: (data.homeValue - value),
                loanAmmount:value
            })}/>
            <SliderComponenct lable="Interest Rate" unit="%" ammount={data.interestRate} min={2} max={18} defaultValue={data.interestRate} step={0.5} value={data.interestRate} onChange={(e, value)=>setData({
                ...data,
                interestRate:value
            })}/>
        </>
    )
}

export default SliderSelect