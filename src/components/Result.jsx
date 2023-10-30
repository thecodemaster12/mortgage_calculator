import { Stack, Typography } from '@mui/material';
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({data}) => {
  const {homeValue, downPayment, loanAmmount, loanTerm, interestRate} = data;

  const totalLoanMonths = loanTerm * 12;
  const interestPerMonth = interestRate /100 /12;

  const monthlyPayment = (
    loanAmmount * interestPerMonth * 
    (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1 );

  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmmount;

  const pieChart = {
    labels: ['Home Value', 'Interest'],
    datasets: [
      {
        label: '',
        data: [homeValue, totalInterestGenerated],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Stack>
        <Typography textAlign="center" variant='h5'>
          Monthly Payment: $ {monthlyPayment.toFixed(2)}
        </Typography>
        <Stack direction="row" justifyContent="center">
          <div>
            <Pie data={pieChart}/>
          </div>
        </Stack>
      </Stack>
    </>
  )
}

export default Result