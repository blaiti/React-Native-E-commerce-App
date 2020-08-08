import React, {useState} from 'react'
import {  StyleSheet, View, Text, Image, TouchableOpacity, Modal } from 'react-native'

// import Product Modal
import ProductModal from './productModal'

// import theme
import * as theme from '../constants/theme'

const ProductBagComponent = ({item}) => {
    const [productVisible, setProductVisible] = useState(false)

    const ToggleProductVisible = () => {
        setProductVisible(!productVisible)
    }
    return(
        <TouchableOpacity style={styles.container} onPress={() => ToggleProductVisible()} >

                <Modal 
                    animationType="slide" 
                    visible={productVisible}
                    onRequestClose={() => ToggleProductVisible()}>
                        <ProductModal closeModal={() => ToggleProductVisible()} item={item} />
                </Modal>
                
                <View style={styles.subContainer}>
                    <View style={[styles.imgContainer, {backgroundColor: item.background}]}>
                        <Image source={item.image} style={{width: 100, height: 100}} />
                    </View>
                    
                    <View style={styles.detailsContainer}>
                        <Text style={styles.nameText}>{item.name}</Text>
                        <Text style={styles.nameText}>{item.color}</Text>
                        <Text style={styles.priceText}>{item.price}.00$</Text>
                    </View>

                    <View style={styles.sizeContainer}>
                        <View style={styles.numCircle}>
                            <Text style={styles.nameText}>1x</Text>
                        </View>
                        <View style={styles.sizeCircle}>
                            <Text style={styles.nameText}>M</Text>
                        </View>
                    </View>
                </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    subContainer: {
        flexDirection: 'row'
    },
    imgContainer: {
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailsContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    nameText: {
        fontWeight: '900',
        fontSize: theme.sizes.h3,
    },
    priceText: {
        marginTop: 7,
        fontWeight: 'bold'
    },
    sizeContainer: {
        justifyContent: 'center'
    },
    numCircle: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderRadius: 40,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: theme.colors.silver
    },
    sizeCircle: {
        width: 30,
        height: 30,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: theme.colors.silver,
        backgroundColor: theme.colors.silver
    }
})

export default ProductBagComponent