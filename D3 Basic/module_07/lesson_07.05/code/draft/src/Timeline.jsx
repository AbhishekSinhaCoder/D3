import React from "react"
import PropTypes from "prop-types"
import * as d3 from "d3"

import Chart from "./Chart/Chart"
import Line from "./Chart/Line"
import Axis from "./Chart/Axis-naive"
import { useChartDimensions, accessorPropsType } from "./Chart/utils";

const formatDate = d3.timeFormat("%-b %-d")

const Timeline = ({ data, xAccessor, yAccessor, label }) => {
  const [ref, dms] = useChartDimensions()

  return (
    <div className="Timeline" ref={ref}>
      <Chart dimensions={dms}>
      </Chart>
    </div>
  )
}

Timeline.propTypes = {
  data: PropTypes.array,
  xAccessor: accessorPropsType,
  yAccessor: accessorPropsType,
  label: PropTypes.string,
}

Timeline.defaultProps = {
  xAccessor: d => d.x,
  yAccessor: d => d.y,
}

export default Timeline
