'use client'
// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from '@nivo/line'
import { Card } from '../ui/card'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data /* see data tab */ }) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        colors={{ scheme: 'category10' }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ theme: 'labels.text.fill' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-11}
        areaOpacity={0}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[]}
    />
)

const Line = () => {
      const data = [
        {
          id: "japan",
          color: "hsl(111, 70%, 50%)",
          data: [
            {
              x: "plane",
              y: 59,
            },
            {
              x: "helicopter",
              y: 236,
            },
            {
              x: "boat",
              y: 262,
            },
            {
              x: "train",
              y: 55,
            },
            {
              x: "subway",
              y: 18,
            },
            {
              x: "bus",
              y: 270,
            },
            {
              x: "car",
              y: 171,
            },
            {
              x: "moto",
              y: 51,
            },
            {
              x: "bicycle",
              y: 33,
            },
            {
              x: "horse",
              y: 175,
            },
            {
              x: "skateboard",
              y: 69,
            },
            {
              x: "others",
              y: 280,
            },
          ],
        },
        {
          id: "france",
          color: "hsl(89, 70%, 50%)",
          data: [
            {
              x: "plane",
              y: 86,
            },
            {
              x: "helicopter",
              y: 18,
            },
            {
              x: "boat",
              y: 256,
            },
            {
              x: "train",
              y: 24,
            },
            {
              x: "subway",
              y: 287,
            },
            {
              x: "bus",
              y: 291,
            },
            {
              x: "car",
              y: 112,
            },
            {
              x: "moto",
              y: 274,
            },
            {
              x: "bicycle",
              y: 36,
            },
            {
              x: "horse",
              y: 249,
            },
            {
              x: "skateboard",
              y: 49,
            },
            {
              x: "others",
              y: 2,
            },
          ],
        },
        {
          id: "us",
          color: "hsl(276, 70%, 50%)",
          data: [
            {
              x: "plane",
              y: 216,
            },
            {
              x: "helicopter",
              y: 197,
            },
            {
              x: "boat",
              y: 61,
            },
            {
              x: "train",
              y: 72,
            },
            {
              x: "subway",
              y: 250,
            },
            {
              x: "bus",
              y: 160,
            },
            {
              x: "car",
              y: 159,
            },
            {
              x: "moto",
              y: 292,
            },
            {
              x: "bicycle",
              y: 231,
            },
            {
              x: "horse",
              y: 134,
            },
            {
              x: "skateboard",
              y: 53,
            },
            {
              x: "others",
              y: 196,
            },
          ],
        },
        {
          id: "germany",
          color: "hsl(111, 70%, 50%)",
          data: [
            {
              x: "plane",
              y: 119,
            },
            {
              x: "helicopter",
              y: 50,
            },
            {
              x: "boat",
              y: 55,
            },
            {
              x: "train",
              y: 46,
            },
            {
              x: "subway",
              y: 228,
            },
            {
              x: "bus",
              y: 148,
            },
            {
              x: "car",
              y: 135,
            },
            {
              x: "moto",
              y: 297,
            },
            {
              x: "bicycle",
              y: 250,
            },
            {
              x: "horse",
              y: 21,
            },
            {
              x: "skateboard",
              y: 222,
            },
            {
              x: "others",
              y: 270,
            },
          ],
        },
        {
          id: "norway",
          color: "hsl(322, 70%, 50%)",
          data: [
            {
              x: "plane",
              y: 87,
            },
            {
              x: "helicopter",
              y: 186,
            },
            {
              x: "boat",
              y: 145,
            },
            {
              x: "train",
              y: 283,
            },
            {
              x: "subway",
              y: 176,
            },
            {
              x: "bus",
              y: 17,
            },
            {
              x: "car",
              y: 58,
            },
            {
              x: "moto",
              y: 75,
            },
            {
              x: "bicycle",
              y: 134,
            },
            {
              x: "horse",
              y: 237,
            },
            {
              x: "skateboard",
              y: 183,
            },
            {
              x: "others",
              y: 248,
            },
          ],
        },
      ];
  return (
      <Card className="w-full" >
            <div className='h-[300px] min-w-full self-center '>
                  <MyResponsiveLine data={data}/>
            </div>
      </Card>
  )
}

export default Line