import React from "react";

const MemoComp = ({ name }) => {
  console.log("=========== The Memo Component Rendering ============");

  return (
    <div>
      <h2>Hello {name} from MemoComp </h2>
    </div>
  );
};

export default React.memo(MemoComp);
