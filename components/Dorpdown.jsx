import { Multiselect } from "multiselect-react-dropdown";
import { useState, useEffect } from "react";
function Dropdown({ setSelectedValue, categories }) {
  const [options, setOptions] = useState([]);
  const [selectedList, setSelectedList] = useState([]);

  useEffect(() => {
    const list = categories?.map((elem, ind) => {
      return {
        name: elem.name,
        id: ind,
      };
    });
    setOptions(list);
  }, [categories]);

  function onSelect(selectedList, selectedItem) {
    setSelectedList(selectedList);
    setSelectedValue(selectedItem);
  }
  function onRemove(selectedList, removedItem) {
    setSelectedList(selectedList);
  }
  return (
    <Multiselect
      avoidHighlightFirstOption={true}
      disablePreSelectedValues={true}
      singleSelect={true}
      selectedValues={selectedList}
      options={options} // Options to display in the dropdown
      onSelect={onSelect} // Function will trigger on select event
      onRemove={onRemove} // Function will trigger on remove event
      displayValue="name" // Property name to display in the dropdown options
    />
  );
}

export default Dropdown;
