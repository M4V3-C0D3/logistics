import * as React from "react";
import Cards from "@cloudscape-design/components/cards";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import Pagination from "@cloudscape-design/components/pagination";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";
import { Link } from "react-router-dom";
import { ButtonDropdown, Container, Grid } from "@cloudscape-design/components";
import Form from "@cloudscape-design/components/form";
import Modal from "@cloudscape-design/components/modal";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";

const DeliveryAgents = () => {
  const [visible, setVisible] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState([{ name: "Item 2" }]);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [formValue, setFormValue] = React.useState("");


  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setVisible(true);
  };

  const handleFormSubmit = () => {
    console.log('Form submitted:', formValue);
    setVisible(false);
    setFormValue("");
  };
  return (
    <>
      <Modal
        onDismiss={() => setVisible(false)}
        visible={visible}       
        header="Image Details"
      >
        <SpaceBetween direction="vertical" size="l">
          {selectedImage && (
            <img src={selectedImage} alt="Selected" style={{ width: '100%', height: 'auto' }} />
          )}
          <Container>
            <form onSubmit={e => e.preventDefault()}>
              <Form
                actions={
                  <SpaceBetween direction="horizontal" size="xs">
                    <Button formAction="none" variant="link">
                      Cancel
                    </Button>
                    <Button variant="primary">Submit</Button>
                  </SpaceBetween>
                }
                header={<Header variant="h1">Form header</Header>}
              >
                <Grid
                  gridDefinition={[
                    { colspan: { default: 12, xxs: 6 } },
                    { colspan: { default: 12, xxs: 6 } }
                  ]}
                >
                  <SpaceBetween direction="vertical" size="l">
                    <FormField label="Age">
                      <Input />
                    </FormField>
                    <FormField label="Govt Id">
                      <Input />
                    </FormField>
                    <FormField label="Duration of Employee">
                      <Input />
                    </FormField>
                  </SpaceBetween>
                  <SpaceBetween direction="vertical" size="l">
                    <FormField label="Gender">
                      <Input />
                    </FormField>
                    <FormField label="Driver License Number">
                      <Input />
                    </FormField>
                    <FormField label="Address">
                      <Input />
                    </FormField>
                  </SpaceBetween> </Grid></Form>
            </form>

          </Container>

        </SpaceBetween>
      </Modal>
      <Cards
        style={{ ':hover *': { cursor: 'pointer' } }}
        onClick={() => setVisible(true)}
        // onSelectionChange={({ detail }) =>
        //   setSelectedItems(detail?.selectedItems ?? [])
        // }
        // selectedItems={selectedItems}
        // ariaLabels={{
        //   itemSelectionLabel: (e, i) => `select ${i.name}`,
        //   selectionGroupLabel: "Item selection"
        // }}
        cardDefinition={{
          // header: item => (
          // <Link href="#" fontSize="heading-m">
          //   {item.name}
          // </Link>
          // ),

          sections: [
            {
              id: "image",
              content: () => (
                <img
                  style={{ width: "100%" }}
                  src="https://placehold.co/600x400"
                  alt="placeholder"
                  onClick={() => handleImageClick("https://placehold.co/600x400")}
                />
              )
            },
            {
              id: "description",
              header: (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <span>Description</span>
                  <ButtonDropdown
                    items={[
                      {
                        text: "Delete",
                        id: "rm",
                        disabled: false
                      },
                      {
                        text: "Move",
                        id: "mv",
                        disabled: false
                      },
                      {
                        text: "Rename",
                        id: "rn",
                        disabled: true
                      },
                      {
                        text: "View metrics",
                        href: "https://example.com",
                        external: true,
                        externalIconAriaLabel:
                          "(opens in new tab)"
                      }
                    ]}
                    ariaLabel="Control instance"
                    variant="inline-icon"
                  />
                </div>
              ),

              content: (item => <div>{item.description}</div>)
            },
            {
              id: "type",
              header: "Type",
              content: item => item.type,
              width: 50
            },
            {
              id: "size",
              header: "Size",
              content: item => item.size,
              width: 50
            }
          ]
        }}
        cardsPerRow={[
          { cards: 1 },
          { minWidth: 500, cards: 4 }
        ]}
        items={[
          {
            name: "Item 1",
            alt: "First",
            description: "This is the first item",
            type: "1A",
            size: "Small"
          },
          {
            name: "Item 2",
            alt: "Second",
            description: "This is the second item",
            type: "1B",
            size: "Large"
          },
          {
            name: "Item 3",
            alt: "Third",
            description: "This is the third item",
            type: "1A",
            size: "Large"
          },
          {
            name: "Item 4",
            alt: "Fourth",
            description: "This is the fourth item",
            type: "2A",
            size: "Small"
          },
          {
            name: "Item 5",
            alt: "Fifth",
            description: "This is the fifth item",
            type: "2A",
            size: "Large"
          },
          {
            name: "Item 6",
            alt: "Sixth",
            description: "This is the sixth item",
            type: "1A",
            size: "Small"
          }
        ]}
        loadingText="Loading resources"
        selectionType="multi"
        trackBy="name"
        visibleSections={[
          "image",
          "description",
          "type",
          "size"
        ]}
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
        filter={
          <TextFilter filteringPlaceholder="Find resources" />
        }
        header={
          <Header
            counter={
              selectedItems?.length
                ? "(" + selectedItems.length + "/10)"
                : "(10)"
            }
          >
            Cards with actions
          </Header>
        }
        pagination={
          <Pagination currentPageIndex={1} pagesCount={2} />
        }
        preferences={
          <CollectionPreferences
            title="Preferences"
            confirmLabel="Confirm"
            cancelLabel="Cancel"
            preferences={{
              pageSize: 6,
              visibleContent: [
                "description",
                "type",
                "size"
              ]
            }}
            pageSizePreference={{
              title: "Page size",
              options: [
                { value: 6, label: "6 resources" },
                { value: 12, label: "12 resources" }
              ]
            }}
            visibleContentPreference={{
              title: "Select visible content",
              options: [
                {
                  label: "Main distribution properties",
                  options: [
                    {
                      id: "description",
                      label: "Description"
                    },
                    { id: "type", label: "Type" },
                    { id: "size", label: "Size" }
                  ]
                }
              ]
            }}
          />
        }
      />
    </>
  );
}

export default DeliveryAgents;