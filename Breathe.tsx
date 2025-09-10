import { Canvas, Circle, Group } from "@shopify/react-native-skia";
import { Text, View } from "react-native";

export default function Breathe() {
  const width = 256;
  const height = 256;
  const r = width * 0.33;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is Maruf, Murshed, 1902021</Text>
      <Canvas style={{ width, height }}>
      <Group blendMode="multiply">
        <Circle cx={r} cy={r} r={r} color="cyan" />
        <Circle cx={width - r} cy={r} r={r} color="magenta" />
        <Circle cx={width / 2} cy={width - r} r={r} color="yellow" />
      </Group>
    </Canvas>
    </View>
  );
}
