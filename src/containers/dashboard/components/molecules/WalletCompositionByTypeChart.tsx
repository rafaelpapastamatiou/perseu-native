import React, { useEffect, useMemo, useState } from "react";
import { Text, useWindowDimensions, View } from "react-native";
import { PieChart } from "react-native-svg-charts";
import { colors } from "../../../../config/colors";

type ChartData = {
  key: string;
  label: string;
  value: number;
  svg?: {
    fill?: string;
  };
};

interface WalletCompositionByTypeChartProps {
  data: ChartData[];
}

export function WalletCompositionByTypeChart({ data }: WalletCompositionByTypeChartProps) {
  const [selectedSlice, setSelectedSlice] = useState<ChartData>();

  const [labelWidth, setLabelWidth] = useState<number>(1)

  const deviceWidth = useWindowDimensions().width

  const chartData = useMemo(() => {
    return data.map((slice) => {
      const { key, value, svg } = slice

      return {
        key,
        value,
        svg,
        arc: {
          outerRadius: `${70 + value}%`,
          padAngle: selectedSlice && key === selectedSlice?.key ? 0.3 : 0.1,
        },
        onPress: () =>
          selectedSlice && selectedSlice.key === key
            ? setSelectedSlice(undefined)
            : setSelectedSlice(slice),
      }
    });
  }, [data, selectedSlice]);

  useEffect(() => {
    const firstItem = data[0]

    if (!firstItem) return

    setSelectedSlice(firstItem)
  }, [data])

  return (
    <View style={{ justifyContent: 'center', flex: 1 }}>
      <PieChart
        style={{ height: 220 }}
        outerRadius={"60%"}
        innerRadius={"50%"}
        data={chartData}
      />

      {selectedSlice && (
        <Text
          onLayout={({ nativeEvent: { layout: { width } } }) => {
            setLabelWidth(width)
          }}

          style={{
            position: "absolute",
            left: deviceWidth / 2 - (labelWidth * 1.25),
            textAlign: "center",
            color: selectedSlice.svg?.fill
          }}
        >
          {`${selectedSlice.label} \n ${selectedSlice.value}%`}
        </Text>
      )}
    </View>
  );
}
