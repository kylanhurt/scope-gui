// import external modules
import React, { PureComponent, createRef } from "react"
import PropTypes from "prop-types"
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"

class TotalRevenueStatics extends PureComponent {
  constructor(props) {
    super(props)
    this.chartDB = createRef()
  }
  componentDidMount() {
    // template begin
    am4core.useTheme(am4themes_animated)
    // template end

    // Create chart instance
    let chart = am4core.create(this.chartDB.current, am4charts.PieChart)

    // Add data
    chart.data = [
      {
        sector: "New",
        size: 8,
      },
      {
        sector: "Referral",
        size: 14.6,
      },
    ]

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries())
    pieSeries.dataFields.value = "size"
    pieSeries.dataFields.category = "sector"
    pieSeries.labels.template.disabled = true
    pieSeries.ticks.template.disabled = true
    pieSeries.colors.step = 2
    // Add label
    chart.innerRadius = 85
    let label = chart.seriesContainer.createChild(am4core.Label)
    label.text = "55"
    label.horizontalCenter = "middle"
    label.verticalCenter = "middle"
    label.fontSize = 50
    this.chart = chart
  }
  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose()
    }
  }
  render() {
    return (
      <div
        ref={this.chartDB}
        style={{ width: this.props.width, height: this.props.height }}
      />
    )
  }
}
TotalRevenueStatics.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
}
TotalRevenueStatics.defaultProps = {
  width: "100%",
}

export default TotalRevenueStatics
