

import PropTypes from 'prop-types'
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";



export default function Graph({data}) {

  return (
    <div style={{ width: "100%", height: 500, margin:"0px auto", }}>
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 40,
            right: 30,
            bottom: 20,
            left: 10
          }}
        >
          <CartesianGrid stroke="#EDE9F0" />
          <XAxis dataKey="product_title" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="price" fill="#BB8BE3" stroke="#BB8BE3" />
          <Line type="monotone" fill="red" dataKey="rating" stroke="red" />
          <Bar dataKey="price" barSize={20} fill="#9538E2" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
Graph.propTypes = {
    data:PropTypes.array
}
