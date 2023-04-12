import { useContext, useState } from "react";
import DataContext from "./context/DataContext";

const GroupedTeamMembers = () => {

  const { selectedTeam, employees, setTeam } = useContext(DataContext)

  const groupTeamMembers = () => {
    let teams = [];

    let teamAMembers = employees.filter((employee) => employee.teamName === "TeamA");
    let teamA = { team: "TeamA", members: teamAMembers, collapsed: selectedTeam === "TeamA" ? false : true };
    teams.push(teamA);

    let teamBMembers = employees.filter((employee) => employee.teamName === "TeamB");
    let teamB = { team: "TeamB", members: teamBMembers, collapsed: selectedTeam === "TeamB" ? false : true };
    teams.push(teamB)

    let teamCMembers = employees.filter((employee) => employee.teamName === "TeamC");
    let teamC = { team: "TeamC", members: teamCMembers, collapsed: selectedTeam === "TeamC" ? false : true };
    teams.push(teamC)

    let teamDMembers = employees.filter((employee) => employee.teamName === "TeamD");
    let teamD = { team: "TeamD", members: teamDMembers, collapsed: selectedTeam === "TeamD" ? false : true };
    teams.push(teamD)

    return teams;
  }

  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers())

  const handleTeamClick = (event) => {
    let transformedGroupedData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id ? { ...groupedData, collapsed: !groupedData.collapsed } : groupedData);

    setGroupedData(transformedGroupedData);
    setTeam(event.currentTarget.id);
  }

  return (
    <main className="container">
      {
        groupedEmployees.map((groupEmployee) => {
          return (
            <div key={groupEmployee.team} className="card mt-2" style={{ cursor: "pointer" }}>
              <h4 id={groupEmployee.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                Team name : {groupEmployee.team}
              </h4>
              <div className={groupEmployee.collapsed === true ? "collapse" : ""} id={"collapse_" + groupEmployee.team}>
                <hr />
                {
                  groupEmployee.members.map((employee) => {
                    return (
                      <div key={employee.id} className="mt-2">
                        <h5 className="card-title mt-2">
                          <span className="text-dark">Full name: {employee.fullName}</span>
                        </h5>
                        <p>Designation : {employee.designation}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </main>
  )
}

export default GroupedTeamMembers;