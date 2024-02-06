import { View, Text, StyleSheet, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { axiosInstance } from '../API/index';
import { resetReading, setReading } from '../store/addessSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function ReadingScreen({ route }) {
    const { address_id } = route.params;
    const dispatch = useDispatch();
    const { address } = useSelector((store) => store.address);
    useEffect(() => {
        async function getOneAddress() {
            await axiosInstance.get(`/address/${address_id}/`).then((response) => dispatch(setReading(response?.data)));
        }
        getOneAddress();
        return () => {
            dispatch(resetReading());
        };
    }, [dispatch]);
    return (
        <View style={styles.container}>
          <ImageBackground source={address.images ? { uri: `data:image/png;base64,${address.images.slice(2, -1)}` } : null}style={styles.imageBackground}>
            <View style={styles.overlay}>
              {/* Content */}
              <View style={styles.content}>
                <Text style={styles.heading}>Сайты для дополнительной информации:</Text>
                <View style={styles.box}>
                  <Text style={styles.boxText}>портал услуг Москвы - mos.ru</Text>
                </View>
                <View style={styles.box}>
                  <Text style={styles.boxText}>портал «Госуслуг» - gosuslugi.ru</Text>
                </View>
                <View style={styles.box}>
                  <Text style={styles.boxText}>сайт «Мосводоканала» - mosvodokanal.ru</Text>
                </View>
              </View>
              <View style={styles.additionalContent}>
                {address && (
                  <Text style={styles.addressText}>
                    Показания счетчика для {address.address}, кв. {address.apartment}:
                  </Text>
                )}
                <View style={styles.waterMeterFrame}>
                  <Text>{address.meter_reading}</Text>
                </View>
                <Text style={styles.addText}>Показаний считаются по последним трем цифрам</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
      overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        /* justifyContent: 'center', */
        alignItems: 'center',
      },
      content: {
        alignItems: 'center',
      },
      heading: {
        fontSize: 24,
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center' 
      },
      box: {
        width: 300,
        height: 80,
        backgroundColor: 'rgba(82,250,82,0.8)',
        borderRadius: 20,
        marginBottom: 10,
        justifyContent: 'center',
      },
      boxText: {
        fontSize: 20,
        color: '#444',
        textAlign: 'center' 
      },
      additionalContent: {
        alignItems: 'center',
        marginTop: 20,
      },
      addressText: {
        fontSize: 24,
        color: '#fff',
        marginBottom: 10,
        textAlign: 'center' 
      },
      waterMeterFrame: {
        borderWidth: 2,
        borderColor: 'rgba(255, 252, 101, 1)',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#f2f2f2',
        color: '#333',
        fontSize: 30,
      },
      addText: {
        fontSize: 20, 
        color: '#fff', 
        textAlign: 'center' 
      }
    });
