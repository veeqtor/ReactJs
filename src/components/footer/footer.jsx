import React from 'react';
import {
  Segment,
  Grid,
  Container,
} from 'semantic-ui-react';


const Footer = () => (
//   <div className="footer">
//     <a href="http://localhost:3000">&copy; VeeqTor</a>
//   </div>
  <Segment className="footer" vertical>
    <Container>
      <Grid divided="vertically" stackable>
        <Grid.Row>
          <Grid.Column width={5}>
            <h4 className="ui header">About me</h4>
            <div role="list" className="ui link list">
              <a href="/" className="active item">Home</a>
              <a href="/" className="item">About</a>
              <a href="/" className="item">Jobs</a>
              <a href="/" className="item">Team</a>
            </div>
          </Grid.Column>
          <Grid.Column width={5}>
            <h4 className="ui header">Services</h4>
            <div role="list" className="ui link list">
              <a href="/" className="active item">Home</a>
              <a href="/" className="item">About</a>
              <a href="/" className="item">Jobs</a>
              <a href="/" className="item">Team</a>
            </div>
          </Grid.Column>
          <Grid.Column width={4}>
            <h4 className="ui header">Footer Header</h4>
            <p>Extra space for a call to
                action inside the footer that could help re-engage users.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
