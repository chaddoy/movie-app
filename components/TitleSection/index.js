import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'reactstrap';
import { DEFAULT_PROPS } from '../../utils/constants';

import {
  TitleContainer, Avatar, Title, FaveButton,
  LoadingAvatar, LoadingTitle, LoadingSubtitle, LoadingButton
} from './style';

const propTypes = {
  loading: PropTypes.bool,
  avatar: PropTypes.string,
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  avatar: DEFAULT_PROPS.avatar,
};

export default class TitleSection extends React.Component {
  render() {
    const { loading, avatar, title, faved, onFavourite } = this.props;

    return (
      <TitleContainer>
        <Row>
          <Col xs="12" sm="12" md="9" lg="10" className="no-padding">
            <div className="display-table">
              <div className="display-table-cell">
                <Row>
                  <Col xs="auto">
                    {loading ? (
                      <LoadingAvatar className="loading-gradient" />
                    ) : (
                      <Avatar src={avatar} alt={title} />
                    )}
                  </Col>
                  <Col className="no-padding">
                    <Title>
                      <div className="vertical-aligned">
                        {loading ? (
                          <span>
                            <LoadingTitle className="loading-gradient" />
                            <LoadingSubtitle className="loading-gradient" />
                          </span>
                        ) : (
                          <span>{title} <FaveButton onClick={onFavourite} faved={faved}>&#9733;</FaveButton></span>
                        )}
                      </div>
                    </Title>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>

          <Col xs="12" sm="12" md="3" lg="2">
            <Row className="btn-row">
              <Col xs="4" sm="4" md="12" className="btn-col">
                {loading ? (<LoadingButton className="loading-gradient" />) : (
                  <Button className="action-btn" outline block color="primary">Play video</Button>
                )}
              </Col>
              <Col xs="4" sm="4" md="12" className="btn-col">
                {loading ? (<LoadingButton className="loading-gradient" />) : (
                  <Button className="action-btn" outline block color="primary">Watch later</Button>
                )}
              </Col>
              <Col xs="4" sm="4" md="12" className="btn-col">
                {loading ? (<LoadingButton className="loading-gradient" />) : (
                  <Button className="action-btn" outline block color="primary">Share</Button>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </TitleContainer>
    );
  }
}

TitleSection.propTypes = propTypes;
TitleSection.defaultProps = defaultProps;