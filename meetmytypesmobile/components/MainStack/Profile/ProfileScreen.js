import React, {useState, Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Subheading,
  List,
} from 'react-native-paper';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: true,
    };
  }
  componentDidMount() {
    return fetch(
      'https://7oc71uxij6.execute-api.us-east-1.amazonaws.com/dev/{proxy+}',
    );
  }

  render() {
    return (
      <Card>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={props => <Avatar.Icon {...props} icon="folder" />}
        />
        <Card.Content>
          <Title>{name}</Title>
          <Subheading>{LoveType}</Subheading>
          <Button>Edit Profile</Button>
          <View style={styles.lineStyle} />
          <List.Section>
            <List.Subheader>Characteristics</List.Subheader>
            <List.Item title="First Item" />
            <List.Item title="Second Item" />
          </List.Section>
          <List.Section>
            <List.Subheader>Top 4 Types</List.Subheader>
            <List.Item title="First Item" />
            <List.Item title="Second Item" />
          </List.Section>
        </Card.Content>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  lineStyle: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
