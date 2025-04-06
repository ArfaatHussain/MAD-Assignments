import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import { Search, TextIcon } from 'lucide-react-native';
import React, { useEffect, useState } from 'react'
import { Picker } from '@react-native-picker/picker';
const data = [
    {
        id: 1,
        profilePhoto: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
        name: "Arfaat Hussain",
        phoneNumber: "03315183344",
        category: "Friends"
    },
    {
        id: 2,
        profilePhoto: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
        name: "Rahat Hussain",
        phoneNumber: "03155802580",
        category: "Family"
    },
    {
        id: 3,
        profilePhoto: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
        name: "Arsalan Kharral",
        phoneNumber: "03312183140",
        category: "Colleagues"
    },
    {
        id: 4,
        profilePhoto: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
        name: "Usman",
        phoneNumber: "03365383344",
        category: "Others"
    },
    {
        id: 5,
        profilePhoto: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
        name: "Danish",
        phoneNumber: "02517183314",
        category: "Friends"
    },
    {
        id: 6,
        profilePhoto: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
        name: "Shahzaib",
        phoneNumber: "03325153394",
        category: "Family",
        category: "Colleagues"
    },
    {
        id: 7,
        profilePhoto: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
        name: "Hassan",
        phoneNumber: "03325983344",
        category: "Others"
    },
    {
        id: 8,
        profilePhoto: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
        name: "Iqbal",
        phoneNumber: "03312183364",
        category: "Friends"
    },
    {
        id: 9,
        profilePhoto: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
        name: "Raza",
        phoneNumber: "0345183344",
        category: "Family"
    },
    {
        id: 10,
        profilePhoto: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
        name: "Haider",
        phoneNumber: "02315183340",
        category: "Colleagues"
    },
    {
        id: 11,
        profilePhoto: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
        name: "Ulfat Hussain",
        phoneNumber: "03317383343",
        category: "Others"
    }
]


const Assignment2 = () => {

    const [search, setSearch] = useState("");
    const [contacts, setContacts] = useState(data)
    const [initialContacts, setInititialContacts] = useState(data)
    const [selectedValue, setSelectedValue] = useState('All');

    useEffect(() => {
        let filtered = initialContacts;

        if (selectedValue !== "All") {
            filtered = filtered.filter(contact => contact.category === selectedValue);
        }

        if (search.trim() !== "") {
            const query = search.toLowerCase();
            filtered = filtered.filter(contact =>
                contact.name.toLowerCase().includes(query) ||
                contact.phoneNumber.includes(search)
            );
        }

        setContacts(filtered);
    }, [search, selectedValue]);


    function handleOnPress(item) {
        props.navigation.navigate("TransactionNavigator", {
            screen: "ChooseAmount",
            params: {
                contact: item
            }
        })
    }

    function renderItem({ item }) {
        return (
            <TouchableHighlight
                underlayColor="#D9D9D9"
                onPress={() => handleOnPress(item)}
                activeOpacity={0.6}

            >
                <View
                    style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, marginTop: 8, borderBottomColor: 'grey', borderBottomWidth: 0.5, paddingVertical: 10 }}
                >

                    <Image source={{ uri: item.profilePhoto }} style={styles.profileImage} />

                    <Text style={{ fontSize: 17, color: 'grey', fontWeight: '700', flex: 1, marginLeft: '5%' }} >{item.name}</Text>
                    <Text style={{ fontSize: 17, color: 'grey' }}>{item.phoneNumber}</Text>

                </View>
            </TouchableHighlight>
        )
    }

    return (
        <View style={{ flex: 1 }} >
            <Text style={{ textAlign: 'center', fontSize: 18, marginVertical: 10 }} >Quick Transfer</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 18 }}>
                <Text style={{ marginRight: 15 }} >Search By:</Text>
                <DropdownExample selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
            </View>

            <View
                style={[styles.inputWrapper, {
                    borderColor: search ? 'black' : '#D7D7D7'
                }]}
            >
                <Search color={search ? 'black' : '#D7D7D7'} size={22} strokeWidth={2.5} />

                <TextInput
                    placeholder='Search account / bank account'
                    placeholderTextColor={'#D7D7D7'}
                    style={styles.input}
                    onChangeText={setSearch}
                    value={search}
                />

            </View>



            <FlatList
                data={contacts}
                ListEmptyComponent={() => <Text>No Contacts</Text>}
                renderItem={renderItem}
                keyExtractor={(contact) => contact.id}
            />

        </View>
    )
}

export default Assignment2


const DropdownExample = ({ selectedValue, setSelectedValue }) => {

    return (
        <View style={{ borderColor: selectedValue ? 'black' : "#D7D7D7", borderWidth: 1, borderRadius: 12, marginVertical: 10, flex: 1 }} >


            <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Friends" value="Friends" />
                <Picker.Item label="Family" value="Family" />
                <Picker.Item label="Colleagues" value="Colleagues" />
                <Picker.Item label="Others" value="Others" />
                <Picker.Item label="All" value="All" />
            </Picker>

        </View>
    );
};

const styles = StyleSheet.create({
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 18,
        height: 60,
        borderColor: '#D7D7D7',
        borderWidth: 2,
        marginHorizontal: 18,
        borderRadius: 12
    },
    input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,

    },
    profileImage: {
        height: 40,
        width: 40,
        resizeMode: 'cover',
        borderRadius: 20
    },
    container: {
        margin: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    picker: {
        height: 55,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    selectedText: {
        marginTop: 20,
        fontSize: 16,
    },
})