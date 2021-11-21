import React from 'react';
import {Text, SafeAreaView, Image, View, ScrollView, FlatList, TouchableOpacity} from "react-native";

const DATA = [
    {
        title: "Data 1", name: "Movie 1", key: "1", image: require("../../assets/registericon.png"),
    }, {
        title: "Data 2", name: "Movie 2", key: "2", image: require("../../assets/game1.png"),
    }, {
        title: "Data 3", name: "Movie 3", key: "3", image: require("../../assets/game2.png"),
    }, {
        title: "Data 4", name: "Movie 4", key: "4", image: require("../../assets/game3.png"),
    }, {
        title: "Data 5", name: "Movie 5", key: "5",
    }, {
        title: "Data 6", name: "Movie 6", key: "6",
    }, {
        title: "Data 7", name: "Movie 7", key: "7",
    }, {
        title: "Data 8", name: "Movie 8", key: "8",
    }, {
        title: "Data 9", name: "Movie 9", key: "9",
    }, {
        title: "Data 10", name: "Movie 10", key: "10",
    }];

function Home({navigation}){
    console.log(...DATA);
    const _renderListView = (data) => {
        return(
            <View style={styles.cardStyle}>
                <Text>{data}</Text>            
            </View>
        )
    }
    return(
        <SafeAreaView style={{flex:1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require("../../assets/mj2.png")} style={{width: 100, height: 100}} />
            <Text>This is Home Page</Text>
            <ScrollView showsVerticalScrollIndicator= {false} 
            contentContainerStyle={{ paddingHorizontal: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent:'space-between'}}>
            <FlatList 
                data = {DATA}
                renderItem= {({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate("Movie", item)}>
                        <View style={styles.cardStyle}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.imageHolder} source={item.image} resizeMode='contain' />
                            </View>
                            
                            <View resizeMode='contain'>
                                <Text>{item.title}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            
            />
                
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = {
    cardStyle: {
        width: 200,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 20,
        justifyContent:'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 150,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden',
    },
    imageHolder: {
        width: '100%',
        height: '100%',
    }
}

export default Home;