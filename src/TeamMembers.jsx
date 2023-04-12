
import { useContext } from "react";
import DataContext from "./context/DataContext";

import TeamMemberCard from './TeamMemberCard'

const TeamMembers = () => {
  const { employees, handleEmployeeCardClick, selectedTeam } = useContext(DataContext);
  return (
    employees.map((employee) => (
      <TeamMemberCard key={employee.id} employee={employee}/>
    ))
  )
}

export default TeamMembers;