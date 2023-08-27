import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import TableTickets from "../../components/TableTickets/tableTickets";

const TicketPanel: React.FC = (props) => {
    const theme = useColorScheme();

    return (
        <View style={ {...styles.container, backgroundColor: theme === 'dark' ? 'black' : 'white'}}>
            <View style={styles.main}>
                <Text style={{ ...styles.title, color: theme === 'dark' ? 'white' : 'black'}}>Painel de chamados</Text>
                <TableTickets />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 10,
    },
    main: {
        flex: 1,
        justifyContent: "center",
        maxWidth: 960,
        marginHorizontal: "auto",
    },
    title: {
        fontSize: 50,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 36,
        color: "#38434D",
    }
})

export default TicketPanel;