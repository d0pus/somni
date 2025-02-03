import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { day: 'Day 1', quality: 50, fallAsleepTime: 45, wakings: 4 },
  { day: 'Day 5', quality: 55, fallAsleepTime: 40, wakings: 3 },
  { day: 'Day 10', quality: 60, fallAsleepTime: 35, wakings: 3 },
  { day: 'Day 15', quality: 68, fallAsleepTime: 25, wakings: 2 },
  { day: 'Day 20', quality: 75, fallAsleepTime: 20, wakings: 2 },
  { day: 'Day 25', quality: 85, fallAsleepTime: 15, wakings: 1 },
  { day: 'Day 30', quality: 95, fallAsleepTime: 10, wakings: 0 },
];

const SleepChart = () => {
  return (
    <div className="w-full h-[300px] md:h-[400px] mt-16">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
          <XAxis 
            dataKey="day" 
            stroke="#ffffff90"
            tick={{ fill: '#ffffff90' }}
          />
          <YAxis 
            stroke="#ffffff90"
            tick={{ fill: '#ffffff90' }}
            domain={[0, 100]}
            yAxisId="left"
          />
          <YAxis 
            stroke="#ffffff90"
            tick={{ fill: '#ffffff90' }}
            domain={[0, 50]}
            yAxisId="right"
            orientation="right"
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1A1F2C',
              border: '1px solid #ffffff30',
              borderRadius: '8px',
              color: '#fff',
              padding: '8px'
            }}
            formatter={(value: number, name: string) => {
              if (name === 'Sleep Quality') return [`${value}%`, name];
              if (name === 'Fall Asleep Time') return [`${value} min`, name];
              if (name === 'Night Wakings') return [`${value} times`, name];
              return [value, name];
            }}
          />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            wrapperStyle={{ color: '#ffffff90' }}
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="quality"
            name="Sleep Quality"
            stroke="#9b87f5"
            strokeWidth={3}
            dot={{ fill: '#9b87f5', strokeWidth: 2 }}
            activeDot={{ r: 8 }}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="fallAsleepTime"
            name="Fall Asleep Time"
            stroke="#FFF4BD"
            strokeWidth={2}
            dot={{ fill: '#FFF4BD', strokeWidth: 2 }}
            activeDot={{ r: 6 }}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="wakings"
            name="Night Wakings"
            stroke="#7E69AB"
            strokeWidth={2}
            dot={{ fill: '#7E69AB', strokeWidth: 2 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SleepChart;