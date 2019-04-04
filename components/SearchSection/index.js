import React from 'react';
import { Row, Col, Button, Input } from 'reactstrap';

import { SearchContainer } from './style';

export default function SearchSection() {
  return (
    <SearchContainer>
      <Row>
        <Col xs="3" sm="3" md="8" className="no-padding">
          <Button color="primary"><span>&#8249;</span> Back</Button>
        </Col>
        <Col xs="9" sm="9" md="4" className="no-padding">
          <Input type="email" name="email" id="exampleEmail" placeholder="Search for a movie" />
        </Col>
      </Row>
    </SearchContainer>
  );
}