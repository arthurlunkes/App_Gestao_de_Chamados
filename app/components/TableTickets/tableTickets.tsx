import {View, StyleSheet, ScrollView, useColorScheme } from "react-native";
import { Cell, Row, Table, TableWrapper} from "react-native-table-component";
import React, { useState, useEffect } from "react";

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

interface Props {
    Tickets: Ticket[];
    Clients: Client[];
    Modules: Module[];
}

const tableTickets: React.FC<Props> = ( { Tickets, Clients, Modules } : Props ) => {
    const theme = useColorScheme();
    const [ tickets, setTickets ] = useState<Ticket[]>(Tickets);
    const tableHead: string[] = [ 'Título', 'Data de abertura', 'Data de fechamento', 'Cliente', 'Módulo'];

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
                            <TableWrapper key={index} style={{...styles.row, backgroundColor: theme === 'dark' ? '#ccc' : '#bbb'}}>
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
        backgroundColor: '#fff',
        height: '100%',
        marginBottom: 50
    },
    head: {
        height: 50,
        backgroundColor: '#808B97'
    },
    text: {
        margin: 6,
        textAlign: 'center',
        fontSize: 11,
    },
    row: {
        flexDirection: 'row'
    },
});

export default tableTickets;
