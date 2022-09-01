import React from "react";

const BindTable = ({tabledata}) => {
console.log(tabledata);
    return<>
    <div>
        <table>
          <tbody>
            <tr>
              <th></th>
              <th>Doctor</th>
              <th>Assistant</th>
              <th>Hygienist</th>
            </tr>

            {tabledata.timeData &&
              tabledata.timeData.map((item, id) => {
                return (
                  <tr key={id}>
                    <th>{item.time}</th>
                    {item.isdocavailabel ? (
                      <td
                        rowSpan={
                          item.doctorcellmerge > 0 ? item.doctorcellmerge : 1
                        }
                        className="bindtd"
                      >
                        Available
                      </td>
                    ) : item.doctorcellmerge == 0 && !item.isbinddocData ? (
                      <td></td>
                    ) : (
                      ""
                    )}
                    {item.isassistantavailable ? (
                      <td
                        rowSpan={
                          item.assistantroemerge > 0
                            ? item.assistantroemerge
                            : 1
                        }
                        className="bindtd"
                      >
                        Available
                      </td>
                    ) : item.assistantroemerge == 0 && !item.isbindassData ? (
                      <td></td>
                    ) : (
                      ""
                    )}
                    {item.ishygienistavailable ? (
                      <td
                        rowSpan={
                          item.hygienistrowmerge > 0
                            ? item.hygienistrowmerge
                            : 1
                        }
                        className="bindtd"
                      >
                        Available
                      </td>
                    ) : item.hygienistrowmerge == 0 && !item.isbindhybData ? (
                      <td></td>
                    ) : (
                      ""
                    )}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
}

export default BindTable