import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { token_mode } from "../theme";
import { mockLineData as data } from "../data/mockData";

const Tooltip = ({ point }) => (
    <div>
      <div>Value:{point.data.x}</div>
      <div>Year: {point.data.y}</div>
    </div>
  );

const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
    const theme = useTheme();
    const colors = token_mode(theme.palette.mode);
  
    return (<ResponsiveLine
        data={data}
        theme={{
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
            tooltip: {
              container: {
                color: colors.primary[500],
              },
            },
          }}
        colors={isDashboard ? { datum: "color" } : { scheme: "accent" }} 
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'linear' }}
        yScale={{
            type: 'point',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'ROI',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 2,
            tickRotation: 0,
            legend: 'Year',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        tooltip={Tooltip}
        lineWidth={5}
        pointSize={9}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        areaOpacity={0.3}
        useMesh={false}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: '#999',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: '#999',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />);
}

export default LineChart;