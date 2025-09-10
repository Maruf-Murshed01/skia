import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";
import { Text } from "react-native";

export default function Index() {
  return (
    <WithSkiaWeb
      opts={{
        locateFile: (file: string) =>
          `https://cdn.jsdelivr.net/npm/canvaskit-wasm@0.40/bin/full/${file}`,
      }}
      getComponent={() => import("../Breathe")}
      fallback={<Text style={{ textAlign: "center" }}>Loading Skia...</Text>}
    />
  );
}