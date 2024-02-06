import { View, Text, StyleSheet, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';

export default function AddressCard({ navigation, ...props }) {
    const handlePress = () => {
        navigation.navigate('Показания счетчиков', { address_id: props.address_id });
    };

    return (
        <View style={styles.card}>
          <View style={styles.cut}>
            <ImageBackground
              source={{ uri: `data:image/png;base64,${ props.images.slice(2, -1) }` }}
              style={styles.cardHeader}
            >
              <View style={styles.headerOverlay} />
            </ImageBackground>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.info}>Город: {props.town}</Text>
            <Text style={styles.cardText}>Адрес: {props.address}</Text>
            <Text style={styles.cardText}>Квартира: {props.apartment}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={handlePress}

            >
              <Text style={styles.buttonText}>Подробнее</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      card: {
        width: 315,
        minHeight: 400,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.5)',
        margin: 15,
        maxWidth: '60%',
        shadowColor: '#000',
        shadowOffset: {
          width: 2,
          height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 4,
      },
      cut: {
        width: 315,
        height: 220,
        overflow: 'hidden',
        borderBottomLeftRadius: 150,
        borderBottomRightRadius: 8,
      },
      cardHeader: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      headerOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255, 252, 101, 0.5)',
      },
      cardBody: {
        padding: 16,
      },
      info: {
        textAlign: 'center',
        fontSize: 25,
        
      },
      cardText: {
        marginBottom: 8,
        fontSize: 16,
        
      },
      button: {
        backgroundColor: '#0dfa40',
        padding: 12,
        borderRadius: 18,
        alignItems: 'center',
        marginVertical: 8,
      },
      buttonText: {
        color: '#000000',
        
        fontSize: 22,
        fontWeight: 'bold',
      },
    });