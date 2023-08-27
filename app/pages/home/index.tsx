import { View, Text, Pressable, StyleSheet } from 'react-native';

const Home: React.FC = (props: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 64
                }}>Bem-vindo</Text>
                <Text style={{fontSize: 36}}>Nosso app para gestão de chamados!</Text>
                <View style={styles.spaceBtn}>
                    <Pressable
                        onPress={() => props.navigation.navigate('TicketPanel')}
                    >
                        <Text style={styles.btn}>Chamados</Text>
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
        color: 'white',
        padding: 16,
        borderRadius: 8,
        backgroundColor: 'black',
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 64,
        width: 230
    }
})