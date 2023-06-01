import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const Statistics = () => {
  const data = [
    { name: 'Assignment - 1', value: 28 },
    { name: 'Assignment - 2', value: 27 },
    { name: 'Assignment - 3', value: 28 },
    { name: 'Assignment - 4', value: 28 },
    { name: 'Assignment - 5', value: 30 },
    { name: 'Assignment - 6', value: 30 },
    { name: 'Assignment - 7', value: 30 },
    { name: 'Assignment - 8', value: 25 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>

      <header className="h-[250px] bg-[#F9F9FF]">
        <h1 className="text-center pt-28 text-4xl font-bold">Statistics Page </h1>
      </header>

      <div className="w-3/4 mx-auto flex justify-center items-center">
        <PieChart width={500} height={500}>
          <Pie
            data={data}
            cx={200}
            cy={250}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={160}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        <h1 className='text-xl font-bold'> Pie Chart For Assignment marks 1 to 8 </h1>
      </div>
     
      

    </div>
  );
};

export default Statistics;
