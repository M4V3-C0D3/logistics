import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchQuotations } from "Redux-Store/Quotations/QuotationsThunk";
import Wizard from "@cloudscape-design/components/wizard";
import Input from "@cloudscape-design/components/input";
import Textarea from "@cloudscape-design/components/textarea";
// import "@cloudscape-design/global-styles/index.css"
import DatePicker from "@cloudscape-design/components/date-picker";
import FormField from "@cloudscape-design/components/form-field";
const Quotations = ({ quotations, fetchQuotations }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [value, setValue] = useState("Project Name");
  const [textValue, setTextValue] = useState("Placeholder");
  const [dateValue, setDateValue] = useState("Placeholder");

  useEffect(() => {
    fetchQuotations();
  }, [fetchQuotations]);

  return (
    <div className="main-container">
      <div className="quotations-container">
        {quotations.status === "IN_PROGRESS" ? (
          <div className="loader">
            {/* Implement your custom loader component or UI here */}
            Loading...
          </div>
        ) : (
          <div>
            <Wizard
            style={{borderRadius:"2px",boxShadow:"4px 4px 4px 4px"}}
              i18nStrings={{
                stepNumberLabel: (stepNumber) => `Step ${stepNumber}`,
                collapsedStepsLabel: (stepNumber, stepsCount) =>
                  `Step ${stepNumber} of ${stepsCount}`,
                skipToButtonLabel: (step, stepNumber) =>
                  `Skip to ${step.title}`,
                navigationAriaLabel: "Steps",
                cancelButton: "Cancel",
                previousButton: "Previous",
                nextButton: "Next",
                submitButton: "Launch instance",
              }}
              onNavigate={({ detail }) =>
                setActiveStepIndex(detail.requestedStepIndex)
              }
              activeStepIndex={activeStepIndex}
              steps={[
                {
                  title: "Step up Project",
                  content: (
                    <div style={styles.box} className="flex flex-col gap-2">
                      <h2 className="font-bold">Project Name</h2>
                      {/* Your content for 'Step up Project' step */}
                      <Input
                        onChange={({ detail }) => setTextValue(detail.value)}
                        value={value}
                      />
                      <h2 className="font-bold">Project Description</h2>
                      <Textarea
                        onChange={({ detail }) => setValue(detail.textValue)}
                        value={textValue}
                        placeholder="This is a placeholder"
                      />
                       <FormField
      label="Billing period"
      constraintText="Use YYYY/MM format."
    >
      <DatePicker
        onChange={({ detail }) => setDateValue(detail.datevalue)}
        value={dateValue}
        isDateEnabled={date => date <= new Date()}
        openCalendarAriaLabel={selectedDate =>
          "Choose billing period" +
          (selectedDate
            ? `, selected period is ${selectedDate}`
            : "")
        }
        granularity="month"
        placeholder="YYYY/MM"
      />
    </FormField>
                    </div>
                  ),
                },
                {
                  title: "Resource Pool",
                  content: (
                    <div style={styles.box}>
                      {/* Your content for 'Resource Pool' step */}
                    </div>
                  ),
                },
                {
                  title: "Save and Review",
                  content: (
                    <div style={styles.box}>
                      {/* Your content for 'Save and Review' step */}
                    </div>
                  ),
                },
              ]}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  box: {
    borderRadius: "8px", // Adjust the border radius as needed
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Adjust the shadow as needed
    padding: "20px", // Example padding
    background: "#ffffff", // Example background color
  },
};

const mapStateToProps = (state) => ({
  quotations: state.savedQuotations.quotations,
});

const mapDispatchToProps = {
  fetchQuotations,
};

export default connect(mapStateToProps, mapDispatchToProps)(Quotations);
