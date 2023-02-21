import PropTypes from 'prop-types';
import { StatsWrapper, List, Item } from "./Statistics.styled"

export const Statistics = ({ items }) => {
    return <StatsWrapper>
        <h2 class="title">Upload stats</h2>
        <List>
            {items.map(item => (<Item key={item.id}>
            <span class="label">{item.label}</span>
            <span class="percentage">{item.percentage}%</span>
             </Item>))}
    
        </List>
    </StatsWrapper>
}


Statistics.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}