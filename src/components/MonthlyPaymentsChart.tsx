// MonthlyPaymentsChart.tsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { month: 'Jan', amount: 4000 },
  { month: 'Feb', amount: 3200 },
  { month: 'Mar', amount: 5200 },
  { month: 'Apr', amount: 3000 },
  { month: 'May', amount: 6800 },
  { month: 'Jun', amount: 4700 },
  
];

const MonthlyPaymentsChart = () => {
  return (
    <motion.div
      className="dark:bg-slate-950 border dark:border-slate-800 border-slate-300 bg-slate-100 p-6 rounded-lg shadow-md w-full  mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        Your Last 6 Months of Payments
      </h2>

      <ResponsiveContainer width="100%" height={275}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip
            contentStyle={{ backgroundColor: '#111827', border: 'none' }}
            labelStyle={{ color: '#d1d5db' }}
            itemStyle={{ color: '#f472b6' }}
          />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="#6366f1"
            strokeWidth={3}
            activeDot={{ r: 6 }}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default MonthlyPaymentsChart;
