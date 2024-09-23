import Login from "./screens/login/login.jsx";
import Registro from "./screens/registro/registro.jsx";
import Registro2 from "./screens/registro2/registro2.jsx";
import AbaHome from "./screens/aba-home/aba-home.jsx";
import Cardapio from "./screens/cardapio_chocolates/cardapio_chocolates.jsx";
import DetalheProduto from "./screens/detalhe-produto/detalhe-produto.jsx";
import Checkout from "./screens/checkout/checkout.jsx";
import AbaFavoritos from "./screens/aba-favoritos/aba-favoritos.jsx";
import cardapio_Embalagens from "./screens/cardapio_Embalagens/cardapio_embalagens.jsx";
import cardapio_chocolates from "./screens/cardapio_chocolates/cardapio_chocolates.jsx";


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Routes() {
    return <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen name="login" component={Login} options={{
                headerShown: false
            }} />

            <Stack.Screen name="registro2" component={Registro2} options={{
                //headerShown: false
                headerShadowVisible: false,
                title: "",
                headerBackTitle: "Voltar"
            }} />

            <Stack.Screen name="registro" component={Registro} options={{
                //headerShown: false
                headerShadowVisible: false,
                title: "",
                headerBackTitle: "Voltar"
            }} />

            <Stack.Screen name="abaHome" component={AbaHome} options={{
                headerShown: false
            }} />

            <Stack.Screen name="abaFavoritos" component={AbaFavoritos} options={{
                headerShown: false
            }} />

            <Stack.Screen name="checkout" component={Checkout} options={{
                headerShown: false
            }} />

            <Stack.Screen name="cardapio_Embalagens" component={cardapio_Embalagens} options={{
                headerShown: false
            }} />

            <Stack.Screen name="cardapio_chocolates" component={cardapio_chocolates} options={{
                headerShown: false
            }} />

        </Stack.Navigator>
    </NavigationContainer>
}

export default Routes;