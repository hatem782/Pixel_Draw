import React from "react";

function Lines_values(props) {
  let { col_values } = props;
  return (
    <tr>
      {col_values.map((val, id) => {
        return (
          <td className="bordered" key={id}>
            {val}
          </td>
        );
      })}
    </tr>
  );
}

export default Lines_values;
