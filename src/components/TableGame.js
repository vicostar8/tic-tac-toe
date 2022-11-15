import React from "react";

const TableGame = ({ tableGame, handleBox, currentPlayer }) => {
  const myStyle = {
    width: "150px",
    height: "150px",
    border: "5px solid white",
  };

  return (
    <table className="m-5 Table">
      <tbody className="border">
        {tableGame.map((row, i) => (
          <tr key={i}>
            {row.map((col, j) => (
              <td
                key={`${i}-${j}`}
                className={`fw-bold fs-1`}
                style={{
                  ...myStyle,
                  backgroundColor: `${col.bgColor}`,
                }}
                onClick={() => handleBox(col.id, currentPlayer)}
              >
                {col.value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableGame;
