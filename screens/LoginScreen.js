import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import darkLogo from './../assets/instalogodark.png';
import colors from './../constants/colors';

function LoginScreen() {
  return (
    <View style={darkStyles.container}>
        <Text style={{...darkStyles.text, fontSize: 15, textAlign: 'center', flex: 1, opacity: 0.95}}>
            Español (México)
        </Text>

        <View style={{
          flexDirection: 'column',
          alignItems: 'center', 
          flex: 1,
          gap: 12,
        }}>
          <Image 
            source={darkLogo}
            style={{
              width: 180,
              height: 60,
              objectFit: 'contain',
              marginBottom: 10,
            }}
          />
          <View style={{
            flexDirection: 'row',
            
          }}>

            <TextInput 
              style={{
                ...darkStyles.text,
                ...darkStyles.input,
              }}
              placeholderTextColor={"#888"}
              placeholder="Número de teléfono, nombre de usuario o correo electrónico"
            />

          </View>
          <View style={{
            flexDirection: 'row',
            
          }}>

            <TextInput 
              style={{
                ...darkStyles.text,
                ...darkStyles.input,
              }}
              placeholder="Contraseña"
              placeholderTextColor={"#888"}
            />

          </View>

          <TouchableOpacity style={{
            flexDirection: "row",
            backgroundColor: colors.info,
            padding: 10,
            borderRadius: 5,

          }}>
            <Text style={{
              fontSize: 15,
              ...darkStyles.text,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}>
              Entrar
            </Text>
          </TouchableOpacity>
          <Text style={{
            ...darkStyles.text,
            fontSize: 14,
            textAlign: 'center',
          }}>
            Obtener ayuda para iniciar sesión
          </Text>

        </View>
        <View style={{
          borderColor: "#262626",
          borderTopWidth: 1,
          padding: 12,
          textAlign: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
          <Text style={{...darkStyles.text, fontSize: 14}}>
            No tienes una cuenta? <Text style={{ fontWeight: 'bold', ...darkStyles
              .text
            }}>Regístrate</Text>
          </Text>
        </View>
    </View>   
  );
}

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20
  },
  text: {
    color: "#fff"
  },
  input: {
    backgroundColor: "#333",
    flex: 1,
    color: "#fff",
    borderRadius: 5,
    flexDirection: 'row',
    padding: 6,
    fontSize: 14,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default LoginScreen;