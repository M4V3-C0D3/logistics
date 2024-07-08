import * as React from "react";
import Tabs from "@cloudscape-design/components/tabs";
import DeliveryAgents from "./DelivAgents";
export default () => {
  const [activeTabId, setActiveTabId] = React.useState(
    "first"
  );
  return (
    <Tabs
      onChange={({ detail }) =>
        setActiveTabId(detail.activeTabId)
      }
      activeTabId={activeTabId}
      tabs={[
        {
          label: "Store Delivery Agents",
          id: "first",
          content: <DeliveryAgents/>
        },
        {
          label: "Customer Side Delivery Agents",
          id: "second",
          content: <DeliveryAgents/>
        }
      ]}
    />
  );
}