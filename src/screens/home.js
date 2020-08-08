import React, {useState} from 'react'
import {  StyleSheet, View, Modal, Text, TouchableOpacity, TextInput, FlatList } from 'react-native'

// import theme
import * as theme from '../constants/theme'
import Icon from 'react-native-vector-icons/MaterialIcons'

// import product component
import ProductComponent from '../components/productsComponents'

// import Bag Modal
import BagModal from '../components/bagModal'

// import clothes from products
import * as Products from '../constants/products'

// const with the current theme (dark / light)
const currentTheme = theme.colors.light

const Home = () => {
    const [bagVisible, setBagVisible] = useState(false)

    const ToggleBagVisible = () => {
        setBagVisible(!bagVisible)
    }

    return(
        <View style={{flex: 1}}>
            <Modal 
                animationType="slide" 
                visible={bagVisible}
                onRequestClose={() => ToggleBagVisible()}>
                    <BagModal closeModal={() => ToggleBagVisible()} />
            </Modal>

            <View style={styles.container}>
                {/* Header */}
                <View style={styles.headerContainer}>
                    <View>
                        <Text style={styles.titleText}>Do your shopping online</Text>
                        <Text style={styles.subTitleText}>find the best choices for you</Text>
                    </View>
                    <TouchableOpacity style={styles.iconCaontainer} onPress={() => ToggleBagVisible()}>
                        <Icon name="shopping-cart" color={currentTheme.background} size={25} />
                        <View style={styles.badgeContainer}>
                            <Text style={styles.badgeText}>6</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Search */}
                <View style={styles.searchContainer}>
                    <Icon name="search" color={theme.colors.gray} size={25} />
                    <TextInput 
                    style={styles.textInputContainer} 
                    placeholder="Search.." 
                    placeholderTextColor={theme.colors.gray} />
                </View>

                {/* Body */}
                <View style={styles.bodyContainer}>
                    <FlatList
                    showsVerticalScrollIndicator={false}
                        data={Products.clothes}
                        numColumns={2}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <ProductComponent item={item} />
                            )
                        }} 
                    />
                </View>
            </View>
        </View>
            
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: currentTheme.background
    },
    // Header Style
    headerContainer: {
        paddingTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    badgeContainer: {
        top: -4, 
        right: -4,
        width: 18,
        height: 18,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute', 
        backgroundColor: theme.colors.green
    },
    badgeText: {
        color: theme.colors.light.background
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: theme.sizes.h5
    },
    subTitleText: {
        fontSize: theme.sizes.h3,
        color: theme.colors.gray
    },  
    iconCaontainer: {
        padding: 10,
        borderRadius: 30,
        backgroundColor: currentTheme.foreground
    },
    // Search Style
    searchContainer: {
        paddingLeft: 10,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: theme.colors.clouds
    },
    textInputContainer: {
        flex: 1
    },
    // Body Style
    bodyContainer: {
        flex: 1,
        marginTop: 20,
    }
})

export default Home