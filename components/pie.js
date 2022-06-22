import { ResponsivePie } from "@nivo/pie";
import { animated } from "@react-spring/web";
const MyResponsivePie = ({ data }) => {
  return (
    <>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        valueFormat={(value) =>
          `${Number(value).toLocaleString("ru-RU", {
            minimumFractionDigits: 2,
          })} ₽`
        }
        arcLabelsComponent={({ label, style }) => (
          <animated.g transform={style.transform} style={{ pointerEvents: "none" }}>
            <text
              textAnchor="middle"
              dominantBaseline="central"
              fill={style.textColor}
              style={{
                fontSize: 12,
                fontWeight: 800,
              }}
            >
              {label}
            </text>
          </animated.g>
        )}
        padAngle={0.7}
        cornerRadius={7}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#FFFFFF"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(225, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
      />
    </>
  );
};

export default MyResponsivePie;
