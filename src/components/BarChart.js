import { ResponsiveBar } from '@nivo/bar'
import { useTheme } from '@emotion/react'
import { token_mode } from '../theme'
import { mockBarData } from '../data/mockData'

const BarChart = ({ isDashboard = false }) => {
    const theme = useTheme()
    const colors = token_mode(theme.palette.mode)
    return(
        <ResponsiveBar
        data={mockBarData}
        theme={{
          // added
          axis: {
            domain: {
              line: {
                stroke: colors.grey[100],
              },
            },
            legend: {
              text: {
                fill: colors.grey[100],
              },
            },
            ticks: {
              line: {
                stroke: colors.grey[100],
                strokeWidth: 1,
              },
              text: {
                fill: colors.grey[100],
              },
            },
          },
          legends: {
            text: {
              fill: colors.grey[100],
            },
          },
        }}
        keys={["Gold", "Stocks", "Bonds", "Equity"]}
        indexBy="user"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.45
        }
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: 'greens' }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
            {
                match: {
                    id: 'Gold'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Equity'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", "1.6"]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? undefined : "Clients", // changed
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? undefined : "Asset Value", // changed
          legendPosition: "middle",
          legendOffset: -40,
        }}
        enableLabel={true}
        borderRadius={20}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        //ToolTip configure here
        tooltip={({ id, value, color }) => (
                        <div style={{padding: 12,color,background: '#222222',}}>
                            <strong>
                            {id}: {value}
                            </strong>
                    </div> )}
        motionConfig={{
            mass: 144,
            tension: 170,
            friction: 26,
            clamp: false,
            precision: 0.01,
            velocity: 0
        }}
        role="application"
        barAriaLabel={function (e) {
          return e.id + ": " + e.formattedValue + " in user: " + e.indexValue;
        }}
      />
    );
  };
  
  export default BarChart;