import React, { useMemo, useState } from "react";
import { PieChart } from "react-native-svg-charts";

type ChartData = {
  key: string;
  value: number;
  svg?: {
    fill?: string;
  };
};

interface AssetsCompositionChartProps {
  data: ChartData[];
}

export function AssetsCompositionChart({ data }: AssetsCompositionChartProps) {
  const [selectedSlice, setSelectedSlice] = useState<string>();

  const chartData = useMemo(() => {
    return data.map(({ key, value, svg }) => ({
      key,
      value,
      svg,
      arc: {
        outerRadius: `${70 + value}%`,
        padAngle: key === selectedSlice ? 0.3 : 0.1,
      },
      onPress: () =>
        selectedSlice === key
          ? setSelectedSlice(undefined)
          : setSelectedSlice(key),
    }));
  }, [data, selectedSlice]);

  return (
    <PieChart
      style={{ height: 220 }}
      outerRadius={"80%"}
      innerRadius={"45%"}
      data={chartData}
    />
  );
}
