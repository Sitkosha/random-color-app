import React from "react";

function SortPopup({ sortItems, onChange }) {
  const [activeItem, onSelectItem] = React.useState(0);
  const [visiblePopup, setVisiblePopup] = React.useState(false);

  React.useEffect(() => {
    onChange(activeItem);
  }, [activeItem]);

  const activeLabel = sortItems[activeItem];

  const setActiveItem = (index) => {
    onSelectItem(index);
    setVisiblePopup(!visiblePopup);
  };
  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup); 
  };
  const sortRef = React.useRef(); 

  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className="sortPopup" ref={sortRef}>
      <span onClick={toggleVisiblePopup}>{activeLabel}</span>
      {visiblePopup && (
        <div className="visiblePopup">
          <ul>
            {sortItems.map((name, index) => (
              <li onClick={() => setActiveItem(index)} key={`${name}_${index}`}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SortPopup;
