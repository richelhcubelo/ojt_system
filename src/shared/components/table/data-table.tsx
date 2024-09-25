import React from "react";
import "./data-table.scss";

interface DataTableProps {
  columns: { header: string; key: string }[];
  data: any[];
  loading?: boolean;
  actions?: (row: any) => React.ReactNode;
}

const DataTable: React.FC<DataTableProps> = ({ columns, data, actions }) => {
  return (
    <div className="data-table">
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.header}</th>
            ))}
            {actions && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={
                    col.key === "status"
                      ? `status ${row[col.key]?.toLowerCase()}`
                      : ""
                  }
                >
                  {row[col.key]}
                </td>
              ))}
              {actions && <td>{actions(row)}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
