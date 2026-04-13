import {
    FontAwesome,
    Ionicons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function RegisterScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo / Icône Panier Scan */}
      <View style={styles.logoContainer}>
        <MaterialCommunityIcons name="cart-scanner" size={80} color="#2F5D8C" />
      </View>

      <Text style={styles.title}>Bonjour à vous !</Text>
      <Text style={styles.subtitle}>Vos courses en un clique !</Text>

      {/* Champ Nom Complet */}
      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="#B0B0B0" />
        <TextInput placeholder="Nom complet" style={styles.input} />
      </View>

      {/* Champ Email */}
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#B0B0B0" />
        <TextInput
          placeholder="Adresse e-mail"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Champ Mot de passe */}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#B0B0B0" />
        <TextInput
          placeholder="Mot de passe"
          style={styles.input}
          secureTextEntry
        />
        <Ionicons name="eye-off-outline" size={20} color="#B0B0B0" />
      </View>

      {/* Champ Confirmer Mot de passe */}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#B0B0B0" />
        <TextInput
          placeholder="Confirmer Mot de passe"
          style={styles.input}
          secureTextEntry
        />
        <Ionicons name="eye-off-outline" size={20} color="#B0B0B0" />
      </View>

      {/* Bouton Créer un compte */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Créer un compte</Text>
      </TouchableOpacity>

      {/* Lien vers Connexion */}
      <TouchableOpacity>
        <Text style={styles.footerText}>
          Vous avez un compte ? <Text style={styles.link}>Se connecter</Text>
        </Text>
      </TouchableOpacity>

      {/* Réseaux Sociaux */}
      <View style={styles.socialContainer}>
        <FontAwesome name="instagram" size={30} color="#C13584" />
        <FontAwesome name="facebook" size={30} color="#4267B2" />
        <FontAwesome name="google" size={30} color="#DB4437" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1E4E8C",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#A0A0A0",
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 55,
    marginBottom: 15,
    width: "100%",
    backgroundColor: "#FAFAFA",
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: "#333",
  },
  button: {
    backgroundColor: "#2F5D8C",
    width: "100%",
    height: 55,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 40,
  },
  link: {
    color: "#2F5D8C",
    fontWeight: "bold",
  },
  socialContainer: {
    flexDirection: "row",
    gap: 30,
  },
});
