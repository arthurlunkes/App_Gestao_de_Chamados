import { View, Text, Pressable, StyleSheet, useColorScheme } from 'react-native';

const Home: React.FC = (props: any) => {
    const colorScheme = useColorScheme();

    return (
        <View style={{ ...styles.container, backgroundColor: colorScheme === 'dark' ? 'black' : 'white'}}>
            <View style={styles.main}>
                <Text style={{
                    color: colorScheme === 'dark' ? 'white' : 'black',
                    fontWeight: 'bold',
                    fontSize: 64
                }}>Bem-vindo</Text>
                <Text style={{
                    color: colorScheme === 'dark' ? 'white' : 'black',
                    fontSize: 36
                }}>Nosso app para gestão de chamados!</Text>
                <View style={styles.spaceBtn}>
                    <Pressable
                        style={{...styles.btn, backgroundColor: colorScheme === 'dark' ? 'white' : 'black'}}
                        onPress={() => props.navigation.navigate('TicketPanel')}
                    >
                        <Text style={{ ...styles.txtBtn, color: colorScheme === 'dark' ? 'black' : 'white'}}>Chamados</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        padding: 24
    },
    title: {
        fontSize: 64,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 36
    },
    spaceBtn: {
        marginTop: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btn: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 16,
        borderRadius: 8,
        height: 64,
        width: 230
    },
    txtBtn: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})