import React, { useMemo, useState } from "react";
import { useTable, usePagination } from "react-table";
import styled from "styled-components";
import Pagination from "react-bootstrap/Pagination";

export const Table = styled.table`
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;

  .td,
  .th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  .tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  .tr:hover {
    background-color: #ddd;
  }
`;

function NeighborhoodsTable({ data }) {
  const COLUMNS = [
    {
      Header: "Bairro",
      accessor: "I1",
    },
    {
      Header: "População Total",
      accessor: "I2",
    },
    {
      Header: "População de Homens",
      accessor: "I3",
    },
    {
      Header: "População de Mulheres",
      accessor: "I4",
    },
    {
      Header: "Rendimento Nominal Médio Mensal",
      accessor: "I5",
      Cell: ({ value }) =>
        value.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        }),
    },
  ];
  const columns = useMemo(() => COLUMNS, []);
  const mockedData = useMemo(() => data, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    canNextPage,
    previousPage,
    canPreviousPage,
    prepareRow,
    gotoPage,
    pageCount,
  } = useTable(
    {
      columns,
      data: mockedData,
    },
    usePagination
  );

  return (
    <>
      <Table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="bg-blue-200">
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="th p-2">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="tr">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="td p-2 ml-2">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>{" "}
      <Pagination className="ml-2 mt-2">
        <Pagination.First
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        />
        <Pagination.Prev
          disabled={!canPreviousPage}
          onClick={() => previousPage()}
        />
        <Pagination.Item onClick={() => gotoPage(1)}>{1}</Pagination.Item>
        <Pagination.Item onClick={() => gotoPage(2)}>{2}</Pagination.Item>
        <Pagination.Item onClick={() => gotoPage(3)}>{3}</Pagination.Item>
        <Pagination.Item onClick={() => gotoPage(4)}>{4}</Pagination.Item>
        <Pagination.Item onClick={() => gotoPage(5)}>{5}</Pagination.Item>
        <Pagination.Item onClick={() => gotoPage(6)}>{6}</Pagination.Item>
        <Pagination.Item onClick={() => gotoPage(7)}>{7}</Pagination.Item>
        <Pagination.Item onClick={() => gotoPage(8)}>{8}</Pagination.Item>
        <Pagination.Item onClick={() => gotoPage(9)}>{9}</Pagination.Item>
        <Pagination.Next disabled={!canNextPage} onClick={() => nextPage()} />
        <Pagination.Last
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        />
      </Pagination>
    </>
  );
}

export default NeighborhoodsTable;
