import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Svg, { Polygon, Line, Circle, G, Text as SvgText } from 'react-native-svg';

interface RadarChartProps {
  data: Record<string, number>;
  size?: number;
  maxValue?: number;
  fillColor?: string;
  strokeColor?: string;
  axisColor?: string;
  gridColor?: string;
  labels?: string[];
}

type TextAnchor = 'start' | 'middle' | 'end';

const RadarChart: React.FC<RadarChartProps> = ({
  data,
  size = 300,
  maxValue = 100,
  fillColor = 'rgb(218,195,243)',
  strokeColor = 'rgb(105,121,248)',
  axisColor = '#999999',
  gridColor = '#E0E0E0',
  labels,
}) => {
  const padding = 30; // 减少内边距，让图表更大
  const availableSize = size - padding * 2;
  const center = availableSize / 2 + padding;
  const radius = availableSize * 0.45; // 增大图形半径
  const numberOfSegments = 5; // 五个等级: 0, 25, 50, 75, 100
  
  // 计算多边形的顶点
  const dataPoints = Object.values(data);
  const dataKeys = Object.keys(data);
  
  if (dataPoints.length === 0) {
    return <View style={[styles.container, { width: size, height: size }]} />;
  }

  // 确保我们有足够的数据点来创建一个五边形
  while (dataPoints.length < 5) {
    dataPoints.push(0);
    dataKeys.push(`项目 ${dataPoints.length}`);
  }

  // 如果数据点超过5个，截取前5个
  const points = dataPoints.slice(0, 5);
  const keys = labels || dataKeys.slice(0, 5);

  // 计算多边形的顶点坐标
  const angleStep = (Math.PI * 2) / points.length;
  const polygonPoints: string[] = [];
  const axisEndPoints: Array<{ x: number; y: number }> = [];

  // 计算数据多边形的坐标
  points.forEach((value, index) => {
    const angle = -Math.PI / 2 + index * angleStep; // 从顶部开始
    const normalizedValue = Math.min(value, maxValue) / maxValue;
    const x = center + radius * normalizedValue * Math.cos(angle);
    const y = center + radius * normalizedValue * Math.sin(angle);
    polygonPoints.push(`${x},${y}`);
  });

  // 计算轴线的坐标
  points.forEach((_, index) => {
    const angle = -Math.PI / 2 + index * angleStep; // 从顶部开始
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    axisEndPoints.push({ x, y });
  });

  // 生成网格线
  const gridLines = [];
  for (let i = 1; i <= numberOfSegments; i++) {
    const gridPoints = [];
    const gridRadius = (radius * i) / numberOfSegments;
    
    for (let j = 0; j < points.length; j++) {
      const angle = -Math.PI / 2 + j * angleStep;
      const x = center + gridRadius * Math.cos(angle);
      const y = center + gridRadius * Math.sin(angle);
      gridPoints.push(`${x},${y}`);
    }
    
    gridLines.push(
      <Polygon
        key={`grid-${i}`}
        points={gridPoints.join(' ')}
        fill="none"
        stroke={gridColor}
        strokeWidth={1}
      />
    );
  }

  const labelPositions = [
    // 顶部
    {
      x: center,
      y: padding,
      textAnchor: 'middle' as TextAnchor,
      text: keys[0]
    },
    // 右上
    {
      x: center + radius - 10,
      y: center - radius/2 + 15,
      textAnchor: 'start' as TextAnchor,
      text: keys[1]
    },
    // 右下
    {
      x: center + radius - 50,
      y: center + radius/2 + 50,
      textAnchor: 'start' as TextAnchor,
      text: keys[2]
    },
    // 左下
    {
      x: center - radius + 50,
      y: center + radius/2 + 50,
      textAnchor: 'end' as TextAnchor,
      text: keys[3]
    },
    // 左上
    {
      x: center - radius + 9,
      y: center - radius/2 + 17,
      textAnchor: 'end' as TextAnchor,
      text: keys[4]
    }
  ];

  // 生成刻度值
  const scaleValues = [];
  for (let i = 1; i < numberOfSegments; i += 1) {
    const value = Math.round((maxValue * i) / numberOfSegments);
    scaleValues.push(
      <SvgText
        key={`scale-${i}`}
        x={center}
        y={center - (radius * i) / numberOfSegments}
        fontSize="10"
        fill="#8E8E93"
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        {value}
      </SvgText>
    );
  }

  return (
    <View style={[styles.container, { width: size, height: size, marginTop: -15 }]}>
      <Svg width={size} height={size}>
        {/* 网格线 */}
        {gridLines}
        
        {/* 轴线 */}
        {axisEndPoints.map((point, index) => (
          <Line
            key={`axis-${index}`}
            x1={center}
            y1={center}
            x2={point.x}
            y2={point.y}
            stroke={axisColor}
            strokeWidth={1}
          />
        ))}
        
        {/* 刻度值 */}
        {scaleValues}
        
        {/* 数据多边形 */}
        <Polygon
          points={polygonPoints.join(' ')}
          fill={fillColor}
          fillOpacity={0.6}
          stroke={strokeColor}
          strokeWidth={2}
        />
        
        {/* 数据点 */}
        {polygonPoints.map((point, index) => {
          const [x, y] = point.split(',').map(Number);
          return (
            <Circle
              key={`point-${index}`}
              cx={x}
              cy={y}
              r={3}
              fill={strokeColor}
            />
          );
        })}
        
        {/* 标签 */}
        {labelPositions.map((label, index) => (
          <SvgText
            key={`label-${index}`}
            x={label.x}
            y={label.y}
            fontSize="13"
            fontWeight="bold"
            fill="#333333"
            textAnchor={label.textAnchor}
          >
            {label.text}
          </SvgText>
        ))}
      </Svg>
      <Text style={[styles.chartLabel, { color: strokeColor, bottom: center - radius * 1.17 }]}>能力分布</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 5,
  },
  chartLabel: {
    position: 'absolute',
    fontSize: 13,
  },
});

export default RadarChart;