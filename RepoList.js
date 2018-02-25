import React from 'react';
import {
    List,
    ListItem,
    Thumbnail,
    Left,
    Right,
    Body,
    Text,
} from 'native-base';

const RepoList = (props) => (
    <List style={{ marginTop: 10 }}>
        { props.repositories.map(repo => (
            <ListItem key={repo.id} avatar>
                <Left>
                    <Thumbnail source={{ uri: repo.owner.avatar_url }}/>
                </Left>
                <Body>
                    <Text>{repo.full_name}</Text>
                    <Text note>{repo.description}</Text>
                </Body>
                <Right>
                    <Text>{repo.stargazers_count} stars</Text>
                </Right>
            </ListItem>
         ))}
    </List>
);

export default RepoList;

