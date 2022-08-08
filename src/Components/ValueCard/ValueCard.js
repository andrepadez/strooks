import { Card } from 'react-bootstrap'
import Countup from 'react-countup'
const ValueCard = ({ value, title, subtitle, before, after }) => {
  return (
    <Card className="leads-card">
      <Card.Body className="text-center">
        <h1 className="text-gradient text-primary">
          <span style={{ fontSize: '0.7em' }} className="ms-n1">
            {before}
          </span>
          <span id="status2">
            <Countup end={value} duration="1" />
          </span>
          <span style={{ fontSize: '0.7em' }} className="ms-n1">
            {after}
          </span>
        </h1>
        <h6 className="mb-0 font-weight-bolder">{title}</h6>
        {subtitle && <p className="opacity-8 mb-0 text-sm">{subtitle}</p>}
      </Card.Body>
    </Card>
  )
}

export default ValueCard
