import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const TicketPanel: React.FC = (props) => {
    const tableHead: string[] = ['', 'Head1', 'Head2', 'Head3'];
    const tableTitle: string[] = ['Title', 'Title2', 'Title3', 'Title4'];
    const tableData: string[][] = [
        ['1', '2', '3'],
        ['a', 'b', 'c'],
        ['1', '2', '3'],
        ['a', 'b', 'c']
    ];

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>Painel de chamados</Text>
                <Text style={styles.subtitle}>Esta é a tela dos chamados</Text>
                <Table style={{marginTop: 40}} borderStyle={{borderWidth: 1}}>
                    <Row data={tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text}/>
                    <TableWrapper style={styles.wrapper}>
                        <Col data={tableTitle} style={styles.titleTable} heightArr={[28,28]} textStyle={styles.text}/>
                        <Rows data={tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text}/>
                    </TableWrapper>
                </Table>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 24,
    },
    main: {
        flex: 1,
        justifyContent: "center",
        maxWidth: 960,
        marginHorizontal: "auto",
    },
    title: {
        fontSize: 64,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 36,
        color: "#38434D",
    },
    head: {  height: 40,  backgroundColor: '#f1f8ff'  },
    wrapper: { flexDirection: 'row' },
    titleTable: { flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 28  },
    text: { textAlign: 'center' }
})

export default TicketPanel;