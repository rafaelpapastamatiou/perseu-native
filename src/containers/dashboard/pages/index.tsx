import { ScrollView } from "native-base";
import React from "react";

import { Content } from "../../../components/atoms/Content";
import { Spacer } from "../../../components/atoms/Spacer";
import { Card } from "../../../components/molecules/Card";
import { Header } from "../../../components/organisms/Header";
import { colors } from "../../../config/colors";
import { AssetsChart } from "../components/molecules/AssetsChart";
import { AssetsCompositionChart } from "../components/molecules/AssetsCompositionChart";
import { ProfitabilityChart } from "../components/molecules/ProfitabilityChart";

export function Dashboard() {
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

          <Card title="Composição">
            <AssetsCompositionChart
              data={[
                {
                  key: "Ações",
                  value: 50,
                  svg: {
                    fill: colors.goldenYellow,
                  },
                },
                {
                  key: "FIIs",
                  value: 30,
                  svg: {
                    fill: colors.radicalRed,
                  },
                },
                {
                  key: "Renda Fixa",
                  value: 20,
                  svg: {
                    fill: colors.phloxPurple,
                  },
                },
              ]}
            />
          </Card>
        </Content>
      </ScrollView>
    </>
  );
}
