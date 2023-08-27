import {View, StyleSheet, ScrollView, useColorScheme } from "react-native";
import {Col, Cell, Row, Table, TableWrapper} from "react-native-table-component";
import React, { useState, useEffect } from "react";
import { getTickets } from "../../services/axiosService";

interface Client {
    id: number;
    name: string;
}

interface Module {
    id: number;
    name: string;
}

interface Ticket {
    id: number;
    title: string;
    dateOpen: string;
    dateClose: string;
    client: Client;
    module: Module;
}

const tableTickets: React.FC = ( props ) => {
    const theme = useColorScheme();
    const [ year, setYear ] = useState(0);
    const [ month, setMonth ] = useState(0);
    const [ tickets, setTickets ] = useState<Ticket[]>([]);
    const tableHead: string[] = ['ID', 'Título', 'Data de abertura', 'Data de fechamento', 'Cliente', 'Módulo'];

    useEffect(() => {
        getTickets().then((response) => {
            setTickets(response.data);
        }).catch((error) => {
            console.warn("erro: ", error.message);
        })
    } , []);

    const formatDate = (date: string) => {
        const [year, month, day] = date.split('-');
        return `${day}/${month}/${year}`;
    }

    return (
        <View style={styles.container}>
            <Table borderStyle={{borderColor: 'black'}}>
                <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                <ScrollView>
                    {
                        tickets.map((ticket, index) => (
                            <TableWrapper key={index} style={{...styles.row, backgroundColor: theme === 'dark' ? '#ccc' : 'black'}}>
                                <Cell data={ticket.id} textStyle={styles.text}/>
                                <Cell data={ticket.title} textStyle={styles.text}/>
                                <Cell data={formatDate(ticket.dateOpen)} textStyle={styles.text}/>
                                <Cell data={formatDate(ticket.dateClose)} textStyle={styles.text}/>
                                <Cell data={ticket.client.name} textStyle={styles.text}/>
                                <Cell data={ticket.module.name} textStyle={styles.text}/>
                            </TableWrapper>
                        ))
                    }
                </ScrollView>
            </Table>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 380,
        backgroundColor: '#fff',
        marginTop: 40,
        marginBottom: 50
    },
    head: { height: 50, backgroundColor: '#808B97' },
    text: { margin: 6, textAlign: 'center', fontSize: 16 },
    row: { flexDirection: 'row' },
});

export default tableTickets;