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
import { useWalletProfitability } from "../hooks/useWalletDailyProfitability";
import { useWalletEquity } from "../hooks/useWalletDailyEquity";

const colorsArray = [
  colors.goldenYellow,
  colors.phloxPurple,
  colors.radicalRed,
  colors.limeGreen,
  colors.turquoiseBlue,
  colors.silver
]

const priceFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })

export function Dashboard() {
  const {
    data: composition = [],
  } = useWalletComposition()

  const {
    data: compositionByType = [],
  } = useWalletCompositionByType()

  const { data: profitability = [] } = useWalletProfitability()

  const { data: equity = [] } = useWalletEquity()

  const profitabilityChartData = profitability.map(
    ({ percentage }) => percentage
  )

  const equityChartData = equity.map(
    ({ total }) => total
  )

  const compositionByTypeChartData = compositionByType.map(
    ({ type, percentage }, i) => ({
      key: type,
      value: percentage,
      label: type,
      svg: {
        fill: colorsArray[i]
      },
    })
  ).sort((a, b) => b.value - a.value)

  const compositionChartData = composition.map(
    ({ symbol, percentage }, i) => ({
      label: symbol,
      value: percentage,
    })
  ).sort((a, b) => b.value - a.value)

  const lastEquity = equityChartData[equityChartData.length - 1]
  const equityValue = lastEquity
    ? priceFormatter.format(lastEquity)
    : undefined

  const lastProfitability = profitabilityChartData[profitabilityChartData.length - 1]
  const profitabilityValue = lastProfitability
    ? `${lastProfitability}%`
    : undefined

  return (
    <>
      <Header title="Dashboard" />

      <ScrollView>
        <Content>
          <Card
            title="Rentabilidade"
            subtitle={profitabilityValue}
          >
            <ProfitabilityChart
              data={[
                {
                  data: [0, ...profitabilityChartData],
                },
              ]}
            />
          </Card>

          <Spacer y={4} />

          <Card
            title={`Patrimônio`}
            subtitle={equityValue}
          >
            <AssetsChart data={[0, ...equityChartData]} />
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
