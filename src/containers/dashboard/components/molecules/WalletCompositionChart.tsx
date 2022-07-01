import React from "react";
import { View } from "react-native";
import { Text } from "react-native-svg";
import { BarChart, Grid, YAxis } from "react-native-svg-charts";

import { colors } from "../../../../config/colors";

interface WalletCompositionChartProps {
  data: { value: number; label: string; }[];
}

interface LabelsProps {
  x: (param: number) => any;
  y: (param: number) => any;
  bandwidth: number;
  data: { value: number; label: string; }[];
}

const CUT_OFF = 50

function Labels({
  data = [],
  x,
  y,
  bandwidth
}: LabelsProps) {
  return (
    <>
      {data.map(({ value }, i) => (
        <Text
          key={i}
          x={value > CUT_OFF ? x(0) + 10 : x(value) + 10}
          y={y(i) + (bandwidth / 2)}
          fontSize={14}
          fill={value > CUT_OFF ? "white" : colors.radicalRed}
          alignmentBaseline='middle'
        >
          {value}%
        </Text>
      ))}
    </>
  )
}

export function WalletCompositionChart({
  data
}: WalletCompositionChartProps) {

  return (
    <View style={{ flexDirection: 'row', height: 200, paddingVertical: 16 }}>
      <YAxis
        data={data}
        yAccessor={({ index }) => index}
        contentInset={{ top: 20, bottom: 25 }}

        numberOfTicks={data.length}
        formatLabel={(_, i) => data[i] ? `${data[i].label}` : ''}
        svg={{ fill: "white" }}
      />

      <BarChart
        style={{ flex: 1, marginLeft: 8 }}
        data={data}
        horizontal={true}
        yAccessor={({ item }) => item.value}
        svg={{ fill: colors.radicalRed }}
        contentInset={{ top: 10, bottom: 10, left: 10 }}
        gridMin={0}
        spacingInner={0.4}
      >
        <Grid direction={Grid.Direction.VERTICAL} />

        <Labels />
      </BarChart>
    </View>
  )
}
