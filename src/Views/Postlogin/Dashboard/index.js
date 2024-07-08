import React from "react";
import { Box, Link, ColumnLayout } from "@cloudscape-design/components";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import Grid from "@cloudscape-design/components/grid";
import ContentLayout from "@cloudscape-design/components/content-layout";
import AreaChart from "@cloudscape-design/components/area-chart";
import BarChart from "@cloudscape-design/components/bar-chart";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Table from "@cloudscape-design/components/table";
import PieChart from "@cloudscape-design/components/pie-chart";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Pagination from "@cloudscape-design/components/pagination";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";
// import "../../../assets/Styles/Header.css"
import Calendar from "@cloudscape-design/components/calendar";
import DeliveryTable from "../DeliveryAgents/DeliveryTable";
import LineChart from "@cloudscape-design/components/line-chart";
import { Padding } from "@mui/icons-material";
const DashboardCards = () => {
  const [value, setValue] = React.useState("");
  const [isCalendarVisible, setIsCalendarVisible] = React.useState(false);

  const handleButtonClick = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };
  const data = [
    { title: "Item A", percentage: 40, value: 40 },
    { title: "Item B", percentage: 25, value: 25 },
    { title: "Item C", percentage: 20, value: 20 },
    { title: "Item D", percentage: 10, value: 10 },
    { title: "Item E", percentage: 5, value: 5 },
  ];
  const [selectedItems, setSelectedItems] = React.useState([
    { name: "Item 2" },
  ]);
  return (
    <>
      <div>
        <ContentLayout
          defaultPadding
          headerVariant="high-contrast"
          header={
            <Header
              variant="h1"
              info={<Link variant="info">Info</Link>}
              description="This is a generic description used in the header."
              actions={
                <Button variant="primary">Button</Button>
              }
            >
              Dashboard
            </Header>
          }
        >
        </ContentLayout>

        <SpaceBetween direction="vertical" size="xl">
        <div className="shadow-lg rounded-2xl">
          <Container>
            <h1 className="font-bold text-2xl pl-4">Admin's Dashboard</h1>
            <ColumnLayout columns={5} variant="default" minColumnWidth={170}>
              <div>
                <Box variant="awsui-key-label">Warehouse Deliveries</Box>
                <span
                  style={{
                    color: "#0958D9",
                    fontSize: 44,
                    fontWeight: "bold",
                    lineHeight: 1.3,
                  }}
                >
                  30
                </span>
              </div>
              <div>
                <Box variant="awsui-key-label">Store Deliveries</Box>
                <span
                  style={{
                    color: "#5F6B7A",
                    fontSize: 44,
                    fontWeight: "bold",
                    lineHeight: 1.3,
                  }}
                >
                  {" "}
                  126{" "}
                </span>
              </div>
              <div>
                <Box variant="awsui-key-label">Customer Deliveries</Box>
                <span
                  style={{
                    color: "#29AD32",
                    fontSize: 44,
                    fontWeight: "bold",
                    lineHeight: 1.3,
                  }}
                >
                  270
                </span>
              </div>
              <div>
                <Box variant="awsui-key-label">Cancelled Deliveries</Box>
                <span
                  style={{
                    color: "#D91515",
                    fontSize: 44,
                    fontWeight: "bold",
                    lineHeight: 1.3,
                  }}
                >
                  23
                </span>
              </div>
              <div>
                <Box variant="awsui-key-label">Returned Deliveries</Box>
                <span
                  style={{
                    color: "#0958D9",
                    fontSize: 44,
                    fontWeight: "bold",
                    lineHeight: 1.3,
                  }}
                >
                  14
                </span>
              </div>
            </ColumnLayout>
          </Container>
          </div>
          <Grid
            gridDefinition={[
              { colspan: { default: 12, xxs: 7 } },
              { colspan: { default: 12, xxs: 5 } }
            ]}
            >
            <div className="shadow-lg rounded-2xl">
            <Container>
              <AreaChart
                series={[
                  {
                    title: "Network 1",
                    type: "area",
                    data: [
                      { x: new Date(1600972200000), y: 114489 },
                      { x: new Date(1600973100000), y: 136935 },
                      { x: new Date(1600974000000), y: 141026 },
                      { x: new Date(1600974900000), y: 123288 },
                      { x: new Date(1600975800000), y: 121956 },
                      { x: new Date(1600976700000), y: 119868 },
                      { x: new Date(1600977600000), y: 132326 },
                      { x: new Date(1600978500000), y: 126879 },
                      { x: new Date(1600979400000), y: 138543 },
                      { x: new Date(1600980300000), y: 144309 },
                      { x: new Date(1600981200000), y: 121118 },
                      { x: new Date(1600982100000), y: 113430 },
                      { x: new Date(1600983000000), y: 135911 },
                      { x: new Date(1600983900000), y: 113126 },
                      { x: new Date(1600984800000), y: 119538 },
                      { x: new Date(1600985700000), y: 124338 },
                      { x: new Date(1600986600000), y: 133884 },
                      { x: new Date(1600987500000), y: 135473 },
                      { x: new Date(1600988400000), y: 131187 },
                      { x: new Date(1600989300000), y: 136176 },
                      { x: new Date(1600990200000), y: 144422 },
                      { x: new Date(1600991100000), y: 115392 },
                      { x: new Date(1600992000000), y: 139307 },
                      { x: new Date(1600992900000), y: 128517 },
                      { x: new Date(1600993800000), y: 107160 },
                      { x: new Date(1600994700000), y: 110283 },
                      { x: new Date(1600995600000), y: 134513 },
                      { x: new Date(1600996500000), y: 111311 },
                      { x: new Date(1600997400000), y: 142686 },
                      { x: new Date(1600998300000), y: 130652 },
                      { x: new Date(1600999200000), y: 149418 },
                      { x: new Date(1601000100000), y: 121923 }
                    ],
                    valueFormatter: function l(e) {
                      return Math.abs(e) >= 1e9
                        ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                        "G"
                        : Math.abs(e) >= 1e6
                          ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                          "M"
                          : Math.abs(e) >= 1e3
                            ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                            "K"
                            : e.toFixed(2);
                    }
                  },
                  {
                    title: "Network 2",
                    type: "area",
                    data: [
                      { x: new Date(1600972200000), y: 126623 },
                      { x: new Date(1600973100000), y: 147035 },
                      { x: new Date(1600974000000), y: 136488 },
                      { x: new Date(1600974900000), y: 149778 },
                      { x: new Date(1600975800000), y: 126710 },
                      { x: new Date(1600976700000), y: 107964 },
                      { x: new Date(1600977600000), y: 131969 },
                      { x: new Date(1600978500000), y: 147045 },
                      { x: new Date(1600979400000), y: 122661 },
                      { x: new Date(1600980300000), y: 112436 },
                      { x: new Date(1600981200000), y: 133167 },
                      { x: new Date(1600982100000), y: 96558 },
                      { x: new Date(1600983000000), y: 122246 },
                      { x: new Date(1600983900000), y: 99248 },
                      { x: new Date(1600984800000), y: 144693 },
                      { x: new Date(1600985700000), y: 149547 },
                      { x: new Date(1600986600000), y: 125133 },
                      { x: new Date(1600987500000), y: 124845 },
                      { x: new Date(1600988400000), y: 102768 },
                      { x: new Date(1600989300000), y: 90708 },
                      { x: new Date(1600990200000), y: 116681 },
                      { x: new Date(1600991100000), y: 133457 },
                      { x: new Date(1600992000000), y: 111090 },
                      { x: new Date(1600992900000), y: 104931 },
                      { x: new Date(1600993800000), y: 133434 },
                      { x: new Date(1600994700000), y: 135491 },
                      { x: new Date(1600995600000), y: 101198 },
                      { x: new Date(1600996500000), y: 93306 },
                      { x: new Date(1600997400000), y: 103043 },
                      { x: new Date(1600998300000), y: 138810 },
                      { x: new Date(1600999200000), y: 113219 },
                      { x: new Date(1601000100000), y: 142304 }
                    ],
                    valueFormatter: function l(e) {
                      return Math.abs(e) >= 1e9
                        ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                        "G"
                        : Math.abs(e) >= 1e6
                          ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                          "M"
                          : Math.abs(e) >= 1e3
                            ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                            "K"
                            : e.toFixed(2);
                    }
                  },
                  {
                    title: "Network 3",
                    type: "area",
                    data: [
                      { x: new Date(1600972200000), y: 10413 },
                      { x: new Date(1600973100000), y: 26582 },
                      { x: new Date(1600974000000), y: 45593 },
                      { x: new Date(1600974900000), y: 65918 },
                      { x: new Date(1600975800000), y: 76223 },
                      { x: new Date(1600976700000), y: 62385 },
                      { x: new Date(1600977600000), y: 83330 },
                      { x: new Date(1600978500000), y: 127209 },
                      { x: new Date(1600979400000), y: 104802 },
                      { x: new Date(1600980300000), y: 145899 },
                      { x: new Date(1600981200000), y: 121375 },
                      { x: new Date(1600982100000), y: 112968 },
                      { x: new Date(1600983000000), y: 145263 },
                      { x: new Date(1600983900000), y: 139562 },
                      { x: new Date(1600984800000), y: 128343 },
                      { x: new Date(1600985700000), y: 122774 },
                      { x: new Date(1600986600000), y: 145396 },
                      { x: new Date(1600987500000), y: 176509 },
                      { x: new Date(1600988400000), y: 201006 },
                      { x: new Date(1600989300000), y: 196538 },
                      { x: new Date(1600990200000), y: 213773 },
                      { x: new Date(1600991100000), y: 205076 },
                      { x: new Date(1600992000000), y: 216369 },
                      { x: new Date(1600992900000), y: 159386 },
                      { x: new Date(1600993800000), y: 238852 },
                      { x: new Date(1600994700000), y: 207500 },
                      { x: new Date(1600995600000), y: 187110 },
                      { x: new Date(1600996500000), y: 314165 },
                      { x: new Date(1600997400000), y: 165653 },
                      { x: new Date(1600998300000), y: 175584 },
                      { x: new Date(1600999200000), y: 230042 },
                      { x: new Date(1601000100000), y: 293879 }
                    ],
                    valueFormatter: function l(e) {
                      return Math.abs(e) >= 1e9
                        ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                        "G"
                        : Math.abs(e) >= 1e6
                          ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                          "M"
                          : Math.abs(e) >= 1e3
                            ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                            "K"
                            : e.toFixed(2);
                    }
                  },
                  {
                    title: "Target",
                    type: "threshold",
                    y: 350000,
                    valueFormatter: function l(e) {
                      return Math.abs(e) >= 1e9
                        ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                        "G"
                        : Math.abs(e) >= 1e6
                          ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                          "M"
                          : Math.abs(e) >= 1e3
                            ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                            "K"
                            : e.toFixed(2);
                    }
                  }
                ]}
                xDomain={[
                  new Date(1600972200000),
                  new Date(1601000100000)
                ]}
                yDomain={[0, 600000]}
                i18nStrings={{
                  xTickFormatter: e =>
                    e
                      .toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: !1
                      })
                      .split(",")
                      .join("\n"),
                  yTickFormatter: function l(e) {
                    return Math.abs(e) >= 1e9
                      ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                      "G"
                      : Math.abs(e) >= 1e6
                        ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                        "M"
                        : Math.abs(e) >= 1e3
                          ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                          "K"
                          : e.toFixed(2);
                  }
                }}
                ariaLabel="Stacked area chart, with threshold"
                height={300}
                hideFilter
                xScaleType="time"
                xTitle="Time (UTC)"
                yTitle="Bytes transferred"
                empty={
                  <Box textAlign="center" color="inherit">
                    <b>No data available</b>
                    <Box variant="p" color="inherit">
                      There is no data available
                    </Box>
                  </Box>
                }
                noMatch={
                  <Box textAlign="center" color="inherit">
                    <b>No matching data</b>
                    <Box variant="p" color="inherit">
                      There is no matching data to display
                    </Box>
                    <Button>Clear filter</Button>
                  </Box>
                }
              />
            </Container>
            </div>
            <div>
             
            
            <DeliveryTable/>
            {/* <Table             
              header={
                <Header
                  // counter={
                  //   selectedItems.length
                  //     ? "(" + selectedItems.length + "/10)"
                  //     : "(10)"
                  // }
                >
                  Delivery Agents
                </Header>
              } 
              renderAriaLive={({
                firstIndex,
                lastIndex,
                totalItemsCount
              }) =>
                `Displaying items ${firstIndex} to ${lastIndex} of ${totalItemsCount}`
              }
              columnDefinitions={[
                {
                  id: "",
                  header: " ",
                  cell: item => (
                    <p>{" "}</p>
                  ),
                  // sortingField: "name",
                  // isRowHeader: true
                },
                {
                  id: "variable",
                  header: "Agent name",
                  cell: item => (
                    <Link href="#">{item.name || "-"}</Link>
                  ),
                  sortingField: "name",
                  isRowHeader: true
                },
                {
                  id: "alt",
                  header: "Working Shift",
                  cell: item => item.alt || "-",
                  sortingField: "alt"
                },
                {
                  id: "description",
                  header: "Total Trips",
                  cell: item => item.description || "-"
                },
                {
                  id: "status",
                  header: "Status",
                  cell: item => item.status || "-"
                }
              ]}
              
              contentDensity="compact"
              enableKeyboardNavigation 
              items={[
                {
                  name: "Item 1",
                  alt: "First",
                  description: "This is the first item",
                  type: "1A",
                  size: "Small",
                  status: "online"
                },
                {
                  name: "Item 2",
                  alt: "Second",
                  description: "This is the second item",
                  type: "1B",
                  size: "Large",
                  status: "online"
                },
                {
                  name: "Item 3",
                  alt: "Third",
                  description: "-",
                  type: "1A",
                  size: "Large",
                  status: "offline"
                },
                {
                  name: "Item 4",
                  alt: "Fourth",
                  description: "This is the fourth item",
                  type: "2A",
                  size: "Small",
                  status: "online" 
                },
                {
                  name: "Item 5",
                  alt: "-",
                  description:
                    "This is the fifth item",
                  type: "2A",
                  size: "Large",
                  status: "offline"
                },
                {
                  name: "Item 6",
                  alt: "Sixth",
                  description: "This is the sixth item",
                  type: "1A",
                  size: "Small",
                  status: "online"
                }
              ]}
              loadingText="Loading resources"
              sortingDisabled
              variant="stacked"
              empty={
                <Box
                  margin={{ vertical: "xs" }}
                  textAlign="center"
                  color="inherit"
                >
                  <SpaceBetween size="m">
                    <b>No resources</b>
                    <Button>Create resource</Button>
                  </SpaceBetween>
                </Box>
              }
            />  */}
            
            </div>
          </Grid>

          <Grid
            gridDefinition={[
              { colspan: { default: 12, xxs: 6 } },
              { colspan: { default: 12, xxs: 6 } },
            ]}
          >
            <Container>
            <BarChart
      series={[
        {
          title: "Site 1",
          type: "bar",
          data: [
            { x: new Date(1601058600000), y: 34503 },
            { x: new Date(1601065800000), y: 25832 },
            { x: new Date(1601073000000), y: 4012 },
            { x: new Date(1601080200000), y: 5602 },
            { x: new Date(1601087400000), y: 17839 }
          ],
          valueFormatter: e =>
            "$" +
            e.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })
        },
        {
          title: "Average revenue",
          type: "threshold",
          y: 19104,
          valueFormatter: e =>
            "$" +
            e.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })
        }
      ]}
      xDomain={[
        new Date(1601058600000),
        new Date(1601065800000),
        new Date(1601073000000),
        new Date(1601080200000),
        new Date(1601087400000)
      ]}
      yDomain={[-10000, 40000]}
      i18nStrings={{
        xTickFormatter: e =>
          e
            .toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: !1
            })
            .split(",")
            .join("\n"),
        yTickFormatter: function l(e) {
          return Math.abs(e) >= 1e9
            ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                "G"
            : Math.abs(e) >= 1e6
            ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
              "M"
            : Math.abs(e) >= 1e3
            ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
              "K"
            : e.toFixed(2);
        }
      }}
      ariaLabel="Single data series line chart"
      height={300}
      xTitle="Time (UTC)"
      yTitle="Order Origin"
      empty={
        <Box textAlign="center" color="inherit">
          <b>No data available</b>
          <Box variant="p" color="inherit">
            There is no data available
          </Box>
        </Box>
      }
      noMatch={
        <Box textAlign="center" color="inherit">
          <b>No matching data</b>
          <Box variant="p" color="inherit">
            There is no matching data to display
          </Box>
          <Button>Clear filter</Button>
        </Box>
      }
    />
            </Container>
            <Container>
              <LineChart
                series={[
                  {
                    title: "Site 1",
                    type: "line",
                    data: [
                      { x: new Date(1600972200000), y: 58020 },
                      { x: new Date(1600973100000), y: 102402 },
                      { x: new Date(1600974000000), y: 104920 },
                      { x: new Date(1600974900000), y: 94031 },
                      { x: new Date(1600975800000), y: 125021 },
                      { x: new Date(1600976700000), y: 159219 },
                      { x: new Date(1600977600000), y: 193082 },
                      { x: new Date(1600978500000), y: 162592 },
                      { x: new Date(1600979400000), y: 274021 },
                      { x: new Date(1600980300000), y: 264286 },
                      { x: new Date(1600981200000), y: 289210 },
                      { x: new Date(1600982100000), y: 256362 },
                      { x: new Date(1600983000000), y: 257306 },
                      { x: new Date(1600983900000), y: 186776 },
                      { x: new Date(1600984800000), y: 294020 },
                      { x: new Date(1600985700000), y: 385975 },
                      { x: new Date(1600986600000), y: 486039 },
                      { x: new Date(1600987500000), y: 490447 },
                      { x: new Date(1600988400000), y: 361845 },
                      { x: new Date(1600989300000), y: 339058 },
                      { x: new Date(1600990200000), y: 298028 },
                      { x: new Date(1600991100000), y: 231902 },
                      { x: new Date(1600992000000), y: 224558 },
                      { x: new Date(1600992900000), y: 253901 },
                      { x: new Date(1600993800000), y: 102839 },
                      { x: new Date(1600994700000), y: 234943 },
                      { x: new Date(1600995600000), y: 204405 },
                      { x: new Date(1600996500000), y: 190391 },
                      { x: new Date(1600997400000), y: 183570 },
                      { x: new Date(1600998300000), y: 162592 },
                      { x: new Date(1600999200000), y: 148910 },
                      { x: new Date(1601000100000), y: 229492 },
                      { x: new Date(1601001000000), y: 293910 },
                    ],
                    valueFormatter: function s(e) {
                      return Math.abs(e) >= 1e9
                        ? (e / 1e9).toFixed(1).replace(/\.0$/, "") + "G"
                        : Math.abs(e) >= 1e6
                          ? (e / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
                          : Math.abs(e) >= 1e3
                            ? (e / 1e3).toFixed(1).replace(/\.0$/, "") + "K"
                            : e.toFixed(2);
                    },
                  },
                  {
                    title: "Peak hours",
                    type: "threshold",
                    x: new Date(1600990800000),
                  },
                ]}
                xDomain={[new Date(1600972200000), new Date(1601001000000)]}
                yDomain={[0, 500000]}
                i18nStrings={{
                  xTickFormatter: (e) =>
                    e
                      .toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: !1,
                      })
                      .split(",")
                      .join("\n"),
                  yTickFormatter: function s(e) {
                    return Math.abs(e) >= 1e9
                      ? (e / 1e9).toFixed(1).replace(/\.0$/, "") + "G"
                      : Math.abs(e) >= 1e6
                        ? (e / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
                        : Math.abs(e) >= 1e3
                          ? (e / 1e3).toFixed(1).replace(/\.0$/, "") + "K"
                          : e.toFixed(2);
                  },
                }}
                // detailPopoverSeriesContent={({ series, x, y }) => ({
                //   key: (
                //     <Link external="true" href="#">
                //       {series.title}
                //     </Link>
                //   ),
                //   value: numberFormatter(y)
                // })}
                ariaLabel="Single data series line chart"
                height={300}
                hideFilter
                hideLegend
                xScaleType="time"
                xTitle="Time (UTC)"
                yTitle="Today's Cash Inflow"
                empty={
                  <Box textAlign="center" color="inherit">
                    <b>No data available</b>
                    <Box variant="p" color="inherit">
                      There is no data available
                    </Box>
                  </Box>
                }
                noMatch={
                  <Box textAlign="center" color="inherit">
                    <b>No matching data</b>
                    <Box variant="p" color="inherit">
                      There is no matching data to display
                    </Box>
                    <Button>Clear filter</Button>
                  </Box>
                }
              />
            </Container>
          </Grid>
        </SpaceBetween>
      </div>
    </>
  );
};

export default DashboardCards;
