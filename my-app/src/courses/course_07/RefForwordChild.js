import React from "react";

const RefForwordChild = React.forwardRef((props, ref) => {
  return (
    <div>
      <div class="form-group">
        <input ref={ref} class="form-control" placeholder="Enter your name" />
        <small id="helpId" class="form-text text-muted">
          Help text
        </small>
      </div>
    </div>
  );
});
export default RefForwordChild;
