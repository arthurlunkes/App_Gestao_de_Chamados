import React, { useState, useEffect } from "react";
import {StyleSheet, Text, View, useColorScheme, Modal, Pressable} from "react-native";
import TableTickets from "../../components/TableTickets/tableTickets";
import {getClients} from "../../services/axiosService";
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface client {
    id: number;
    name: string;
}

const TicketPanel: React.FC = (props) => {
    const theme = useColorScheme();
    const [ modalVisible, setModalVisible ] = useState(false);
    const [ clients, setClients ] = useState<client[]>([]);
    const [ listClients, setListClients ] = useState<client[]>([]);
    const [ clientsConvidados, setClientsConvidados ] = useState<client[]>([]);

    useEffect(() => {
        getClients().then((response) => {
            setClients(response.data);
        }).catch((error) => {
            console.warn("erro: ", error.message);
        })
    }, []);

    const getClientById = (id: number) => {
        const client: client | undefined = clients.find((client) => client.id === id);
        return client;
    }

    const insertOrRemoveFromListClients = (id: number, isChecked: boolean) => {
        if (isChecked) {
            const updatedList: (client | undefined)[] = [...listClients, getClientById(id)];
            // @ts-ignore
            setListClients(updatedList);
            console.warn(updatedList);
        } else {
            const updatedList = listClients.filter(client => client.id !== id);
            setListClients(updatedList);
            console.warn(updatedList);
        }
    }

    return (
        <View style={ {...styles.container, backgroundColor: theme === 'dark' ? 'black' : 'white'}}>
            <View style={styles.main}>
                <Text style={{ ...styles.title, color: theme === 'dark' ? 'white' : 'black'}}>Painel de chamados</Text>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{alignItems: 'flex-start'}}>
                                {clients.map((client, index) => (
                                    <BouncyCheckbox
                                        key={index}
                                        style={styles.modalText}
                                        size={25}
                                        fillColor="green"
                                        unfillColor="#FFFFFF"
                                        text={client.name}
                                        innerIconStyle={{ borderWidth: 2 }}
                                        textStyle={{ textDecorationLine: "none" }}
                                        onPress={(isChecked: boolean) => {
                                            insertOrRemoveFromListClients(client.id, isChecked);
                                        }}
                                    />
                                ))}
                            </View>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Fechar modal</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    style={{...styles.btn, backgroundColor: theme === 'dark' ? 'white' : 'black'}}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={{ ...styles.subtitle, color: theme === 'dark' ? 'black' : 'white'}}>Clientes</Text>
                </Pressable>

                <View style={styles.tableView}>
                    <TableTickets />
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    },
    main: {
        flex: 1,
    },
    title: {
        fontSize: 35,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 30,
    },
    btn: {
        borderRadius: 8,
        width: 150,
        height: 64,
        alignItems: "center",
        justifyContent: "center",
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 8
    },
    tableView: {
        flex: 1,
        marginTop: 15
    }
})

export default TicketPanel;