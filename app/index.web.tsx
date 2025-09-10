import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";
import React from 'react';
import { Text } from "react-native";

export default function Index() {
  return (
    <WithSkiaWeb
      // import() uses the default export of MySkiaComponent.tsx
      getComponent={() => import("../Breathe")}
      fallback={<Text>Loading Skia...</Text>}
    />
  );
}