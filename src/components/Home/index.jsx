import React from 'react';
import { bool } from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'react-materialize';
import BoardContainer from '../../containers/BoardContainer/BoardContainer';

const Home = props => {
  const { isMobile } = props;

  return (
    <div className="Home">
      <Row>
        <Col s={2}>
          <h5>WISHLIST</h5>
        </Col>
        <Col s={2}>
          <h5>APPLIED</h5>
        </Col>
        <Col s={2}>
          <h5>PHONE</h5>
        </Col>
        <Col s={2}>
          <h5>ON SITE</h5>
        </Col>
        <Col s={2}>
          <h5>OFFER</h5>
        </Col>
        <Col s={2}>
          <h5>REJECT</h5>
        </Col>
      </Row>
      <BoardContainer />
      <p>
        You are using: <strong>{isMobile ? 'mobile' : 'desktop'}</strong>
      </p>
    </div>
  );
};

Home.propTypes = {
  isMobile: bool
};

function mapStateToProps(state) {
  return {
    isMobile: state.device.isMobile
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
