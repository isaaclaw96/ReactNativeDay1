import React from 'react';
import {Text, SafeAreaView, Image, View, ScrollView} from 'react-native';

function MoviePage({navigation,route}){
    console.log("props", route);
    return(
        <View style={styles.movieSection}>
            <Text>Title: {route.params.title}</Text>
            <Text>Name: {route.params.name}</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.imageHolder} source={route.params.image} resizeMode='contain' />
            </View>
            
        </View>
        
    )
}

const styles = {
    movieSection:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    imageHolder: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        width: 150,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden',
    }
}

export default MoviePage;
