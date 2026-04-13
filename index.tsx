import { Redirect } from "expo-router";

export default function Index() {
  /**
   * Cette ligne indique à Expo Router de ne pas afficher de contenu ici,
   * mais de renvoyer immédiatement l'utilisateur vers l'écran de connexion.
   */
  return <Redirect href="/connexion" />;
}
