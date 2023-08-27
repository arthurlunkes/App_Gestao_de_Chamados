import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const TicketPanel: React.FC = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>Painel de chamados</Text>
                <Text style={styles.subtitle}>Esta é a tela dos chamados</Text>
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
})

export default TicketPanel;