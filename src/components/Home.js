import BarChart from 'react-easy-bar-chart'

const Home = () => {
  const barData = [
    {
      title: 'Item 1',
      value: 27,
      color: '#6dd3ce'
    },
    {
      title: 'Item 2',
      value: 15,
      color: '#c8e9a0'
    },
    {
      title: 'Item 3',
      value: 35,
      color: '#ef5b5b'
    }
  ]

  return (
    <div className='home-item'>
      <h1>Live Count of Items Donated</h1>
      <BarChart 
        xAxis = 'Items Needed'
        yAxis = 'Amount Donated'
        height={400}
        width={800}
        data={barData}
      />
    </div>
  )
}

export default Home
