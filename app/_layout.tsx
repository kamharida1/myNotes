import { Slot } from "expo-router";
import { Provider } from "../src/context/auth";

export default function RootLayout() {
  return (
    // Setup the auth context and render our layout inside of it
    <>
      <Slot />
    </>
  );
}
