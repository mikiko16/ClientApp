export class TeamBuildingModel {
  constructor(
      public Location: string,
      public CreatorId: string,
      public Participants: string[],
      public Date: Date,
      public id?: string,
  ) {}
}