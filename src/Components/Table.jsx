import React from "react";
import Col from "./Col";
import Lines_values from "./Lines_values";

function Table(props) {
  let { data } = props;
  return (
    <table>
      <tbody>
        <Lines_values col_values={data.col_values} />
        {data.table1.map((line, idx) => {
          return (
            <tr key={idx}>
              {line.map((col, idy) => {
                return (
                  <Col
                    key={idy}
                    id={idy}
                    value={data.line_values[idx]}
                    color={data.colors[col - 1]}
                  ></Col>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
