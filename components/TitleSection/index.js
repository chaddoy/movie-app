import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'reactstrap';

import { TitleContainer, Avatar, Title } from './style';

const propTypes = {
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};

export default function TitleSection({ avatar, title }) {
  return (
    <TitleContainer>
      <Row>
        <Col xs="12" sm="12" md="9">
          <div className="display-table">
            <div className="display-table-cell">
              <Row>
                <Col xs="auto">
                  <Avatar src={avatar} alt={title} />
                </Col>
                <Col className="no-padding">
                  <Title>
                    <span>
                      {title} <button>&#9733;</button>
                    </span>
                  </Title>
                </Col>
              </Row>
            </div>
          </div>
        </Col>

        <Col xs="12" sm="12" md="3">
          <Row className="btn-row">
            <Col xs="4" sm="4" md="12" className="btn-col">
              <Button outline block color="primary">Play video</Button>
            </Col>
            <Col xs="4" sm="4" md="12" className="btn-col">
              <Button outline block color="primary">Watch later</Button>
            </Col>
            <Col xs="4" sm="4" md="12" className="btn-col">
              <Button outline block color="primary">Share</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </TitleContainer>
  );
}

TitleSection.propTypes = propTypes;