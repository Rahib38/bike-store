import { Link } from 'react-router-dom'

const PaymentReturn = () => {
  return (
    <div>
      <Link to={"/userDashboard/myOrder"}>
      
      <h1>Go to order</h1>
      </Link>
    </div>
  )
}

export default PaymentReturn
