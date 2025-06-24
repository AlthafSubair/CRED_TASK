// MonthlyPaymentsChart.tsx

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { motion } from 'framer-motion';

// 📊 Payment data for the past 6 months
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
      className="w-full mx-auto p-6 rounded-lg shadow-md bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* 🔖 Chart Title */}
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        Your Last 6 Months of Payments
      </h2>

      {/* 📈 Responsive Chart */}
      <ResponsiveContainer width="100%" height={275}>
        <LineChart data={data}>
          {/* 🧱 Background grid */}
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

          {/* 📅 X-Axis */}
          <XAxis dataKey="month" stroke="#9ca3af" />

          {/* 💰 Y-Axis */}
          <YAxis stroke="#9ca3af" />

          {/* 🛠️ Tooltip on hover */}
          <Tooltip
            contentStyle={{ backgroundColor: '#111827', border: 'none' }}
            labelStyle={{ color: '#d1d5db' }}
            itemStyle={{ color: '#f472b6' }}
          />

          {/* 📊 Line series */}
          <Line
            type="monotone"
            dataKey="amount"
            stroke="#6366f1" // Indigo-500 from Tailwind
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
