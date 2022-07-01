import React from "react";
import { AreaChart, Grid, YAxis } from "react-native-svg-charts";
import * as shape from "d3-shape";

import { colors } from "../../../../config/colors";
import { HStack } from "native-base";
import { Path } from "react-native-svg";

interface AssetsChartProps {
  data: number[];
}

export function AssetsChart({ data }: AssetsChartProps) {
  const Line = ({ line }: any) => (
    <Path
      key={"line"}
      d={line}
      stroke={colors.turquoiseBlue}
      strokeWidth={2}
      fill={"none"}
    />
  );

  return (
    <HStack h={200}>
      <YAxis
        data={data}
        contentInset={{ bottom: 20, top: 20 }}
        svg={{ fontSize: 10, fill: colors.silver }}
      />
      <AreaChart
        data={data}
        style={{ flex: 1 }}
        contentInset={{ bottom: 20, top: 20 }}
        curve={shape.curveNatural}
        svg={{
          fill: colors.turquoiseBlue,
          fillOpacity: 0.5,
        }}
      >
        <Grid />
        <Line />
      </AreaChart>
    </HStack>
  );
}
