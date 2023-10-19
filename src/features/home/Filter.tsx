import { FC, useState } from "react";
import { createPortal } from "react-dom";
import { NameWithId } from "../../types";
import classNames from "./Filter.module.scss";
import { SelectedCategories } from "./types";
const Filter: FC<{
  categories: NameWithId[];
  selectedCategories: SelectedCategories;
  setSelectedCategories: (val: SelectedCategories) => void;
}> = ({ categories, selectedCategories, setSelectedCategories }) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log("categs", categories);
  return (
    <>
      <button
        disabled={!categories?.length}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        filter
      </button>
      {isOpen && categories?.length
        ? createPortal(
            <div className={classNames.container}>
              {categories.map((categ) => (
                <>
                  <button
                    className={
                      selectedCategories[categ.id] == true
                        ? classNames.buttonSelected
                        : classNames.button
                    }
                    onClick={() => {
                      setSelectedCategories({
                        ...selectedCategories,
                        [categ.id]: !selectedCategories[categ.id],
                      });
                    }}
                  >
                    {categ.name}
                  </button>
                </>
              ))}
            </div>,
            document.body
          )
        : null}
    </>
  );
};

export default Filter;
