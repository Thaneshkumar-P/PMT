'use client';

import { Select, SelectContent, SelectGroup, SelectValue, SelectItem, SelectTrigger } from "@/src/components/ui/select";
import { TeamData } from "@/src/app/lib/projectData";
import { useState } from "react";
import { Team } from "@/src/app/lib/definition";
import Image from "next/image";

export default function Teams() {
  const [teams, setTeams] = useState(TeamData);
  const [team, setTeam] = useState<Team | undefined>();

  const handleSetTeam = (teamId: string) => {
    const selectedTeam = teams.find(t => t.teamId === teamId);
    if (selectedTeam) {
      setTeam(selectedTeam);
    }
  };

  return (
    <>
      <div className='flex justify-between items-center'>
        <h4 className='font-medium text-md'>Teams</h4>
        <Select onValueChange={handleSetTeam}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Choose Team" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {teams.map((team) => (
                <SelectItem
                  value={team.teamId}
                  key={team.teamId}
                >
                  {team.teamName}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {team && team.teamMembers.map((member, index) => (
          <div className="flex flex-row items-center p-2 gap-3" key={index}>
            <div>
              <Image src={member.icon} alt={member.name} width={30} height={30} className="rounded-full" />
            </div>
            <div>
              <h4 className="font-medium text-sm text-nowrap">{member.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
