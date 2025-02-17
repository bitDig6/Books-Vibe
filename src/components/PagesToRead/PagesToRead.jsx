import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router';

const PagesToRead = () => {
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

  const data = useLoaderData();

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };


  return (
    <div style={ {width: '100%', height: '400px', margin: '0 auto'} }>
      <ResponsiveContainer width="90%" height="100%">
        <BarChart
          width={1000}
          height={500}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          {/* <XAxis dataKey="bookName" interval={0} angle={-30} textAnchor='end' dx={20} dy={10} /> */}
          <XAxis dataKey="bookId" label={{ value: 'Book Ids', position: 'bottom'}}></XAxis>
          <YAxis label={{ value: 'No. of Pages', angle: -90, position: 'insideLeft' }}/>
          <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

PagesToRead.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number
}

export default PagesToRead;