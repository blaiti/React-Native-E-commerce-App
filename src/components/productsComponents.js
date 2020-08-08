import React, {useState} from 'react'
import {  StyleSheet, View, Text, Image, TouchableOpacity, Modal } from 'react-native'

// import Product Modal
import ProductModal from './productModal'

// import theme
import * as theme from '../constants/theme'

const ProductComponent = ({item}) => {
    const [productVisible, setProductVisible] = useState(false)

    const ToggleProductVisible = () => {
        setProductVisible(!productVisible)
    }
    return(
        <TouchableOpacity 
            onPress={() => ToggleProductVisible()}
            style={[styles.container, {backgroundColor: item.background}]}>

                <Modal 
                    animationType="slide" 
                    visible={productVisible}
                    onRequestClose={() => ToggleProductVisible()}>
                        <ProductModal closeModal={() => ToggleProductVisible()} item={item} />
                </Modal>
                
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.subTitle}>{item.price}$</Text>
                    <View style={styles.imgContainer}>
                        <Image source={item.image} style={{width: 100, height: 100}} />
                    </View>
                </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        margin: 5,
        borderRadius: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: theme.sizes.h3,
        color: theme.colors.light.foreground
    },
    subTitle: {
        fontSize: theme.sizes.h3,
        color: theme.colors.light.foreground
    },
    imgContainer: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ProductComponent