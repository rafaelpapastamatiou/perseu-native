import { Flex, HStack } from "native-base";
import React, { useMemo } from "react";
import { Grid, LineChart, YAxis } from "react-native-svg-charts";
import * as shape from "d3-shape";

import { colors } from "../../../../config/colors";

type ChartData = {
  data: number[];
  svg?: {
    stroke?: string;
    fill?: string;
  };
};

interface ProfitabilityChartProps {
  data: ChartData[];
}

export function ProfitabilityChart({ data }: ProfitabilityChartProps) {
  const limit = useMemo(() => {
    const values = data.map((line) => line.data).flat(1);

    const max = Math.max(...values.map((v) => v));
    const min = Math.min(...values.map((v) => v));

    return {
      max: Math.ceil(max / 5) * 5,
      min: Math.floor(min / 5) * 5,
    };
  }, [data]);

  const numberOfTicks = useMemo(() => {
    const ratio = Math.max(limit.max, Math.abs(limit.min)) / 5;

    return ratio > 1 ? ratio : 2;
  }, [limit]);

  return (
    <HStack h={220} p={2}>
      <YAxis
        data={data}
        style={{ marginBottom: 0 }}
        contentInset={{ top: 10, bottom: 10 }}
        svg={{ fontSize: 10, fill: colors.silver }}
        max={limit.max}
        min={limit.min}
        numberOfTicks={numberOfTicks}
        formatLabel={(value) => `${value} %`}
      />

      <Flex flex={1} ml={2}>
        <LineChart
          data={data}
          contentInset={{ top: 10, bottom: 10 }}
          style={{
            flex: 1,
          }}
          svg={{
            strokeWidth: 2,
            stroke: colors.goldenYellow,
          }}
          yMax={limit.max}
          yMin={limit.min}
          numberOfTicks={numberOfTicks}
          curve={shape.curveNatural}
        >
          <Grid
            svg={{
              stroke: colors.eirieBlack,
            }}
          />
        </LineChart>
      </Flex>
    </HStack>
  );
}
