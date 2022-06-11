import { ScrollView } from "native-base";
import React from "react";

import { Content } from "../../../components/atoms/Content";
import { Spacer } from "../../../components/atoms/Spacer";
import { Card } from "../../../components/molecules/Card";
import { Header } from "../../../components/organisms/Header";
import { colors } from "../../../config/colors";
import { AssetsChart } from "../components/molecules/AssetsChart";
import { WalletCompositionByTypeChart } from "../components/molecules/WalletCompositionByTypeChart";
import { ProfitabilityChart } from "../components/molecules/ProfitabilityChart";
import { useWalletCompositionByType } from "../hooks/useWalletCompositioByType";
import { useWalletComposition } from "../hooks/useWalletComposition";
import { WalletCompositionChart } from "../components/molecules/WalletCompositionChart";

const colorsArray = [
  colors.goldenYellow,
  colors.phloxPurple,
  colors.radicalRed,
  colors.limeGreen,
  colors.turquoiseBlue,
  colors.silver
]

export function Dashboard() {
  const {
    data: composition = [],
  } = useWalletComposition()

  const {
    data: compositionByType = [],
  } = useWalletCompositionByType()

  const compositionByTypeChartData = compositionByType.map(
    ({ type, percentage }, i) => ({
      key: type,
      value: percentage,
      label: type,
      svg: {
        fill: colorsArray[i]
      },
    })
  )

  const compositionChartData = composition.map(
    ({ symbol, percentage }, i) => ({
      label: symbol,
      value: percentage,
    })
  )
  return (
    <>
      <Header title="Dashboard" />

      <ScrollView>
        <Content>
          <Card title="Rentabilidade" subtitle="(no último ano)">
            <ProfitabilityChart
              data={[
                {
                  data: [0, 1.2, -0.8, 2.1, 4.3, 5],
                },
                {
                  data: [0, -0.1, -0.8, -0.2, 1.8, 3],
                  svg: {
                    stroke: colors.phloxPurple,
                  },
                },
                {
                  data: [0, 2, 2.4, 1.8, 3.9, 16],
                  svg: {
                    stroke: colors.radicalRed,
                  },
                },
              ]}
            />
          </Card>

          <Spacer y={4} />

          <Card title="Patrimônio">
            <AssetsChart data={[0, 100, -200, -400, -100, 500, 800, 1400]} />
          </Card>

          <Spacer y={4} />

          <Card title="Composição por tipo de ativo">
            <WalletCompositionByTypeChart
              data={compositionByTypeChartData}
            />
          </Card>

          <Spacer y={4} />

          <Card title="Composição">
            <WalletCompositionChart
              data={compositionChartData}
            />
          </Card>
        </Content>
      </ScrollView>
    </>
  );
}
