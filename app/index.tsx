import React from 'react';
import { Text } from "react-native";
import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";
export default function App() {
  return (
    <WithSkiaWeb
      // import() uses the default export of MySkiaComponent.tsx
      getComponent={() => import("./MySkiaComponent")}
      fallback={<Text>Loading Skia...</Text>}
    />
  );
}