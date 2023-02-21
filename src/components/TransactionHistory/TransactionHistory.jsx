import PropTypes from 'prop-types';
import { Table, TableHeader, TableCells } from "./TransactionHistory.styled";


export const TransactionHistory = ({transactions}) => {
    return <Table>
  <thead>
    <tr>
      <TableHeader>Type</TableHeader>
      <TableHeader>Amount</TableHeader>
      <TableHeader>Currency</TableHeader>
    </tr>
  </thead>
        <tbody>
            {transactions.map(item => (<tr key={item.id}>
                <TableCells>{item.type}</TableCells>
                    <TableCells>{item.amount}</TableCells>
                    <TableCells>{item.currency}</TableCells>
            </tr>))}
        </tbody>
    </Table>
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}