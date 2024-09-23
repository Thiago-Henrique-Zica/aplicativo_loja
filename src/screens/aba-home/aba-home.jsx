import { Image, View, Text, ScrollView } from "react-native";
import { styles } from "./aba-home.style.js";
import icons from "../../constants/icons.js";
import { SafeAreaView } from "react-native-safe-area-context";
import TextBox from "../../components/textbox/textbox.jsx";
import { useState } from "react";
import { banners, restaurantes } from "../../constants/dados.js";
import Banners from "../../components/banners/banners.jsx";
import Restaurante from "../../components/restaurante/restaurante.jsx";

function AbaHome(props) {

    function OpenCardapio() {
        props.navigation.navigate("cardapio");
    }

    const [busca, setBusca] = useState("");

    return <SafeAreaView style={styles.container}>
        <View style={styles.headerBar}>
            <Image source={icons.logo} style={styles.logo} />
            <Image source={icons.cart} style={styles.cart} />
        </View>

        <View style={styles.busca}>
            <TextBox placeholder="O que vamos pedir hoje?"
                onChangeText={(texto) => setBusca(texto)}
                value={busca} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>

            <Banners dados={banners} />

            {
                restaurantes.map((restaurante, index) => {
                    return <View key={index}>
                        <Restaurante logotipo={restaurante.logotipo}
                            nome={restaurante.nome_1}
                            endereco={restaurante.endereco}
                            icone={icons.favoritoFull}
                            onPress={() => {
                                OpenCardapio();
                                props.navigation.navigate("cardapio_Embalagens");
                            }}
                            />
                </View>
                })
            }
            
            

        </ScrollView>

    </SafeAreaView>
}

export default AbaHome;