import { useState } from "react";
import data from "./data.js";

export default function Accordion() {
  const [accordion, setAccordion] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleAccordion(getCurrentId) {
    setAccordion(getCurrentId === accordion ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    const copyMultiple = [...multiple];
    const findIndexOfCopyMultiple = copyMultiple.indexOf(getCurrentId);

    if (findIndexOfCopyMultiple === -1) {
      copyMultiple.push(getCurrentId);
    } else {
      copyMultiple.splice(findIndexOfCopyMultiple, 1);
    }

    setMultiple(copyMultiple);
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>
          Enable multi-selection
        </button>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              onClick={
                enableMultiSelect
                  ? () => handleMultiSelection(dataItem.id)
                  : () => handleAccordion(dataItem.id)
              }
              key={dataItem.id}
            >
              <h2>{dataItem.question}</h2>
              <span>+</span>
              {enableMultiSelect
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <p>{dataItem.answer}</p>
                  )
                : accordion === dataItem.id && <p>{dataItem.answer}</p>}
            </div>
          ))
        ) : (
          <p>No data found.</p>
        )}
      </div>
    </div>
  );
}
