import React from "react";
import { bool } from "prop-types";
import { connect } from "react-redux";
import BoardContainer from "../../containers/BoardContainer/BoardContainer";

const Home = props => {
  const { isMobile } = props;

  return (
    <div className="Home">
      <h1>Home</h1>
      <BoardContainer />
      <p>
        You are using: <strong>{isMobile ? "mobile" : "desktop"}</strong>
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
