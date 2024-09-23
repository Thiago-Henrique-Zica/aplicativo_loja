import { Image, TouchableOpacity, View, Text, TextInput, TouchableOpacityBase } from "react-native";
import { styles } from "./detalhe-produto.style.js";
import icons from "../../constants/icons.js";
import Button from "../../components/button/button.jsx";

function DetalheProduto(props) {
    return <View style={styles.container}>
        <View style={styles.containerFoto}>
            <Image source={icons.produto} style={styles.foto} resizeMode="cover" />

            <TouchableOpacity style={styles.containerBack} onPress={props.navigation.goBack}>
                <Image source={icons.back2} style={styles.back} />
            </TouchableOpacity>
        </View>

        <View style={styles.header}>
            <View style={styles.headerTextos}>
                <Text style={styles.nome}>Copos Descartavéis</Text>
                <Text style={styles.descricao}>Copos Descartavéis marca *** com 50 unidades</Text>
                <Text style={styles.valor}>R$ 19,90</Text>
            </View>
        </View>

        <View style={styles.headerObs}>
            <Text style={styles.descricao}>Observações</Text>
            <TextInput style={styles.multiline}
                multiline={true}
                numberOfLines={5} />
        </View>

        <View style={styles.footer}>
            <TouchableOpacity>
                <Image source={icons.menos} style={styles.imgQtd} />
            </TouchableOpacity>

            <Text style={styles.qtd}>1</Text>

            <TouchableOpacity>
                <Image source={icons.mais} style={styles.imgQtd} />
            </TouchableOpacity>

            <View style={styles.footerBtn}>
                <Button texto="Inserir" />
            </View>
        </View>

    </View>
}

export default DetalheProduto;