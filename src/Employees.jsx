
import { useContext } from "react";
import DataContext from "./context/DataContext";

import Teams from './Teams';
import TeamMembers from './TeamMembers'

const Employees = () => {

  const { employees, selectedTeam, handleTeamSelection, handleEmployeeCardClick } = useContext(DataContext)

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-6">
          <Teams selectedTeam={selectedTeam} handleTeamSelection={handleTeamSelection} />
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <div className="card-collection">
            <TeamMembers selectedTeam={selectedTeam} employees={employees} handleEmployeeCardClick={handleEmployeeCardClick} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Employees;