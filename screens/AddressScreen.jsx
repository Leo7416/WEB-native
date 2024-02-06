import { ScrollView, StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../API/index';
import { setAddresses } from '../store/addessSlice';
import AddressCard from '../components/AddressCard';

export default function AddressScreen({ navigation }) {
    const dispatch = useDispatch();
    const { addresses } = useSelector((store) => store.address);
    const [query, setQuery] = useState('');

    useEffect(() => {
        async function getAllAddresses() {
            await axiosInstance.get('/addresses').then((response) => dispatch(setAddresses(response?.data)));
        }
        getAllAddresses();
    }, [dispatch]);

    const handleSearch = async () => {
        try {
            const response = await axiosInstance.get(`/search/?query=${query}`);
            dispatch(setAddresses(response?.data)); // Обновление данных устройств в Redux
        } catch (error) {
            console.error('Ошибка при выполнении поиска:', error);
        }
    };

    return (
        <ScrollView>
          {/* Это заменяет <header> */}
            <View style={styles.ul}>
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setQuery(text)} // Установка значения в состояние query
                    placeholder="Введите запрос"
                />
            <TouchableOpacity onPress={handleSearch} style={[styles.button]}>
                <Text style={styles.buttonText}>Поиск</Text>
            </TouchableOpacity>
            </View>
          
            <View style={styles.page}>
                {!!addresses &&
                    addresses.map((address) => <AddressCard key={address.address_id} {...address} navigation={navigation} />)}
            </View>
        </ScrollView>
      );
    };
    
    const styles = StyleSheet.create({
        page: {
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f8f8f8',
        },
      ul: {
        width: '100%',
        height: 50,
        backgroundColor: 'rgb(3, 192, 3)',
        // Другие стили, необходимые для вашего ul
      },
      container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
      },
      input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 10,
      },
      button: {
        backgroundColor: 'rgba(255, 255, 113, 0.8)',
        padding: 6,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 10,
        fontSize: 1,
        alignItems: 'center',
        marginVertical: 4,
      },
      buttonText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
      },
    });