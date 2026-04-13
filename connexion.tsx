import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router"; // Ajouté pour la navigation
import React from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function ConnexionScreen() {
  return (
    // KeyboardAvoidingView empêche le clavier de cacher les champs sur téléphone
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Logo (icône panier + scan simulé) */}
        <View style={styles.logoContainer}>
          <Ionicons name="barcode-outline" size={80} color="#2F5D8C" />
        </View>

        {/* Texte */}
        <Text style={styles.title}>C’est parti !</Text>
        <Text style={styles.subtitle}>
          Veuillez vous connecter sur notre application afin de bénéficier de
          nos nombreux services.
        </Text>

        {/* Email */}
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#999" />
          <TextInput
            placeholder="Adresse e-mail"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#999" />
          <TextInput
            placeholder="Mot de passe"
            style={styles.input}
            secureTextEntry
          />
          <TouchableOpacity>
            <Ionicons name="eye-off-outline" size={20} color="#999" />
          </TouchableOpacity>
        </View>

        {/* Mot de passe oublié */}
        <TouchableOpacity>
          <Text style={styles.forgot}>Mot de passe oublié?</Text>
        </TouchableOpacity>

        {/* Bouton Connexion */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Se Connecter</Text>
        </TouchableOpacity>

        {/* Inscription - LIEN VERS LA PAGE INSCRIPTION */}
        <Text style={styles.register}>
          Avez-vous un compte ?{" "}
          <Link href="/(tabs)/inscription" asChild>
            <TouchableOpacity>
              <Text style={styles.link}>S’inscrire</Text>
            </TouchableOpacity>
          </Link>
        </Text>

        {/* Réseaux sociaux */}
        <View style={styles.socials}>
          <FontAwesome name="instagram" size={28} color="#E1306C" />
          <FontAwesome name="facebook" size={28} color="#1877F2" />
          <FontAwesome name="google" size={28} color="#DB4437" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F5F5F5",
    padding: 25,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2F5D8C",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    textAlign: "center",
    color: "#777",
    fontSize: 14,
    marginBottom: 35,
    paddingHorizontal: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EDEDED",
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 55,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: "#333",
    fontSize: 16,
  },
  forgot: {
    color: "#2F5D8C",
    textAlign: "right",
    marginBottom: 25,
    fontSize: 14,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#3D628A",
    height: 55,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    elevation: 3, // Petit effet d'ombre sur Android
    shadowColor: "#000", // Ombre sur iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  register: {
    textAlign: "center",
    marginBottom: 25,
    fontSize: 14,
    color: "#333",
  },
  link: {
    color: "#2F5D8C",
    fontWeight: "bold",
  },
  socials: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 25,
    marginTop: 10,
  },
});
