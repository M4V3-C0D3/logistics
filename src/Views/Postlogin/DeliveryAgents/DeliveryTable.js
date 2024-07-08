import * as React from "react";
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import Link from "@cloudscape-design/components/link";
import Header from "@cloudscape-design/components/header";
import { Padding } from "@mui/icons-material";
import Modal from "@cloudscape-design/components/modal";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input"; 

export default () => {
     const [visible, setVisible] = React.useState(false);
  return (
    <Table
    Padding
      defaultPadding
      renderAriaLive={({
        firstIndex,
        lastIndex,
        totalItemsCount
      }) =>
        `Displaying items ${firstIndex} to ${lastIndex} of ${totalItemsCount}`
      }
      columnDefinitions={[
        
        {id:"empty",
            header: " ",
            cell: e => e.empty,
            isRowHeader: true,
            marginLeft:"10px"
        },
        {
          id: "agent",
          header: "Agent name",
          cell: e => e.agent,
          isRowHeader: true
        },
        {
          id: "working",
          header: "Working Shift",
          cell: e => e.working,
          isRowHeader: undefined
        },
        {
          id: "total",
          header: "Total",
          cell: e => e.total,
          isRowHeader: undefined
        },
        {
          id: "status",
          header: "status",
          cell: e => e.status,
          isRowHeader: undefined
        },
      ]}
      enableKeyboardNavigation
      items={[
        
        {
          agent: "Satya",
          working: "First",
          total: "111/120",
          status: "Online", 
          size: "Small"
        },
        {
          agent: "Satya",
          working: "First",
          total: "111/120",
          status: "Online", 
          size: "Small"
        },
        {
          agent: "Satya",
          working: "First",
          total: "111/120",
          status: "Online", 
          size: "Small"
        },
        {
          agent: "Satya",
          working: "First",
          total: "111/120",
          status: "Online", 
          size: "Small"
        },
        {
          agent: "Satya",
          working: "First",
          total: "111/120",
          status: "Online", 
          size: "Small"
        },
        {
          agent: "Satya",
          working: "First",
          total: "111/120",
          status: "Online", 
          size: "Small"
        },
        {
          agent: "Satya",
          working: "First",
          total: "111/120",
          status: "Online", 
          size: "Small"
        },
       
      ]}
      loadingText="Loading resources"
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
      footer={
        <Box textAlign="center">
          <Link href="/app/delivery-agents">View all</Link>
        </Box>
      }
      header={
        <Header counter="(100)">Delivery Agents</Header>
      }
    />
  );
}