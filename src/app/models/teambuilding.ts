export class TeamBuildingModel {
  constructor(
      public Location: string,
      public CreatorId: string,
      public Participants: string[],
      public ThingsNeeded: string[],
      public Date: Date
  ) {}
}