import React from 'react';
import { 
    View,  
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

// import theme
import * as theme from '../constants/theme'

// import clothes from products
import * as Products from '../constants/products'

// import product component
import ProductBagComponent from '../components/productBagComponent'

const BagModal = (props) => {
    
    return (    
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Your Bag</Text>
                    <Text style={styles.headerSubTitle}>6 ITEMS</Text>
                </View>

                {/* Body */}
                <View style={styles.bodyContainer}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={Products.clothes}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <ProductBagComponent item={item} />
                            )
                        }} 
                    />
                </View>

                {/* Footer */}
                <View style={styles.footerContainer}>
                    <TouchableOpacity style={styles.btnContainer}>
                        <Text style={styles.btnText}>CHECKOUT</Text>
                        <Icon name="keyboard-arrow-right" size={30} color={theme.colors.light.foreground} />
                    </TouchableOpacity>
                </View>
            </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: theme.colors.light.background
    },
    header: {
        height: 80,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: theme.sizes.h6
    },
    headerSubTitle: {
        fontSize: theme.sizes.h2,
        color: theme.colors.gray
    },
    bodyContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    },
    footerContainer: {
        padding: 20,
        backgroundColor: theme.colors.light.background
    },
    btnContainer: {
        flex: 1,
        padding: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        flexDirection: 'row',
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: theme.sizes.h3
    }
});

export default BagModal;