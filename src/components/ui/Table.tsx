import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { cn } from "../../libs/utils";

interface Props {
  data: any;
  columns: any;
  maxHeight?: string;
}

export function Table({ data, columns, maxHeight }: Props) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full mb-4">
        <thead className="bg-shadow">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, index: number) => (
                <th
                  key={header.id}
                  scope="col"
                  className={cn(
                    "px-3 py-3.5 text-left font-bold",
                    index === 0 ? "rounded-l-3xl" : "",
                    index === headerGroup.headers.length - 1
                      ? "rounded-r-3xl"
                      : ""
                  )}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          className={cn(
            "divide-y divide-gray-200 bg-white text-left",
            maxHeight && `overflow-y-auto max-h-${maxHeight}`
          )}
        >
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td className="whitespace-nowrap px-3 py-4" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
